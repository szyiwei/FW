WidgetMetadata = {
    id: "91porny",
    title: "91PORNY 九色",
    version: "1.2.3",
    requiredVersion: "0.0.1",
    description: "91porny 1.2.3 預設改走 91porny.org / jiuse.tv 鏡像",
    author: "Grok",
    site: "https://91porny.org/",
    detailCacheDuration: 1800,
    modules: [
        {
            id: "videoCategory",
            title: "91 分類",
            functionName: "getVideoCategory",
            cacheDuration: 600,
            params: [
                {
                    name: "category",
                    title: "分類",
                    type: "enumeration",
                    value: "latest",
                    enumOptions: [
                        { title: "最近更新", value: "latest" },
                        { title: "高清視頻", value: "hd" },
                        { title: "91原創", value: "ori" },
                        { title: "當前最熱", value: "hot-list" },
                        { title: "最近加精", value: "recent-favorite" },
                        { title: "最近得分", value: "recent-rating" },
                        { title: "非付費", value: "nonpaid" },
                        { title: "10分鐘以上", value: "long-list" },
                        { title: "20分鐘以上", value: "longer-list" },
                        { title: "本月討論", value: "month-discuss" },
                        { title: "本月收藏", value: "top-favorite" },
                        { title: "收藏最多", value: "most-favorite" },
                        { title: "本月最熱", value: "top-list" },
                        { title: "上月最熱", value: "top-last" }
                    ]
                },
                { name: "page", title: "頁碼", type: "page", value: "1" },
                { name: "base_url", title: "鏡像網址", type: "input", value: "https://91porny.org", description: "連線失敗可改 https://jiuse.tv 或 https://91porny.online" }
            ]
        },
        {
            id: "madou",
            title: "麻豆",
            functionName: "getMadou",
            cacheDuration: 600,
            params: [{ name: "page", title: "頁碼", type: "page", value: "1" }]
        },
        {
            id: "swag",
            title: "SWAG",
            functionName: "getSwag",
            cacheDuration: 600,
            params: [{ name: "page", title: "頁碼", type: "page", value: "1" }]
        },
        {
            id: "kedou",
            title: "蝌蚪分類",
            functionName: "getKedouCategory",
            cacheDuration: 600,
            params: [
                {
                    name: "category",
                    title: "分類",
                    type: "enumeration",
                    value: "top-rated",
                    enumOptions: [
                        { title: "最高評分", value: "top-rated" },
                        { title: "高清", value: "categories/hd" },
                        { title: "國產", value: "categories/guodong" },
                        { title: "日韓", value: "categories/japan-korea" },
                        { title: "無碼", value: "categories/unpixelated" },
                        { title: "動漫", value: "categories/anime" },
                        { title: "SM", value: "categories/sm" }
                    ]
                },
                { name: "page", title: "頁碼", type: "page", value: "1" }
            ]
        },
        {
            id: "search",
            title: "搜索",
            functionName: "getSearch",
            cacheDuration: 600,
            params: [
                { name: "keywords", title: "關鍵詞", type: "input", value: "麻豆" },
                { name: "page", title: "頁碼", type: "page", value: "1" }
            ]
        }
    ]
};

const HOSTS = [
    "https://91porny.org",
    "https://www.91porny.org",
    "https://jiuse.tv",
    "https://91porny.online",
    "https://91porny.com",
    "https://www.91porny.com"
];

let ACTIVE_HOST = "https://91porny.org";
const UA =
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

function headers(referer) {
    return {
        "User-Agent": UA,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-TW,zh;q=0.9,en;q=0.8",
        Referer: referer || ACTIVE_HOST + "/"
    };
}

function abs(url) {
    if (!url) return "";
    url = String(url).replace(/&amp;/g, "&").trim();
    if (url.indexOf("//") === 0) return "https:" + url;
    if (url.charAt(0) === "/") return ACTIVE_HOST + url;
    return url;
}

function looksLikeChallenge(html) {
    const raw = String(html || "");
    if (/colVideoList|video-elem|\/video\/view/i.test(raw) && raw.length > 8000) return false;
    const s = raw.slice(0, 800);
    return /<title[^>]*>\s*(Just a moment|Attention Required)/i.test(raw) ||
        /verify you are human|checking your browser before accessing/i.test(s);
}

async function fetchHtmlOn(host, pathAndQuery) {
    const url = host + pathAndQuery;
    const resp = await Widget.http.get(url, {
        headers: headers(host + "/")
    });
    if (!resp || resp.data == null) throw new Error("空回應");
    const html = String(resp.data);
    if (looksLikeChallenge(html)) throw new Error("被驗證頁擋住");
    if (html.length < 400) throw new Error("頁面太短");
    return html;
}

