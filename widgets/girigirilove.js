var WidgetMetadata = {
  id: "rex.girigirilove",
  title: "girigiri愛動漫",
  description: "ani.girigirilove.com 最新／分類／播放（明文）",
  author: "local",
  site: "https://ani.girigirilove.com/",
  version: "1.0.3-rex",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      id: "home",
      title: "最新",
      functionName: "loadHome",
      cacheDuration: 1800,
      params: [{ name: "page", title: "頁碼", type: "page", value: "1" }]
    },
    {
      id: "show",
      title: "分類",
      functionName: "loadShow",
      cacheDuration: 1800,
      params: [
        {
          name: "tid",
          title: "分類",
          type: "enumeration",
          value: "2",
          enumOptions: [
            { title: "日番", value: "2" },
            { title: "美番", value: "3" },
            { title: "真人番劇", value: "20" },
            { title: "劇場版", value: "21" },
            { title: "BD副音軌", value: "24" },
            { title: "周邊／其他", value: "26" }
          ]
        },
        { name: "page", title: "頁碼", type: "page", value: "1" }
      ]
    }
  ]
};

var HOST = "https://ani.girigirilove.com";
var UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1";

function headers(referer) {
  return {
    "User-Agent": UA,
    Accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-TW,zh;q=0.9,en;q=0.8",
    Referer: referer || HOST + "/"
  };
}

function abs(url) {
  if (!url) return "";
  url = String(url).replace(/&amp;/g, "&").trim();
  if (url.indexOf("//") === 0) return "https:" + url;
  if (url.charAt(0) === "/") return HOST + url;
  return url;
}

async function fetchHtml(url) {
  var res = await Widget.http.get(url, { headers: headers(HOST + "/") });
  var html = res && res.data != null ? String(res.data) : "";
  if (!html) throw new Error("頁面載入失敗");
  if (html.indexOf("ds-verify") !== -1 && html.length < 25000) {
    throw new Error("站點驗證碼，稍後再試或換網路");
  }
  return html;
}

function parseList(html) {
  var $ = Widget.html.load(html);
  var items = [];
  var seen = {};
  $(".public-list-box").each(function () {
    var $box = $(this);
    var $a = $box.find("a.public-list-exp, a.time-title").first();
    var href = $a.attr("href") || $box.find("a[href*='/GV']").first().attr("href") || "";
    if (!href || href.indexOf("/GV") < 0) return;
    var link = abs(href.split("?")[0]);
    if (seen[link]) return;
    seen[link] = true;
    var title =
      $a.attr("title") ||
      $box.find(".time-title").attr("title") ||
      $box.find(".time-title").text() ||
      $box.find("img").attr("alt") ||
      "";
    title = String(title).trim();
    if (!title) return;
    var img = $box.find("img").first();
    var cover = abs(img.attr("data-src") || img.attr("data-original") || img.attr("src") || "");
    if (cover.indexOf("data:image") === 0) cover = abs(img.attr("data-src") || "");
    var tip = ($box.find(".public-list-prb").text() || "").trim();
    items.push({
      id: link,
      type: "url",
      mediaType: "tv",
      title: title,
      link: link,
      coverUrl: cover,
      posterPath: cover,
      backdropPath: cover,
      image: cover,
      description: tip,
      playerType: "app"
    });
  });
  return items;
}

async function loadHome(params) {
  var page = Math.max(1, parseInt(params && params.page, 10) || 1);
  if (page > 1) return loadShow({ tid: "2", page: String(page) });
  var items = parseList(await fetchHtml(HOST + "/"));
  if (!items.length) throw new Error("首頁沒有解析到影片");
  return items;
}

async function loadShow(params) {
  var tid = String((params && params.tid) || "2");
  var page = Math.max(1, parseInt(params && params.page, 10) || 1);
  var path = page > 1 ? "/show/" + tid + "-----------" + page + "/" : "/show/" + tid + "-----------/";
  var items = parseList(await fetchHtml(HOST + path));
  if (!items.length) throw new Error("這個分類目前沒有影片");
  return items;
}

