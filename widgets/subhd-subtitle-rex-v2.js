WidgetMetadata = {
  id: "subhd.subtitle.rex",
  title: "SubHD 字幕",
  version: "2.1.0",
  requiredVersion: "0.0.1",
  description: "SubHD 字幕搜索（Rex / Forward 明文版）。按片名、番号、剧集搜索，并解析真实下载地址。",
  author: "EL",
  site: "https://subhd.tv/",
  globalParams: [
    {
      name: "cookie",
      title: "Cookie（可选）",
      type: "input",
    },
  ],
  modules: [
    {
      id: "loadSubtitle",
      title: "加载字幕",
      functionName: "loadSubtitle",
      type: "subtitle",
      params: [],
    },
  ],
};

const HOSTS = ["https://subhd.tv", "https://subhd.me", "https://subhd.one"];
const MAX_KEYS = 5;
const MAX_RESULTS = 12;

function textOf(v) {
  if (v == null) return "";
  if (Array.isArray(v)) return v.map(textOf).filter(Boolean).join(" ");
  return String(v).trim();
}

function firstText() {
  for (var i = 0; i < arguments.length; i++) {
    var t = textOf(arguments[i]);
    if (t) return t;
  }
  return "";
}

function decodeHtml(s) {
  return textOf(s)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function unwrap(res) {
  if (res == null) return null;
  if (typeof res === "string") return res;
  if (typeof res.data === "string") return res.data;
  if (res.data != null) return res.data;
  if (typeof res.body === "string") return res.body;
  if (res.body != null) return res.body;
  return res;
}

function parseJson(v) {
  if (v == null) return null;
  if (typeof v === "object") return v;
  try {
    return JSON.parse(String(v));
  } catch (e) {
    return null;
  }
}

function headersOf(params, referer, json) {
  var h = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    Accept: json ? "application/json,text/plain,*/*" : "text/html,application/xhtml+xml,*/*",
    "Accept-Language": "zh-CN,zh-TW;q=0.9,zh;q=0.8,en;q=0.7",
    Referer: referer || "https://subhd.tv/",
  };
  var cookie = firstText(params && params.cookie);
  if (cookie) h.Cookie = cookie;
  if (json) {
    h["Content-Type"] = "application/json; charset=utf-8";
    h["X-Requested-With"] = "XMLHttpRequest";
  }
  return h;
}

async function httpGet(url, params, referer) {
  try {
    return unwrap(await Widget.http.get(url, { headers: headersOf(params, referer, false) }));
  } catch (e) {
    console.warn("[subhd] GET", url, e && e.message);
    return null;
  }
}

async function httpPostJson(url, body, params, referer) {
  var payload = JSON.stringify(body || {});
  var headers = headersOf(params, referer, true);
  try {
    if (Widget.http && typeof Widget.http.post === "function") {
      return unwrap(await Widget.http.post(url, { headers: headers, body: payload, data: payload }));
    }
  } catch (e) {
    console.warn("[subhd] POST", url, e && e.message);
  }
  return null;
}

function extractCode(raw) {
  var s = textOf(raw).toUpperCase().replace(/\./g, " ").replace(/_/g, "-").replace(/\s+/g, " ");
  var regs = [
    /\bFC2(?:[- ]?PPV)?[- ]?\d{5,8}\b/,
    /\b(?:SSIS|SNIS|SSNI|IPX|IPZZ|MIDV|MIDE|STARS|START|SONE|FSDSS|PRED|CAWD|PPPE|JUQ|ABW|MIAA)\s*[- ]?\d{2,6}[A-Z]?\b/,
    /\b[A-Z]{2,10}\s*[- ]?\d{2,8}[A-Z]?\b/,
  ];
  for (var i = 0; i < regs.length; i++) {
    var m = s.match(regs[i]);
    if (m) return m[0].replace(/\s+/g, "").replace(/-+/g, "-");
  }
  return "";
}

