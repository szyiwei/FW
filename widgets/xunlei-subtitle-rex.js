WidgetMetadata = {
  id: "xunlei.subtitle.rex",
  title: "迅雷字幕",
  version: "2.0.0",
  requiredVersion: "0.0.1",
  description: "迅雷看看字幕搜索，适配 Rex / Forward。按片名、番号、剧集信息搜索。",
  author: "EL",
  site: "https://www.xunlei.com/",
  globalParams: [],
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

const API_BASE = "https://api-shoulei-ssl.xunlei.com";
const MAX_KEYS = 6;
const MAX_RESULTS = 12;

const HTTP_HEADERS = {
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ForwardWidgets/1.0.2",
  Accept: "application/json,text/plain,*/*",
};

function textOf(value) {
  if (value == null) return "";
  if (Array.isArray(value)) return value.map(textOf).filter(Boolean).join(" ");
  return String(value).trim();
}

function firstText(...values) {
  for (const value of values) {
    const text = textOf(value);
    if (text) return text;
  }
  return "";
}

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function parseJsonSafe(value) {
  if (value == null) return null;
  if (typeof value === "object") return value;
  if (typeof value !== "string") return null;
  const text = value.trim();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (_) {
    return null;
  }
}

function unwrapHttp(res) {
  if (res == null) return null;
  if (typeof res === "string") return parseJsonSafe(res);
  if (typeof res.data === "string") return parseJsonSafe(res.data) || res.data;
  if (res.data && typeof res.data === "object") return res.data;
  if (typeof res.body === "string") return parseJsonSafe(res.body) || res.body;
  if (res.body && typeof res.body === "object") return res.body;
  if (typeof res.json === "function") return null;
  return res;
}

async function httpGet(url) {
  const request = async () => {
    if (typeof Widget !== "undefined" && Widget.http && typeof Widget.http.get === "function") {
      return Widget.http.get(url, { headers: HTTP_HEADERS });
    }
    if (typeof fetch === "function") {
      const res = await fetch(url, { headers: HTTP_HEADERS });
      const data = await res.json();
      return { data };
    }
    throw new Error("no http client");
  };

  try {
    return unwrapHttp(await request());
  } catch (err) {
    console.warn("[xunlei-rex] http error:", err && err.message ? err.message : err);
    return null;
  }
}

function getLangTag(langStr) {
  const t = textOf(langStr).toLowerCase();
  if (!t) return "【字幕】";
  if (t.includes("双语") || t.includes("中英") || t.includes("chs&eng") || t.includes("cht&eng")) return "【双语】";
  if (t.includes("繁") || t.includes("cht") || t.includes("zh-hant") || t.includes("zh_tw")) return "【繁中】";
  if (t.includes("简") || t.includes("chs") || t.includes("zh-hans") || t.includes("zho") || t.includes("chi") || t.includes("中文")) return "【简中】";
  if (t.includes("英") || t.includes("eng") || t === "en") return "【英文】";
  if (t.includes("日") || t.includes("jpn") || t === "ja") return "【日文】";
  if (t.includes("韩") || t.includes("kor") || t === "ko") return "【韩文】";
  return "【字幕】";
}

function langCode(langStr) {
  const t = textOf(langStr).toLowerCase();
  if (t.includes("繁") || t.includes("cht") || t.includes("zh-hant")) return "zh-Hant";
  if (t.includes("英") || t.includes("eng")) return "en";
  if (t.includes("日") || t.includes("jpn")) return "ja";
  if (t.includes("韩") || t.includes("kor")) return "ko";
  if (t.includes("简") || t.includes("chs") || t.includes("中文") || t.includes("chi") || t.includes("zho")) return "zh-Hans";
  return "zh-Hans";
}

function formatDuration(msOrSec) {
  let n = toNumber(msOrSec);
  if (n <= 0) return "";
  if (n > 100000) n = Math.floor(n / 1000);
  const h = Math.floor(n / 3600);
  const m = Math.floor((n % 3600) / 60);
  const s = Math.floor(n % 60);
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function getExt(name, fallback) {
  const s = textOf(name || fallback).toLowerCase();
  if (s.endsWith(".ass") || s === "ass") return ".ass";
  if (s.endsWith(".ssa") || s === "ssa") return ".ssa";
  if (s.endsWith(".vtt") || s === "vtt") return ".vtt";
  return ".srt";
}

function extractSearchCode(raw) {
  const s = textOf(raw).toUpperCase();
  if (!s) return "";
  const normalized = s.replace(/\./g, " ").replace(/_/g, "-").replace(/\s+/g, " ").trim();
  const patterns = [
    /\bFC2(?:[- ]?PPV)?[- ]?\d{5,8}\b/,
    /\bCARIB[- ]?\d{6,8}\b/,
    /\b1PONDO[- ]?\d{6,8}\b/,
    /\bHEYZO[- ]?\d{3,6}\b/,
    /\bT28[- ]?\d{6,8}\b/,
    /\b(?:S2M|MIAA|SSNI|SNIS|IPX|IPZZ|SSIS|JUQ|MIDE|MIDV|STARS|ABW|RKI|DVAJ|WANZ|LULU|DLDSS|VRTM|SDMU|SDDE|MKMP|HMN|MUDR|ADN|CAWD|PPPE|PRED|MGR|SHKD|MXGS|FSDSS|JUL|KTB|MIAB|GVH|MIMK|JUY|JUTA|IDBD|HND|DASD|CLO|BF|HONB|ROE|CEMD|MIUM|NITR|RCTD|RCT|IPVR|MIBD|JUR|JURD|SOE|ORE|PYO|START|SONE)\s*[-_ ]?\d{2,6}[A-Z]?\b/,
    /\b[A-Z]{2,10}\s*[-_ ]?\d{2,8}[A-Z]?\b/,
  ];
  for (const reg of patterns) {
    const match = normalized.match(reg);
    if (match && match[0]) {
      return match[0].replace(/\s+/g, "").replace(/_/g, "-").replace(/-+/g, "-").toUpperCase();
    }
  }
  return "";
}

function stripJunk(value) {
  return textOf(value)
    .replace(/\b(UNCENSORED|LEAK|OTHER|COMPLETE|FULL|HDR|WEB|BLURAY|BDRIP|WEBDL|REMUX|X264|X265|10BIT|8BIT|HEVC|AVC|AAC|DTS|TRUEHD)\b/gi, " ")
    .replace(/\b(?:CD\d+|PART\d+|DISC\d+)\b/gi, " ")
    .replace(/[._]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripEpisodeMarkers(value) {
  return stripJunk(value)
    .replace(/\b(?:第\s*\d+\s*集|第\s*\d+\s*話|第\s*\d+\s*话|EP\s*\d+|E\s*\d+|S\d{1,2}E\d{1,2}|\d{1,2}x\d{1,2}|Season\s*\d+\s*Episode\s*\d+)\b/gi, " ")
    .replace(/\b(?:第\s*\d+\s*季|Season\s*\d+)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function collectParams(params) {
  const p = params || {};
  const title = firstText(
    p.title,
    p.seriesName,
    p.mediaTitle,
    p.name,
    p.fileName,
    p.filename,
    p.query,
    p.keyword,
    p.episodeName
  );
  const extra = firstText(p.description, p.id, p.link, p.url, p.path);
  const raw = [title, extra].filter(Boolean).join(" ");
  const avCode = extractSearchCode(raw) || extractSearchCode(title);
  const season = toNumber(p.season);
  const episode = toNumber(p.episode);
  const mediaType = textOf(p.type || p.mediaType).toLowerCase();
  const isTv =
    mediaType === "tv" ||
    mediaType === "series" ||
    mediaType === "episode" ||
    season > 0 ||
    episode > 0 ||
    /S\d{1,2}E\d{1,2}/i.test(raw) ||
    /第\s*\d+\s*集/.test(raw);
  return {
    title,
    raw,
    display: stripEpisodeMarkers(title || raw),
    avCode,
    season,
    episode,
    isTv,
    duration: toNumber(p.duration || p.runtime || p.timeLength),
  };
}

function buildSearchKeys(ctx) {
  const keys = [];
  const push = (value) => {
    const key = textOf(value);
    if (key.length >= 2) keys.push(key);
  };

  if (ctx.avCode) {
    const compact = ctx.avCode.replace(/[-_ ]/g, "");
    push(ctx.avCode);
    push(compact);
    const leftover = stripJunk((ctx.display || ctx.title || "").replace(new RegExp(ctx.avCode.replace(/[-_]/g, "[-_]?"), "i"), ""));
    if (leftover && leftover.length >= 2 && leftover !== ctx.avCode) push(`${ctx.avCode} ${leftover}`);
  }

  if (ctx.isTv) {
    const base = ctx.display || ctx.title || ctx.raw;
    const s = ctx.season > 0 ? String(ctx.season).padStart(2, "0") : "";
    const e = ctx.episode > 0 ? String(ctx.episode).padStart(2, "0") : "";
    if (base && s && e) {
      push(`${base} S${s}E${e}`);
      push(`${base} ${Number(s)}x${Number(e)}`);
    } else if (base && e) {
      push(`${base} E${e}`);
    }
    push(base);
  }

  push(ctx.display);
  push(ctx.title);
  push(ctx.raw);

  return [...new Set(keys)].slice(0, MAX_KEYS);
}

function normalizeLangs(item) {
  if (Array.isArray(item && item.languages)) return item.languages.filter(Boolean).join(",");
  if (Array.isArray(item && item.Languages)) return item.Languages.filter(Boolean).join(",");
  return firstText(item && item.langs, item && item.Langs, item && item.lang, item && item.language);
}

function normalizeItem(item) {
  const name = firstText(item && item.name, item && item.Name, item && item.simple_name, item && item.title, "迅雷字幕");
  const url = firstText(item && item.url, item && item.Url);
  const langs = normalizeLangs(item);
  const ext = firstText(item && item.ext, item && item.Ext) || getExt(name);
  return {
    id: firstText(item && item.gcid, item && item.cid, url, name),
    name,
    simpleName: firstText(item && item.simple_name, name),
    langs,
    extraName: textOf(item && item.extra_name),
    ext,
    url,
    duration: toNumber(item && (item.duration || item.Duration)),
    score: toNumber(item && (item.score || item.Score)),
    fingerprintScore: toNumber(item && (item.fingerprintf_score || item.fingerprintScore)),
  };
}

function scoreItem(item, ctx) {
  const hay = `${item.name} ${item.simpleName} ${item.langs}`.toLowerCase();
  const loose = hay.replace(/[-_\s.]/g, "");
  let score = item.score + item.fingerprintScore;

  if (ctx.avCode) {
    const code = ctx.avCode.toLowerCase();
    const compact = code.replace(/[-_ ]/g, "");
    if (hay.includes(code) || loose.includes(compact)) score += 5000;
  }

  const title = (ctx.display || ctx.title || "").toLowerCase();
  if (title && (hay.includes(title) || loose.includes(title.replace(/[-_\s.]/g, "")))) score += 800;

  if (ctx.isTv && ctx.season && ctx.episode) {
    const s = String(ctx.season).padStart(2, "0");
    const e = String(ctx.episode).padStart(2, "0");
    if (hay.includes(`s${s}e${e}`) || hay.includes(`${Number(s)}x${Number(e)}`)) score += 3000;
  }

  if (/字幕|sub/.test(hay)) score += 50;
  if (item.duration > 0) score += 20;
  if (item.ext === ".ass") score += 10;
  if (item.extraName) score += 5;
  return score;
}

async function searchSub(keyword, duration) {
  const query = [`name=${encodeURIComponent(keyword)}`];
  if (duration > 0) query.push(`duration=${encodeURIComponent(String(duration))}`);
  const data = await httpGet(`${API_BASE}/oracle/subtitle?${query.join("&")}`);
  if (!data || toNumber(data.code) !== 0 || !Array.isArray(data.data)) {
    console.warn(`[xunlei-rex] empty keyword="${keyword}" code=${data && data.code}`);
    return [];
  }
  console.warn(`[xunlei-rex] keyword="${keyword}" hit=${data.data.length}`);
  return data.data;
}

async function loadSubtitle(params) {
  const ctx = collectParams(params);
  const keys = buildSearchKeys(ctx);
  if (keys.length === 0) {
    console.warn("[xunlei-rex] no search keys", params);
    return [];
  }

  const merged = [];
  const seenRaw = new Set();
  for (const key of keys) {
    const list = await searchSub(key, ctx.duration);
    for (const raw of list) {
      const item = normalizeItem(raw);
      if (!item.url) continue;
      const dedupe = `${item.url}|${item.name.toLowerCase()}`;
      if (seenRaw.has(dedupe)) continue;
      seenRaw.add(dedupe);
      merged.push(item);
    }
    if (merged.length >= MAX_RESULTS * 3) break;
  }

  if (merged.length === 0) {
    console.warn(`[xunlei-rex] no results keys=${keys.join(" | ")}`);
    return [];
  }

  const ranked = merged
    .map((item) => ({ item, score: scoreItem(item, ctx) }))
    .sort((a, b) => b.score - a.score);

  const result = [];
  const exist = new Set();
  for (const { item, score } of ranked) {
    if (result.length >= MAX_RESULTS) break;
    const ext = getExt(item.name, item.ext);
    const cleanName = item.name.replace(/\.(srt|ass|ssa|vtt|zip|rar|7z)$/i, "");
    const langTag = getLangTag(item.langs || item.name);
    const durationText = formatDuration(item.duration);
    const extra = [durationText ? `时长${durationText}` : "", item.extraName].filter(Boolean).join(" · ");
    const title = `${langTag}${item.simpleName && item.simpleName !== item.name ? item.simpleName : cleanName}${ext}`;
    const key = title.toLowerCase();
    if (exist.has(key)) continue;
    exist.add(key);

    result.push({
      id: item.id,
      title,
      subTitle: extra,
      description: extra,
      lang: langCode(item.langs || item.name),
      count: Math.max(1, Math.round(score)),
      url: item.url,
    });
  }

  return result;
}