function normalizeHost(url) {
    const raw = String(url || "").trim().replace(/\/$/, "");
    if (!raw) return "";
    if (/^https?:\/\//i.test(raw)) return raw;
    return "https://" + raw;
}

function applyBaseUrl(params) {
    const host = normalizeHost(params && params.base_url);
    if (host) ACTIVE_HOST = host;
}

async function fetchHtmlPath(pathAndQuery) {
    let lastErr = null;
    const extra = normalizeHost(ACTIVE_HOST);
    const ordered = [];
    const seen = {};
    [extra].concat(HOSTS).forEach(function (h) {
        if (!h || seen[h]) return;
        seen[h] = true;
        ordered.push(h);
    });
    for (let i = 0; i < ordered.length; i++) {
        const host = ordered[i];
        try {
            const html = await fetchHtmlOn(host, pathAndQuery);
            ACTIVE_HOST = host;
            return html;
        } catch (e) {
            lastErr = e;
        }
    }
    throw new Error(
        "連線失敗。請換網路 / 開 VPN 後重試。最後錯誤: " +
            String(lastErr && lastErr.message ? lastErr.message : lastErr)
    );
}

function isAdOrStampCover(url) {
    const u = String(url || "").toLowerCase();
    if (!u) return true;
    if (/\.(gif|webp)\b/.test(u) && !/\/thumb\//.test(u) && !/videos_screenshots/.test(u)) return true;
    return /alicdn\.com|fleamarket|svlqgh|xpz5qz|myxuanxuan|doubleclick|googlesyndication|adsystem|adservice|tracker|stat\.|analytics/.test(u);
}

function pickCover(url) {
    const raw = abs(url);
    if (!raw || isAdOrStampCover(raw)) return "";
    return raw;
}

function decodeHtml(s) {
    return String(s || "")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, " ")
        .trim();
}

function parseList(html) {
    const $ = Widget.html.load(html);
    const items = [];
    const seen = {};

    function isVideoView(link) {
        return /\/videos?\/view(?:hd)?\//i.test(String(link || ""));
    }

    function pushItem(link, title, cover, duration) {
        link = abs(link);
        title = decodeHtml(title);
        if (!link || !isVideoView(link) || !title) return;
        if (seen[link]) return;
        seen[link] = true;
        cover = pickCover(cover);
        items.push({
            id: link,
            type: "url",
            mediaType: "movie",
            title: title,
            link: link,
            coverUrl: cover,
            posterPath: cover,
            backdropPath: cover,
            durationText: duration || ""
        });
    }

    $(".colVideoList, .video-elem, .col-sm, .item").each(function () {
        const $el = $(this);
        let href =
            $el.find("a.title").attr("href") ||
            $el.find("a.display").attr("href") ||
            $el.find('a[href*="/video/view"]').attr("href") ||
            $el.find('a[href*="/videos/view"]').attr("href") ||
            "";
        if (!href || !/\/videos?\/view\//.test(href)) return;
        const title = (
            $el.find("a.title").text() ||
            $el.find('a[href*="/video/view"], a[href*="/videos/view"]').last().text() ||
            ""
        ).trim();
        const raw = $el.html() || "";
        let cover = "";
        const style =
            $el.find(".img").attr("style") ||
            $el.find("[style*='background-image']").attr("style") ||
            "";
        const bg = String(style + " " + raw).match(/url\(['"]?([^'")]+)['"]?\)/);
        if (bg) cover = bg[1];
        if (!cover || isAdOrStampCover(abs(cover))) {
            const thumb =
                raw.match(/\/\/[^"' )]+\/thumb\/[^"' )]+/) ||
                raw.match(/https?:\/\/[^"' )]+\/thumb\/[^"' )]+/) ||
                raw.match(/https?:\/\/[^"' )]+\/contents\/videos_screenshots\/[^"' )]+/);
            if (thumb) cover = thumb[0];
        }
        pushItem(href, title, cover, $el.find("small.layer").first().text().trim());
    });

    if (items.length) return items;

    const re =
        /href="(\/videos?\/view(?:hd)?\/[^"]+)"[^>]*>([^<]{2,160})<\/a>/g;
    let m;
    while ((m = re.exec(html))) {
        pushItem(m[1], m[2], "", "");
    }

    const re2 =
        /href="(\/videos?\/view(?:hd)?\/[^"]+)"/g;
    const titleRe = />([^<]{2,160})</;
    while ((m = re2.exec(html))) {
        const slice = html.slice(m.index, m.index + 400);
        const tm = slice.match(titleRe);
        pushItem(m[1], tm ? tm[1] : m[1], "", "");
    }
    return items;
}

async function firstList(paths) {
    let lastErr = null;
    for (let i = 0; i < paths.length; i++) {
        try {
            const items = parseList(await fetchHtmlPath(paths[i]));
            if (items.length) return items;
            lastErr = new Error("頁面沒有影片: " + paths[i]);
        } catch (e) {
            lastErr = e;
        }
    }
    throw lastErr || new Error("沒有抓到影片");
}

function pagePaths(bases, page) {
    const out = [];
    const p = Math.max(1, page);
    for (let i = 0; i < bases.length; i++) {
        const b = bases[i];
        if (p === 1) {
            out.push(b);
            if (b.indexOf("?") >= 0) out.push(b + "&page=1");
            else out.push(b + "/1");
        } else if (b.indexOf("?") >= 0) {
            out.push(b + "&page=" + p);
        } else {
            out.push(b + "/" + p);
            out.push(b + "?page=" + p);
        }
    }
    const uniq = [];
    const seen = {};
    for (let j = 0; j < out.length; j++) {
        if (seen[out[j]]) continue;
        seen[out[j]] = true;
        uniq.push(out[j]);
    }
    return uniq;
}

function failItems(err) {
    return [{
        id: "err",
        type: "text",
        title: "連線失敗",
        subTitle: String(err && err.message ? err.message : err)
    }];
}

async function getVideoCategory(params) {
    try {
    applyBaseUrl(params);
    const cat = params.category || "latest";
    const page = Math.max(1, parseInt(params.page, 10) || 1);
    return await firstList(
        pagePaths(
            ["/video/category/" + cat, "/video/" + cat, "/videos/" + cat, "/videos/categories/" + cat],
            page
        )
    );
    } catch (e) { return failItems(e); }
}

async function getMadou(params) {
    try {
    applyBaseUrl(params);
    const page = Math.max(1, parseInt(params.page, 10) || 1);
    const kw = encodeURIComponent("麻豆");
    return firstList(
        pagePaths(
            ["/madou", "/madou?keywords=" + kw, "/search?keywords=" + kw, "/video/search?keywords=" + kw],
            page
        )
    );
    } catch (e) { return failItems(e); }
}

async function getSwag(params) {
    try {
    applyBaseUrl(params);
    const page = Math.max(1, parseInt(params.page, 10) || 1);
    const kw = encodeURIComponent("swag");
    return firstList(
        pagePaths(
            ["/swag", "/swag?keywords=" + kw, "/search?keywords=" + kw],
            page
        )
    );
    } catch (e) { return failItems(e); }
}

async function getKeywordPage(params) {
    if ((params.path || "") === "swag") return getSwag(params);
    return getMadou(params);
}

async function getKedouCategory(params) {
    try {
    applyBaseUrl(params);
    const cat = params.category || "top-rated";
    const page = Math.max(1, parseInt(params.page, 10) || 1);
    return await firstList(
        pagePaths(["/videos/" + cat, "/video/" + cat], page)
    );
    } catch (e) { return failItems(e); }
}

async function getSearch(params) {
    try {
    applyBaseUrl(params);
    const keywords = String(params.keywords || "").trim();
    if (!keywords) return getVideoCategory({ category: "latest", page: page });
    const page = Math.max(1, parseInt(params.page, 10) || 1);
    const kw = encodeURIComponent(keywords);
    return await firstList(
        pagePaths(["/search?keywords=" + kw, "/video/search?keywords=" + kw], page)
    );
    } catch (e) { return failItems(e); }
}

function pickPlayUrl(html) {
    const $ = Widget.html.load(html);
    let src =
        $("#video-play").attr("data-src") ||
        $("video").attr("data-src") ||
        $("video source").attr("src") ||
        "";
    if (!src) {
        const m =
            html.match(/data-src="([^"]+)"/) ||
            html.match(/(?:https?:)?\/\/[^"' ]+\.m3u8[^"' ]*/) ||
            html.match(/(?:https?:)?\/\/[^"' ]+\.mp4[^"' ]*/);
        src = m ? m[1] || m[0] : "";
    }
    return abs(src);
}

async function loadDetail(link) {
    try {
    const raw = typeof link === "string" ? link : (link && (link.link || link.id)) || "";
    let path = raw;
    const m = String(raw).match(/(\/videos?\/view(?:hd)?\/[^\s?#]+)/i);
    if (m) path = m[1];
    else if (String(raw).indexOf("http") === 0) {
        path = raw.replace(/^https?:\/\/[^/]+/, "") || raw;
    }
    if (path.charAt(0) !== "/") path = "/" + String(path).replace(/^https?:\/\/[^/]+/, "");
    path = path.split("?")[0];
    const html = await fetchHtmlPath(path);
    const videoUrl = pickPlayUrl(html);
    if (!videoUrl) throw new Error("找不到播放網址");
    const $ = Widget.html.load(html);
    const title = ($("h1, .title, title").first().text() || "91PORNY").trim();
    const poster = abs(
        $("#video-play").attr("data-poster") || $("video").attr("data-poster") || ""
    );
    const pageUrl = ACTIVE_HOST + path;
    return {
        id: pageUrl,
        type: "detail",
        mediaType: "movie",
        title: title,
        link: pageUrl,
        videoUrl: videoUrl,
        coverUrl: poster,
        posterPath: poster,
        backdropPath: poster,
        customHeaders: headers(pageUrl)
    };
    } catch (e) {
        return failItems(e)[0];
    }
}