function stripEp(v) {
  return textOf(v)
    .replace(/\b(?:第\s*\d+\s*[集話话季]|S\d{1,2}E\d{1,2}|EP?\s*\d+|\d{1,2}x\d{1,2}|Season\s*\d+(?:\s*Episode\s*\d+)?)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function ctxOf(params) {
  var p = params || {};
  var title = firstText(p.title, p.seriesName, p.mediaTitle, p.name, p.fileName, p.filename, p.query, p.episodeName);
  var raw = [title, firstText(p.description, p.id)].filter(Boolean).join(" ");
  var season = Number(p.season) || 0;
  var episode = Number(p.episode) || 0;
  var type = textOf(p.type || p.mediaType).toLowerCase();
  return {
    title: title,
    raw: raw,
    display: stripEp(title || raw),
    code: extractCode(raw) || extractCode(title),
    season: season,
    episode: episode,
    isTv: type === "tv" || type === "series" || season > 0 || episode > 0,
  };
}

function keysOf(ctx) {
  var out = [];
  function add(v) {
    var t = textOf(v);
    if (t.length >= 2) out.push(t);
  }
  if (ctx.code) add(ctx.code);
  if (ctx.isTv && ctx.display && ctx.episode) {
    var s = ctx.season ? String(ctx.season).padStart(2, "0") : "";
    var e = String(ctx.episode).padStart(2, "0");
    if (s) add(ctx.display + " S" + s + "E" + e);
    add(ctx.display + " 第" + ctx.episode + "集");
    add(ctx.display + " E" + e);
  }
  add(ctx.display);
  add(ctx.title);
  var uniq = [];
  var seen = {};
  for (var i = 0; i < out.length; i++) {
    if (!seen[out[i]]) {
      seen[out[i]] = 1;
      uniq.push(out[i]);
    }
  }
  return uniq.slice(0, MAX_KEYS);
}

function langTag(t) {
  var s = textOf(t);
  if (/双语|中英/i.test(s)) return "【双语】";
  if (/繁/.test(s)) return "【繁中】";
  if (/英/.test(s)) return "【英文】";
  if (/简|中文/.test(s)) return "【简中】";
  return "【字幕】";
}

function langCode(t) {
  var s = textOf(t);
  if (/繁/.test(s)) return "zh-Hant";
  if (/英/.test(s) && !/简|中/.test(s)) return "en";
  return "zh-Hans";
}

function parseCount(block) {
  var m = block.match(/bi-download[\s\S]{0,240}?<span[^>]*>\s*([\d.]+)\s*([kKmMwW万]?)/);
  if (!m) return 0;
  var n = Number(m[1]) || 0;
  var u = (m[2] || "").toLowerCase();
  if (u === "k") n *= 1000;
  if (u === "w" || u === "m" || u === "万") n *= 10000;
  return n;
}

function parseExt(block) {
  if (/\bASS\b/i.test(block)) return ".ass";
  if (/\bSSA\b/i.test(block)) return ".ssa";
  if (/\bSRT\b/i.test(block)) return ".srt";
  if (/\bVTT\b/i.test(block)) return ".vtt";
  if (/\bSUP\b/i.test(block)) return ".sup";
  return ".zip";
}

function parseLangs(block) {
  var tags = [];
  if (/简体/.test(block)) tags.push("简体");
  if (/繁体|繁體/.test(block)) tags.push("繁体");
  if (/双语/.test(block)) tags.push("双语");
  if (/英语|英文/.test(block)) tags.push("英语");
  return tags.join(" ");
}

function parseCards(html, host) {
  var items = [];
  if (!html || typeof html !== "string") return items;
  var parts = html.split(/class="bg-white shadow-sm rounded-3 mb-4"/);
  var chunks = parts.length > 1 ? parts.slice(1) : [html];
  for (var i = 0; i < chunks.length; i++) {
    var chunk = chunks[i];
    var idm = chunk.match(/href=['"]\/a\/([A-Za-z0-9_-]+)['"]/);
    if (!idm) continue;
    var sid = idm[1];
    var view = chunk.match(/view-text[\s\S]{0,200}?href=['"]\/a\/[^'"]+['"][^>]*>\s*([^<]+)/i);
    var title = chunk.match(/href=['"]\/a\/[^'"]+['"][^>]*>\s*([^<]+)/);
    var name = decodeHtml((view && view[1]) || (title && title[1]) || sid);
    items.push({
      sid: sid,
      name: name,
      langs: parseLangs(chunk),
      ext: parseExt(chunk),
      downloads: parseCount(chunk),
      page: host + "/a/" + sid,
    });
  }
  var seen = {};
  var uniq = [];
  for (var j = 0; j < items.length; j++) {
    if (!seen[items[j].sid]) {
      seen[items[j].sid] = 1;
      uniq.push(items[j]);
    }
  }
  return uniq;
}

async function prepareUrl(item, params, host) {
  var data = parseJson(await httpPostJson(host + "/api/sub/prepare-download", { sid: item.sid }, params, item.page));
  var path = data && data.success && data.url ? data.url : "/down/" + item.sid;
  if (/^https?:\/\//i.test(path)) return path;
  if (path.charAt(0) !== "/") path = "/" + path;
  return host + path;
}

async function searchOne(host, key, params) {
  var html = await httpGet(host + "/search/" + encodeURIComponent(key), params, host + "/");
  if (typeof html !== "string" || html.length < 300) return [];
  if (/cloudflare|just a moment|cf-challenge/i.test(html) && html.indexOf("view-text") < 0) {
    console.warn("[subhd] challenge page", host);
    return [];
  }
  return parseCards(html, host);
}

function scoreItem(item, ctx) {
  var hay = (item.name + " " + item.langs).toLowerCase();
  var s = item.downloads / 100;
  if (ctx.code && hay.replace(/[-_\s]/g, "").indexOf(ctx.code.toLowerCase().replace(/[-_]/g, "")) >= 0) s += 4000;
  if (ctx.display && hay.indexOf(ctx.display.toLowerCase()) >= 0) s += 800;
  if (ctx.isTv && ctx.season && ctx.episode) {
    var se = "s" + String(ctx.season).padStart(2, "0") + "e" + String(ctx.episode).padStart(2, "0");
    if (hay.indexOf(se) >= 0 || hay.indexOf("第" + ctx.episode + "集") >= 0) s += 2500;
  }
  if (item.ext === ".ass") s += 80;
  if (item.ext === ".srt") s += 60;
  if (item.ext === ".sup") s -= 200;
  if (/简/.test(item.langs)) s += 40;
  if (/双语/.test(item.langs)) s += 30;
  return s;
}

async function loadSubtitle(params) {
  var ctx = ctxOf(params);
  var keys = keysOf(ctx);
  if (!keys.length) return [];

  var host = HOSTS[0];
  var pool = [];
  for (var hi = 0; hi < HOSTS.length; hi++) {
    for (var ki = 0; ki < keys.length; ki++) {
      var list = await searchOne(HOSTS[hi], keys[ki], params);
      console.warn("[subhd] " + HOSTS[hi] + ' "' + keys[ki] + '" -> ' + list.length);
      if (list.length) {
        host = HOSTS[hi];
        pool = list;
        break;
      }
    }
    if (pool.length) break;
  }
  if (!pool.length) return [];

  var ranked = pool.map(function (item) {
    return { item: item, score: scoreItem(item, ctx) };
  });
  ranked.sort(function (a, b) {
    return b.score - a.score;
  });

  var out = [];
  var seen = {};
  for (var i = 0; i < ranked.length; i++) {
    if (out.length >= MAX_RESULTS) break;
    var item = ranked[i].item;
    var url = await prepareUrl(item, params, host);
    if (!url) continue;
    var title = langTag(item.langs || item.name) + item.name + (item.ext === ".zip" ? "" : item.ext);
    if (seen[item.sid] || seen[title]) continue;
    seen[item.sid] = 1;
    seen[title] = 1;
    var extra = item.downloads ? "↓" + item.downloads : "";
    out.push({
      id: item.sid,
      title: title,
      subTitle: extra,
      description: extra,
      lang: langCode(item.langs || item.name),
      count: Math.max(1, Math.round(ranked[i].score)),
      url: url,
    });
  }
  return out;
}

function archiveScore(file, params) {
  var name = (((file && file.name) || "") + " " + ((file && file.path) || "")).toLowerCase();
  var s = 0;
  if (/\.ass$/.test(name)) s += 50;
  if (/\.srt$/.test(name)) s += 40;
  if (/简|chs|zh-hans|gb/.test(name)) s += 80;
  if (/繁|cht|zh-hant|big5/.test(name)) s += 20;
  if (/双语|chs[&_]?eng/.test(name)) s += 30;
  var season = Number(params && params.season) || 0;
  var episode = Number(params && params.episode) || 0;
  if (season && episode) {
    var se = "s" + String(season).padStart(2, "0") + "e" + String(episode).padStart(2, "0");
    if (name.indexOf(se) >= 0) s += 200;
    if (name.indexOf("e" + String(episode).padStart(2, "0")) >= 0) s += 80;
  }
  if (/\.sup$|\.idx$|\.sub$/.test(name)) s -= 100;
  return s;
}

async function resolveSubtitleArchive(params) {
  var files = [];
  try {
    files = JSON.parse((params && params.subtitleFiles) || "[]");
  } catch (e) {}
  if (!Array.isArray(files) || !files.length) return null;
  var best = files[0];
  var bestScore = archiveScore(best, params);
  for (var i = 1; i < files.length; i++) {
    var sc = archiveScore(files[i], params);
    if (sc > bestScore) {
      best = files[i];
      bestScore = sc;
    }
  }
  return best && best.path ? best.path : null;
}