function extractPlayer(html) {
  var m = String(html || "").match(/var\s+player_aaaa\s*=\s*(\{)/);
  if (!m) return null;
  var start = m.index + m[0].length - 1;
  var depth = 0;
  var end = -1;
  for (var i = start; i < html.length && i < start + 12000; i++) {
    var ch = html.charAt(i);
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end < 0) return null;
  try {
    return JSON.parse(html.slice(start, end + 1));
  } catch (e) {
    return null;
  }
}

function decodePlayUrl(raw, encrypt) {
  var url = String(raw || "");
  if (!url) return "";
  var n = Number(encrypt) || 0;
  if (n === 2) {
    try {
      if (typeof atob === "function") url = atob(decodeURIComponent(url));
    } catch (e) {}
    try {
      url = decodeURIComponent(url);
    } catch (e2) {}
  } else if (n === 1) {
    try {
      url = decodeURIComponent(url);
    } catch (e3) {}
  }
  url = url.replace(/\\u002F/g, "/").replace(/\\\//g, "/");
  if (!/^https?:\/\//i.test(url)) return "";
  return url;
}

function parseEpisodes($, pageUrl) {
  var eps = [];
  var seen = {};
  $("a[href*='playGV']").each(function () {
    var href = $(this).attr("href") || "";
    var m = href.match(/\/play(GV\d+-\d+-\d+)\//);
    if (!m) return;
    var play = abs("/play" + m[1] + "/");
    if (seen[play]) return;
    seen[play] = true;
    var name = ($(this).text() || "").replace(/\s+/g, " ").trim() || m[1];
    eps.push({ title: name, link: play });
  });
  return eps;
}

async function loadDetail(link) {
  var pageUrl = abs(link);
  var html = await fetchHtml(pageUrl);
  var $ = Widget.html.load(html);
  var title =
    ($(".this-desc-title, h1, .slide-info-title").first().text() ||
      $("title").text() ||
      "")
      .replace(/\s*[-_|].*$/, "")
      .trim();
  var cover = abs(
    $("img.gen-movie-img, .detail-pic img, .vod-detail img").first().attr("data-src") ||
      $("img.gen-movie-img").first().attr("src") ||
      ""
  );
  var episodes = parseEpisodes($, pageUrl);
  if (/\/playGV\d+-\d+-\d+\//.test(pageUrl)) {
    episodes = [{ title: title || "播放", link: pageUrl }].concat(
      episodes.filter(function (ep) { return ep.link !== pageUrl; })
    );
  }
  if (!episodes.length) {
    var firstPlay = (html.match(/\/playGV\d+-\d+-\d+\//) || [])[0];
    if (firstPlay) episodes = [{ title: "第1集", link: abs(firstPlay) }];
  }
  if (!episodes.length) throw new Error("找不到分集");

  var playPage = /\/playGV\d+-\d+-\d+\//.test(pageUrl) ? pageUrl : episodes[0].link;
  var firstHtml = playPage === pageUrl ? html : await fetchHtml(playPage);
  var player = extractPlayer(firstHtml);
  var videoUrl = player ? decodePlayUrl(player.url, player.encrypt) : "";
  if (!videoUrl) throw new Error("找不到播放地址");

  var playHeaders = {
    "User-Agent": UA,
    Referer: HOST + "/",
    Origin: HOST
  };
  var item = {
    id: pageUrl,
    type: "detail",
    mediaType: episodes.length > 1 ? "tv" : "movie",
    title: title || (player && player.vod_data && player.vod_data.vod_name) || "girigiri愛動漫",
    link: pageUrl,
    coverUrl: cover,
    posterPath: cover,
    backdropPath: cover,
    videoUrl: videoUrl,
    playerType: "app",
    customHeaders: playHeaders,
    headers: playHeaders
  };
  if (episodes.length > 1) {
    item.episodeItems = episodes.map(function (ep, i) {
      return {
        id: ep.link,
        type: "url",
        title: ep.title,
        episode: i + 1,
        mediaType: "tv",
        link: ep.link,
        playerType: "app"
      };
    });
  }
  return item;
}
