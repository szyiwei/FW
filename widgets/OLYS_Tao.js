WidgetMetadata = {
  id: "oleTao",
  title: "欧乐影视",
  icon: "",
  version: "1.2.5",
  requiredVersion: "0.0.1",
  description: "全能聚合",
  author: "廿二日",
  site: "https://new.olevod.com",
  detailCacheDuration: 300,
  globalParams: [
    { name: "ApiHost", title: "欧乐API地址 (可填镜像站)", type: "input", value: "https://api.olelive.com" },
  ],
  search: {
    title: "搜索",
    functionName: "searchOle",
    params: [
        { name: "wd", title: "关键词", type: "input", value: "" },
        { name: "pg", title: "页码", type: "page", value: "1" }
    ]
  },
  modules: [
    { id: "ole_movie", title: "电影", functionName: "loadMovieList", type: "video", cacheDuration: 3600, params: [ { name: "area", title: "地区", type: "enumeration", value: "0", enumOptions: [ { title: "全部", value: "0" }, { title: "大陆", value: "大陆" }, { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" }, { title: "美国", value: "美国" }, { title: "日本", value: "日本" }, { title: "韩国", value: "韩国" }, { title: "英国", value: "英国" }, { title: "法国", value: "法国" }, { title: "德国", value: "德国" }, { title: "西班牙", value: "西班牙" }, { title: "泰国", value: "泰国" }, { title: "印度", value: "印度" } ] }, { name: "sort_by", title: "榜单类型", type: "enumeration", value: "hot", enumOptions: [ { title: "热门电影", value: "hot" }, { title: "高分电影", value: "score" }, { title: "最新电影", value: "update" }, { title: "最近添加", value: "desc" } ] }, { name: "page", title: "页码", type: "page", startPage: 1 } ] },
    { id: "ole_tv", title: "剧集", functionName: "loadTvList", type: "video", cacheDuration: 3600, params: [ { name: "area", title: "地区", type: "enumeration", value: "0", enumOptions: [ { title: "全部", value: "0" }, { title: "大陆", value: "大陆" }, { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" }, { title: "美国", value: "美国" }, { title: "日本", value: "日本" }, { title: "韩国", value: "韩国" }, { title: "英国", value: "英国" }, { title: "法国", value: "法国" }, { title: "德国", value: "德国" }, { title: "西班牙", value: "西班牙" }, { title: "泰国", value: "泰国" }, { title: "印度", value: "印度" } ] }, { name: "sort_by", title: "榜单类型", type: "enumeration", value: "hot", enumOptions: [ { title: "热门剧集", value: "hot" }, { title: "高分剧集", value: "score" }, { title: "最新剧集", value: "update" }, { title: "最近添加", value: "desc" } ] }, { name: "page", title: "页码", type: "page", startPage: 1 } ] },
    { id: "ole_variety", title: "综艺", functionName: "loadVarietyList", type: "video", cacheDuration: 3600, params: [ { name: "area", title: "地区", type: "enumeration", value: "0", enumOptions: [ { title: "全部", value: "0" }, { title: "大陆", value: "大陆" }, { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" }, { title: "美国", value: "美国" }, { title: "日本", value: "日本" }, { title: "韩国", value: "韩国" }, { title: "英国", value: "英国" }, { title: "法国", value: "法国" }, { title: "德国", value: "德国" }, { title: "西班牙", value: "西班牙" }, { title: "泰国", value: "泰国" }, { title: "印度", value: "印度" } ] }, { name: "sort_by", title: "榜单类型", type: "enumeration", value: "hot", enumOptions: [ { title: "热门综艺", value: "hot" }, { title: "高分综艺", value: "score" }, { title: "最新综艺", value: "update" }, { title: "最近添加", value: "desc" } ] }, { name: "page", title: "页码", type: "page", startPage: 1 } ] },
    { id: "ole_anime", title: "动漫", functionName: "loadAnimeList", type: "video", cacheDuration: 3600, params: [ { name: "area", title: "地区", type: "enumeration", value: "0", enumOptions: [ { title: "全部", value: "0" }, { title: "大陆", value: "大陆" }, { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" }, { title: "美国", value: "美国" }, { title: "日本", value: "日本" }, { title: "韩国", value: "韩国" }, { title: "英国", value: "英国" }, { title: "法国", value: "法国" }, { title: "德国", value: "德国" }, { title: "西班牙", value: "西班牙" }, { title: "泰国", value: "泰国" }, { title: "印度", value: "印度" } ] }, { name: "sort_by", title: "榜单类型", type: "enumeration", value: "hot", enumOptions: [ { title: "热门动漫", value: "hot" }, { title: "高分动漫", value: "score" }, { title: "最新动漫", value: "update" }, { title: "最近添加", value: "desc" } ] }, { name: "page", title: "页码", type: "page", startPage: 1 } ] },
    { id: "ole_short", title: "短剧", functionName: "loadShortList", type: "video", cacheDuration: 3600, params: [ { name: "area", title: "地区", type: "enumeration", value: "0", enumOptions: [ { title: "全部", value: "0" }, { title: "大陆", value: "大陆" }, { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" }, { title: "美国", value: "美国" }, { title: "日本", value: "日本" }, { title: "韩国", value: "韩国" }, { title: "英国", value: "英国" }, { title: "法国", value: "法国" }, { title: "德国", value: "德国" }, { title: "西班牙", value: "西班牙" }, { title: "泰国", value: "泰国" }, { title: "印度", value: "印度" } ] }, { name: "sort_by", title: "榜单类型", type: "enumeration", value: "hot", enumOptions: [ { title: "热门短剧", value: "hot" }, { title: "高分短剧", value: "score" }, { title: "最新短剧", value: "update" }, { title: "最近添加", value: "desc" } ] }, { name: "page", title: "页码", type: "page", startPage: 1 } ] },
    { id: "searchOle", title: "搜索", functionName: "searchOle", type: "video", cacheDuration: 300, params: [ { name: "wd", title: "关键词", type: "input", value: "" }, { name: "pg", title: "页码", type: "page", value: "1" } ] },
    { id: "loadResource", title: "测试", functionName: "loadResource", type: "stream", params: [] }
  ]
};

const DEFAULT_API_HOST = "https://api.olelive.com";
const REFERER = "https://new.olevod.com";
const DEFAULT_PIC_HOST = "https://static.olelive.com/";
const REQUEST_TIMEOUT = 10000;
const MAX_RETRIES = 2;
const CACHE_TTL = 3600000;
let GLOBAL_COOKIE = "";

const REQUEST_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  "Accept": "application/json, text/plain, */*",
  "Accept-Language": "zh-CN,zh;q=0.9",
  "Referer": REFERER,
  "Origin": REFERER,
  "Content-Type": "application/json"
};

const cacheStore = new Map();

function getCacheKey(seriesName, type, episode) { return `${seriesName}_${type}_${episode || "all"}`; }

function getFromCache(key) {
  const entry = cacheStore.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) return entry.data;
  if (entry) cacheStore.delete(key);
  return null;
}

function setToCache(key, data) {
  cacheStore.set(key, { data, timestamp: Date.now() });
  if (cacheStore.size > 50) cacheStore.delete(cacheStore.keys().next().value);
}

function md5(string) {
  function rotateLeft(lValue, iShiftBits) { return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits)); }
  function addUnsigned(lX, lY) {
    let lX8 = (lX & 0x80000000), lY8 = (lY & 0x80000000), lX4 = (lX & 0x40000000), lY4 = (lY & 0x40000000);
    let lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
    if (lX4 | lY4) return (lResult & 0x40000000) ? (lResult ^ 0xC0000000 ^ lX8 ^ lY8) : (lResult ^ 0x40000000 ^ lX8 ^ lY8);
    return (lResult ^ lX8 ^ lY8);
  }
  function f(x, y, z) { return (x & y) | ((~x) & z); }
  function g(x, y, z) { return (x & z) | (y & (~z)); }
  function h(x, y, z) { return x ^ y ^ z; }
  function i(x, y, z) { return y ^ (x | (~z)); }
  function ff(a, b, c, d, x, s, ac) { return addUnsigned(rotateLeft(addUnsigned(a, addUnsigned(addUnsigned(f(b, c, d), x), ac)), s), b); }
  function gg(a, b, c, d, x, s, ac) { return addUnsigned(rotateLeft(addUnsigned(a, addUnsigned(addUnsigned(g(b, c, d), x), ac)), s), b); }
  function hh(a, b, c, d, x, s, ac) { return addUnsigned(rotateLeft(addUnsigned(a, addUnsigned(addUnsigned(h(b, c, d), x), ac)), s), b); }
  function ii(a, b, c, d, x, s, ac) { return addUnsigned(rotateLeft(addUnsigned(a, addUnsigned(addUnsigned(i(b, c, d), x), ac)), s), b); }
  function convertToWordArray(string) {
    let lWordCount, lMessageLength = string.length;
    let lNumberOfWords = (((lMessageLength + 8) - ((lMessageLength + 8) % 64)) / 64 + 1) * 16;
    let lWordArray = Array(lNumberOfWords - 1), lBytePosition = 0, lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }
  function wordToHex(lValue) {
    let wordToHexValue = "", wordToHexValue_temp = "", lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      wordToHexValue_temp = "0" + lByte.toString(16);
      wordToHexValue += wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
    }
    return wordToHexValue;
  }
  let x = convertToWordArray(string), a = 0x67452301, b = 0xEFCDAB89, c = 0x98BADCFE, d = 0x10325476;
  for (let k = 0; k < x.length; k += 16) {
    let AA = a, BB = b, CC = c, DD = d;
    a = ff(a, b, c, d, x[k+0], 7, 0xD76AA478); d = ff(d, a, b, c, x[k+1], 12, 0xE8C7B756); c = ff(c, d, a, b, x[k+2], 17, 0x242070DB); b = ff(b, c, d, a, x[k+3], 22, 0xC1BDCEEE);
    a = ff(a, b, c, d, x[k+4], 7, 0xF57C0FAF); d = ff(d, a, b, c, x[k+5], 12, 0x4787C62A); c = ff(c, d, a, b, x[k+6], 17, 0xA8304613); b = ff(b, c, d, a, x[k+7], 22, 0xFD469501);
    a = ff(a, b, c, d, x[k+8], 7, 0x698098D8); d = ff(d, a, b, c, x[k+9], 12, 0x8B44F7AF); c = ff(c, d, a, b, x[k+10], 17, 0xFFFF5BB1); b = ff(b, c, d, a, x[k+11], 22, 0x895CD7BE);
    a = ff(a, b, c, d, x[k+12], 7, 0x6B901122); d = ff(d, a, b, c, x[k+13], 12, 0xFD987193); c = ff(c, d, a, b, x[k+14], 17, 0xA679438E); b = ff(b, c, d, a, x[k+15], 22, 0x49B40821);
    a = gg(a, b, c, d, x[k+1], 5, 0xF61E2562); d = gg(d, a, b, c, x[k+6], 9, 0xC040B340); c = gg(c, d, a, b, x[k+11], 14, 0x265E5A51); b = gg(b, c, d, a, x[k+0], 20, 0xE9B6C7AA);
    a = gg(a, b, c, d, x[k+5], 5, 0xD62F105D); d = gg(d, a, b, c, x[k+10], 9, 0x02441453); c = gg(c, d, a, b, x[k+15], 14, 0xD8A1E681); b = gg(b, c, d, a, x[k+4], 20, 0xE7D3FBC8);
    a = gg(a, b, c, d, x[k+9], 5, 0x21E1CDE6); d = gg(d, a, b, c, x[k+14], 9, 0xC33707D6); c = gg(c, d, a, b, x[k+3], 14, 0xF4D50D87); b = gg(b, c, d, a, x[k+8], 20, 0x455A14ED);
    a = gg(a, b, c, d, x[k+13], 5, 0xA9E3E905); d = gg(d, a, b, c, x[k+2], 9, 0xFCEFA3F8); c = gg(c, d, a, b, x[k+7], 14, 0x676F02D9); b = gg(b, c, d, a, x[k+12], 20, 0x8D2A4C8A);
    a = hh(a, b, c, d, x[k+5], 4, 0xFFFA3942); d = hh(d, a, b, c, x[k+8], 11, 0x8771F681); c = hh(c, d, a, b, x[k+11], 16, 0x6D9D6122); b = hh(b, c, d, a, x[k+14], 23, 0xFDE5380C);
    a = hh(a, b, c, d, x[k+1], 4, 0xA4BEEA44); d = hh(d, a, b, c, x[k+4], 11, 0x4BDECFA9); c = hh(c, d, a, b, x[k+7], 16, 0xF6BB4B60); b = hh(b, c, d, a, x[k+10], 23, 0xBEBFBC70);
    a = hh(a, b, c, d, x[k+13], 4, 0x289B7EC6); d = hh(d, a, b, c, x[k+0], 11, 0xEAA127FA); c = hh(c, d, a, b, x[k+3], 16, 0xD4EF3085); b = hh(b, c, d, a, x[k+6], 23, 0x04881D05);
    a = hh(a, b, c, d, x[k+9], 4, 0xD9D4D039); d = hh(d, a, b, c, x[k+12], 11, 0xE6DB99E5); c = hh(c, d, a, b, x[k+15], 16, 0x1FA27CF8); b = hh(b, c, d, a, x[k+2], 23, 0xC4AC5665);
    a = ii(a, b, c, d, x[k+0], 6, 0xF4292244); d = ii(d, a, b, c, x[k+7], 10, 0x432AFF97); c = ii(c, d, a, b, x[k+14], 15, 0xAB9423A7); b = ii(b, c, d, a, x[k+5], 21, 0xFC93A039);
    a = ii(a, b, c, d, x[k+12], 6, 0x655B59C3); d = ii(d, a, b, c, x[k+3], 10, 0x8F0CCC92); c = ii(c, d, a, b, x[k+10], 15, 0xFFEFF47D); b = ii(b, c, d, a, x[k+1], 21, 0x85845DD1);
    a = ii(a, b, c, d, x[k+8], 6, 0x6FA87E4F); d = ii(d, a, b, c, x[k+15], 10, 0xFE2CE6E0); c = ii(c, d, a, b, x[k+6], 15, 0xA3014314); b = ii(b, c, d, a, x[k+13], 21, 0x4E0811A1);
    a = ii(a, b, c, d, x[k+4], 6, 0xF7537E82); d = ii(d, a, b, c, x[k+11], 10, 0xBD3AF235); c = ii(c, d, a, b, x[k+2], 15, 0x2AD7D2BB); b = ii(b, c, d, a, x[k+9], 21, 0xEB86D391);
    a = addUnsigned(a, AA); b = addUnsigned(b, BB); c = addUnsigned(c, CC); d = addUnsigned(d, DD);
  }
  return (wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d)).toLowerCase();
}

function signature() {
  const str = Math.floor(Date.now() / 1000).toString();
  let r = ["", "", "", ""];
  for (let i = 0; i < str.length; i++) {
    const e_val = str[i].charCodeAt().toString(2).padStart(6, '0');
    r[0] += e_val.slice(2, 3);
    r[1] += e_val.slice(3, 4);
    r[2] += e_val.slice(4, 5);
    r[3] += e_val.slice(5);
  }
  const a = r.map(bin => parseInt(bin, 2).toString(16).padStart(3, '0'));
  const n = md5(str);
  return n.slice(0, 3) + a[0] + n.slice(6, 11) + a[1] + n.slice(14, 19) + a[2] + n.slice(22, 27) + a[3] + n.slice(30);
}

function normalizeTitle(title) { return (title || "").toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9]/g, ""); }
function extractYear(title) { const match = (title || "").match(/\b(19|20)\d{2}\b/); return match ? parseInt(match[0]) : null; }
function extractBaseName(title) { return (title || "").replace(/[\(\[（【][^\)\]）】]*[\)\]）】]/g, "").split(/[:：\-—\s]+/)[0].trim(); }
function extractEpisodeNumber(epName) {
  if (!epName) return null;
  let match = epName.match(/第\s*(\d+)\s*[集话期]/) || epName.match(/[Ee][Pp]?\s*(\d+)/);
  if (match) return parseInt(match[1]);
  match = epName.match(/\b(\d{1,3})\b/);
  return (match && !/^(1080|720|480|2160|4k)$/i.test(match[1])) ? parseInt(match[1]) : null;
}
function extractLanguage(remarks, title) {
  const combined = `${remarks} ${title}`.toLowerCase();
  if (combined.includes("国语") || combined.includes("普通话")) return "国语";
  if (combined.includes("粤语")) return "粤语";
  if (combined.includes("英语")) return "英语";
  if (combined.includes("日语")) return "日语";
  if (combined.includes("韩语")) return "韩语";
  return "";
}

async function httpGet(url, retryCount = 0, customHeaders = {}) {
  const headers = { ...REQUEST_HEADERS, ...customHeaders };
  if (GLOBAL_COOKIE) headers["Cookie"] = GLOBAL_COOKIE;
  try {
    const response = await Widget.http.get(url, { headers, timeout: REQUEST_TIMEOUT });
    let data = response.data;
    if (typeof data === "string") data = JSON.parse(data);
    return data;
  } catch (error) {
    if (retryCount < MAX_RETRIES) {
      await new Promise(r => setTimeout(r, 1000));
      return httpGet(url, retryCount + 1, customHeaders);
    }
    return null;
  }
}

function buildApiUrl(apiHost, path, params) {
  const queryParams = { ...params, _vv: signature() };
  const queryString = Object.entries(queryParams)
    .filter(([_, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
  return `${apiHost}${path}${queryString ? (path.includes("?") ? "&" : "?") + queryString : ""}`;
}

async function searchVodOle(apiHost, keyword, pg = 1) {
  const url = buildApiUrl(apiHost, `/v1/pub/index/search/${encodeURIComponent(keyword)}/vod/0/${pg}/48`, {});
  const res = await httpGet(url);
  const vodData = res?.data?.data?.find(item => item.type === "vod");
  if (!vodData?.list) return [];
  return vodData.list
    .filter(item => GLOBAL_COOKIE || !item.vip)
    .map(item => {
      const rawPic = item.pic || item.vod_pic || item.cover || "";
      const p = rawPic ? (rawPic.startsWith('http') ? rawPic : DEFAULT_PIC_HOST + rawPic) : "";
      const linkStr = `ole://detail?id=${item.id || item.vod_id}&api=${encodeURIComponent(apiHost)}`;
      return {
        vod_id: String(item.id || item.vod_id), vod_name: item.name || item.vod_name, vod_pic: p,
        vod_remarks: item.remark || "", year: item.year || "", lang: item.lang || "",
        vod_type: item.type || "", vip: item.vip || false, link: linkStr
      };
    });
}

async function getDetailOle(apiHost, vodId) {
  const url = buildApiUrl(apiHost, `/v1/pub/vod/detail/${vodId}/true`, {});
  const res = await httpGet(url);
  return res?.code === 0 ? res.data : null;
}

async function loadResource(params) {
  GLOBAL_COOKIE = params?.Cookie || "";
  const apiHost = (params?.ApiHost || DEFAULT_API_HOST).replace(/\/$/, "");
  const seriesName = params?.seriesName || params?.title || params?.name || params?.keyword || params?.TestTitle || "";
  const type = params?.type === "movie" ? "movie" : "tv";
  const episode = params?.episode ? parseInt(params.episode) : null;
  if (!seriesName) return [];
  const cacheKey = getCacheKey(seriesName, type, episode);
  const cached = getFromCache(cacheKey);
  if (cached) return cached;
  const searchKeyword = extractBaseName(seriesName);
  const searchResults = await searchVodOle(apiHost, searchKeyword);
  if (!searchResults.length) return [];
  const userNorm = normalizeTitle(seriesName);
  const userYear = extractYear(seriesName);
  let candidates = searchResults.map(item => {
    let score = 0;
    const itemNorm = normalizeTitle(item.vod_name);
    if (itemNorm === userNorm) score = 100;
    else if (itemNorm.replace(/\d+/g, "") === userNorm.replace(/\d+/g, "") && userNorm.replace(/\d+/g, "")) score = 95;
    else if (itemNorm.includes(userNorm) || userNorm.includes(itemNorm)) score = 80;
    return { item, score };
  }).filter(c => c.score > 0).sort((a, b) => b.score - a.score);
  if (!candidates.length) return [];
  let finalMatch = candidates.find(c => {
    const candYear = c.item.year ? parseInt(c.item.year) : null;
    return (!userYear || candYear === userYear) && (type !== "movie" || c.item.vod_type === "movie");
  })?.item || candidates[0].item;
  const detail = await getDetailOle(apiHost, finalMatch.vod_id);
  if (!detail?.urls?.length) return [];
  const realTitle = detail.title || detail.name || finalMatch.vod_name;
  const urlSet = new Set();
  const uniqueResources = [];
  for (const item of detail.urls) {
    if (!GLOBAL_COOKIE && item.vip) continue;
    const videoUrl = item.url || item.play_url || item.link;
    if (!videoUrl || urlSet.has(videoUrl)) continue;
    const epNum = extractEpisodeNumber(item.title);
    if (type === "tv" && episode !== null && epNum !== episode) continue;
    urlSet.add(videoUrl);
    let description = realTitle;
    if (type === "tv" && item.title && !item.title.includes("正片")) description += ` ${item.title}`;
    const language = extractLanguage(finalMatch.vod_remarks, item.title);
    if (language) description += ` [${language}]`;
    uniqueResources.push({
      id: `${finalMatch.vod_id}_${Date.now()}_${uniqueResources.length}`,
      name: "欧乐影视", type, description, url: videoUrl
    });
  }
  setToCache(cacheKey, uniqueResources);
  return uniqueResources;
}

async function searchOle(params = {}) {
  GLOBAL_COOKIE = params.Cookie || "";
  const apiHost = (params.ApiHost || DEFAULT_API_HOST).replace(/\/$/, "");
  const keyword = params.wd || params.keyword || "";
  if (!keyword.trim()) throw new Error("请输入搜索关键词");
  const results = await searchVodOle(apiHost, keyword, params.pg || 1);
  if (!results.length) return [{ id: "empty", type: "text", title: "未找到相关影片，请尝试其他关键词" }];
  return results.map(item => ({
    id: item.link,
    type: "url", 
    title: item.vod_name,
    posterPath: item.vod_pic, 
    releaseDate: item.year,
    description: `${item.year ? item.year + " · " : ""}${item.vod_type === "movie" ? "电影" : "剧集"}${item.vip ? " [VIP]" : ""}`,
    link: item.link
  }));
}

const CATEGORY_ID = { movie: 1, tv: 2, variety: 3, anime: 4, short: 14 };
const CATEGORY_NAME = { 1: "电影", 2: "剧集", 3: "综艺", 4: "动漫", 14: "短剧" };
const SORT_MAP = { hot: "hot", score: "score", update: "update", desc: "desc" };

async function fetchCategoryList(apiHost, cateId, area, sortBy, page) {
  const url = buildApiUrl(apiHost, `/v1/pub/vod/list/true/3/0/${area}/${cateId}/0/0/${sortBy}/${page}/48`, {});
  const res = await httpGet(url);
  const list = res?.code === 0 ? (res.data?.list || res.data || []) : [];
  const categoryName = CATEGORY_NAME[cateId] || "影视";
  return list.map(item => {
    const rawPic = item.pic || item.vod_pic || item.cover || "";
    const p = rawPic ? (rawPic.startsWith('http') ? rawPic : DEFAULT_PIC_HOST + rawPic) : "";
    const linkStr = `ole://detail?id=${item.id || item.vod_id}&api=${encodeURIComponent(apiHost)}`;
    return {
      id: linkStr, 
      type: "url", 
      title: item.name || item.vod_name || "未知",
      posterPath: p, 
      backdropPath: p,
      releaseDate: item.year || "", 
      description: `${item.year || "未知年份"} · ${categoryName}`,
      genreTitle: categoryName, 
      vod_id: String(item.id || item.vod_id), 
      api_host: apiHost,
      link: linkStr
    };
  });
}

async function baseLoadList(params, type) {
  const apiHost = (params?.ApiHost || DEFAULT_API_HOST).replace(/\/$/, "");
  const page = parseInt(params?.page || 1);
  const items = await fetchCategoryList(apiHost, CATEGORY_ID[type], params?.area || "0", SORT_MAP[params?.sort_by] || "hot", page);
  if (!items.length && page === 1) return [{ id: "empty", type: "text", title: "暂无数据，请检查网络或API地址" }];
  return items;
}

function loadMovieList(params) { return baseLoadList(params, "movie"); }
function loadTvList(params) { return baseLoadList(params, "tv"); }
function loadVarietyList(params) { return baseLoadList(params, "variety"); }
function loadAnimeList(params) { return baseLoadList(params, "anime"); }
function loadShortList(params) { return baseLoadList(params, "short"); }

async function loadDetail(params) {
  let vodId = "";
  let apiHost = DEFAULT_API_HOST;

  if (typeof params === "object") {
    apiHost = params.api_host || params.ApiHost || DEFAULT_API_HOST;
    const link = params.link || "";
    const idVal = params.id ? String(params.id) : "";
    
    if (link.includes("ole://detail")) {
      vodId = link.match(/[?&]id=(\d+)/)?.[1] || "";
    }
    if (!vodId && idVal) {
      if (idVal.includes("ole://detail")) {
        vodId = idVal.match(/[?&]id=(\d+)/)?.[1] || "";
      } else if (idVal.startsWith("ole_detail_")) {
        vodId = idVal.replace("ole_detail_", "");
      } else if (idVal.startsWith("ole_")) {
        vodId = idVal.replace("ole_", "");
      } else if (/^\d+$/.test(idVal)) {
        vodId = idVal;
      }
    }
  } else if (typeof params === "string") {
    if (params.includes("ole://detail")) {
      vodId = params.match(/[?&]id=(\d+)/)?.[1] || "";
    } else if (params.startsWith("ole_detail_")) {
      vodId = params.replace("ole_detail_", "");
    } else if (params.startsWith("ole_")) {
      vodId = params.replace("ole_", "");
    } else if (/^\d+$/.test(params)) {
      vodId = params;
    }
  }

  if (!vodId) {
    return { id: typeof params === "object" ? params.id : params, type: "url", title: "无效请求", mediaType: "movie" };
  }

  const detail = await getDetailOle(apiHost.replace(/\/$/, ""), vodId);
  if (!detail) throw new Error("获取详情失败");

  const pageTitle = detail.name || detail.vod_name || (typeof params === 'object' ? params.title : "") || detail.title || "未知标题";
  
  const episodeItems = [];
  const trailers = [];
  const rawPicMain = detail.pic || detail.vod_pic || detail.cover || "";
  const validPic = rawPicMain ? (rawPicMain.startsWith('http') ? rawPicMain : DEFAULT_PIC_HOST + rawPicMain) : "";

  if (detail.urls && detail.urls.length) {
    detail.urls.filter(item => GLOBAL_COOKIE || !item.vip).forEach((item, i) => {
      const videoUrl = item.url || item.play_url || item.link;
      if (!videoUrl) return;
      const title = item.title || "播放";
      if (/(预告|宣传片|花絮|PV)/.test(title)) {
        trailers.push({ coverUrl: validPic, url: videoUrl });
      } else {
        episodeItems.push({ id: videoUrl, type: "url", title: title, videoUrl: videoUrl, mediaType: "episode" });
      }
    });
  }
  
  let isMovie = true;
  if (detail.typeId1 === 2 || detail.typeId1 === 3 || detail.typeId1 === 4) {
      isMovie = false;
  } else if (episodeItems.some(item => /(第\d+集|集|期|话)/.test(item.title))) {
      isMovie = false;
  }
  
  let relatedItems = [];
  try {
    const cateId = detail.typeId1 || (isMovie ? 1 : 2); 
    const catList = await fetchCategoryList(apiHost.replace(/\/$/, ""), cateId, "0", "hot", 1);
    
    relatedItems = catList
      .filter(item => String(item.vod_id) !== String(vodId)) 
      .slice(0, 12) 
      .map(item => ({
        id: item.link,
        type: "url",
        title: item.title,
        posterPath: item.posterPath,
        backdropPath: item.backdropPath,
        mediaType: (cateId === 1 || cateId === 14) ? "movie" : "tv",
        link: item.link
      }));
  } catch (error) {
    console.log("获取相关推荐失败: " + error);
  }
  
  const detailLink = `ole://detail?id=${vodId}&api=${encodeURIComponent(apiHost)}`;
  const result = {
    id: detailLink,
    type: "url",
    title: pageTitle,
    description: detail.blurb || detail.content || detail.intro || "",
    posterPath: validPic,
    backdropPath: validPic,
    mediaType: isMovie ? "movie" : "tv",
    episode: episodeItems.length,
    episodeItems,
    link: detailLink
  };

  if (trailers.length > 0) result.trailers = trailers;
  if (relatedItems.length > 0) result.relatedItems = relatedItems;

  return result;
}
