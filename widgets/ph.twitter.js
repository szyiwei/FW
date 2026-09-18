/**
 * PH 推特 - Forward Widget
 */

WidgetMetadata = {
  id: "forward.pornhub.twitter",
  title: "PH 推特",
  icon: "https://www.pornhub.com/favicon.ico",
  version: "1.9.2",
  requiredVersion: "0.0.1",
  description: "Pornhub 推特搜索 + 分类",
  author: "local",
  site: "https://www.pornhub.com",
  detailCacheDuration: 60,
  modules: [
    { id: "catTwitter", title: "推特", functionName: "loadTwitter", cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "catHottest", title: "热门", functionName: "loadHottest", cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "catNewest", title: "最新", functionName: "loadNewest", cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "catMostViewed", title: "最多观看", functionName: "loadMostViewed", cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "catTopRated", title: "最高评分", functionName: "loadTopRated", cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "catAsian", title: "亚洲", functionName: "loadAsian", cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "catJapanese", title: "日本", functionName: "loadJapanese", cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "catChinese", title: "中文", functionName: "loadChinese", cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "catAmateur", title: "素人", functionName: "loadAmateur", cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "catOnlyfans", title: "OnlyFans", functionName: "loadOnlyfans", cacheDuration: 1800, params: [{ name: "page", title: "页码", type: "page" }] },
    { id: "loadResource", title: "加载资源", functionName: "loadResource", type: "stream", cacheDuration: 0, params: [] },
  ],
};

var BASE = "https://www.pornhub.com";
var WATCH_BASE = "https://www.pornhub.com";
var UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

function cleanText(s) {
  return String(s || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function extract(text, re) {
  var m = String(text || "").match(re);
  return m ? m[1] || m[0] : "";
}

function absUrl(url) {
  var u = String(url || "").trim();
  if (!u) return "";
  if (u.indexOf("//") === 0) return "https:" + u;
  if (u.indexOf("/") === 0) return BASE + u;
  return u;
}

function pageNum(v) {
  var n = Number(v);
  return isFinite(n) && n > 0 ? Math.floor(n) : 1;
}

function videoUrl(viewkey) {
  return BASE + "/view_video.php?viewkey=" + encodeURIComponent(viewkey);
}

async function fetchHtml(url) {
  var res = await Widget.http.get(url, {
    headers: {
      "User-Agent": UA,
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      Referer: BASE + "/",
    },
  });
  if (typeof res === "string") return res;
  if (res && typeof res.data === "string") return res.data;
  if (res && res.data) return String(res.data);
  if (res && res.body) return String(res.body);
  if (res && res.text) return String(res.text);
  return "";
}

function parseCards(html) {
  var source = String(html || "");
  var cards = [];
  var seen = {};
  var re = /data-video-vkey=["']([a-zA-Z0-9]+)["']/g;
  var match;
  while ((match = re.exec(source))) {
    var viewkey = match[1];
    if (!viewkey || seen[viewkey]) continue;
    seen[viewkey] = true;
    var block = source.slice(match.index, match.index + 5000);
    var title = cleanText(
      extract(block, /\btitle=["']([^"']+)["']/i) ||
        extract(block, /\balt=["']([^"']+)["']/i)
    );
    var poster =
      extract(block, /\bdata-mediumthumb=["']([^"']+)["']/i) ||
      extract(block, /\bdata-thumb_url=["']([^"']+)["']/i) ||
      extract(block, /\bsrc=["'](https?:\/\/[^"']+\.(?:jpg|jpeg|webp|png)[^"']*)["']/i);
    if (!title) continue;
    var link = videoUrl(viewkey);
    cards.push({
      id: viewkey,
      type: "url",
      mediaType: "movie",
      title: title,
      coverUrl: absUrl(poster),
      posterPath: absUrl(poster),
      backdropPath: absUrl(poster),
      link: link,
    });
  }
  return cards;
}

async function loadPage(url) {
  try {
    return parseCards(await fetchHtml(url));
  } catch (e) {
    return [];
  }
}

function searchUrl(keyword, page) {
  return BASE + "/video/search?search=" + encodeURIComponent(keyword) + "&page=" + pageNum(page);
}

function videoListUrl(order, page) {
  return BASE + "/video?o=" + encodeURIComponent(order) + "&page=" + pageNum(page);
}

async function loadTwitter(params) { return loadPage(searchUrl("推特", params && params.page)); }
async function loadHottest(params) { return loadPage(videoListUrl("ht", params && params.page)); }
async function loadNewest(params) { return loadPage(videoListUrl("cm", params && params.page)); }
async function loadMostViewed(params) { return loadPage(videoListUrl("mv", params && params.page)); }
async function loadTopRated(params) { return loadPage(videoListUrl("tr", params && params.page)); }
async function loadAsian(params) { return loadPage(searchUrl("asian", params && params.page)); }
async function loadJapanese(params) { return loadPage(searchUrl("japanese", params && params.page)); }
async function loadChinese(params) { return loadPage(searchUrl("国产", params && params.page)); }
async function loadAmateur(params) { return loadPage(searchUrl("amateur", params && params.page)); }
async function loadOnlyfans(params) { return loadPage(searchUrl("onlyfans", params && params.page)); }
async function loadList(params) { return loadTwitter(params); }
async function search(params) { return loadPage(searchUrl((params && params.keyword) || "推特", params && params.page)); }

function parseMedia(html) {
  var sources = [];
  var seen = {};
  var text = String(html || "").replace(/\\\//g, "/");
  function add(url, quality) {
    url = String(url || "").replace(/&amp;/g, "&");
    if (!url || seen[url]) return;
    if (!/ev(?:-h)?\.phncdn\.com/i.test(url)) return;
    if (url.indexOf("m3u8") < 0 && !/\d+P_\d+K_.*\.mp4/i.test(url)) return;
    seen[url] = true;
    sources.push({
      quality: String(quality || (url.indexOf("m3u8") >= 0 ? "HLS" : "MP4")),
      url: url,
      hls: url.indexOf("m3u8") >= 0,
    });
  }
  var raw = extract(text, /"mediaDefinitions"\s*:\s*(\[[\s\S]{0,20000}?\])/);
  if (raw) {
    try {
      var media = JSON.parse(raw);
      for (var i = 0; i < media.length; i++) {
        if (media[i] && media[i].videoUrl) add(media[i].videoUrl, media[i].quality || media[i].height);
      }
    } catch (e) {}
  }
  var m;
  var re = /https?:\/\/ev(?:-h)?\.phncdn\.com\/[^"'\\\s<>]+/g;
  while ((m = re.exec(text))) add(m[0], extract(m[0], /(\d+)P_/));
  sources.sort(function (a, b) { return (b.hls ? 1 : 0) - (a.hls ? 1 : 0); });
  return sources;
}

async function loadDetail(link) {
  var pageUrl = String(link || "");
  if (pageUrl.indexOf("view_video.php") < 0) pageUrl = videoUrl(pageUrl);
  var html = await fetchHtml(pageUrl);
  var title = cleanText(
    extract(html, /property=["']og:title["'][^>]*content=["']([^"']+)["']/i) ||
      extract(html, /<title[^>]*>([\s\S]*?)<\/title>/i)
  ).replace(/\s*-\s*Pornhub.*$/i, "");
  var poster = absUrl(extract(html, /property=["']og:image["'][^>]*content=["']([^"']+)["']/i));
  var sources = parseMedia(html);
  var first = sources[0];
  return {
    id: extract(pageUrl, /viewkey=([^&]+)/) || pageUrl,
    type: "url",
    mediaType: "movie",
    title: title || "Pornhub",
    coverUrl: poster,
    posterPath: poster,
    backdropPath: poster,
    link: pageUrl,
    description: "Pornhub",
    videoUrl: first ? first.url : "",
    customHeaders: {
      "User-Agent": UA,
      Referer: pageUrl,
    },
    quality: first ? String(first.quality) : "",
  };
}

async function loadResource(params) {
  params = params || {};
  var pageUrl = params.link || "";
  if (!pageUrl || String(pageUrl).indexOf("view_video.php") < 0) {
    pageUrl = videoUrl(params.id || params.link || "");
  }
  var html = await fetchHtml(pageUrl);
  var sources = parseMedia(html);
  if (!sources.length) throw new Error("没有可播放地址");
  var out = [];
  for (var i = 0; i < sources.length; i++) {
    out.push({
      name: String(sources[i].quality || "play"),
      description: sources[i].hls ? "HLS" : "MP4",
      url: sources[i].url,
      customHeaders: {
        "User-Agent": UA,
        Referer: pageUrl,
      },
      playerType: "app",
    });
  }
  return out;
}
