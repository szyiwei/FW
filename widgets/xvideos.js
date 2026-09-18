WidgetMetadata = {
    id: "xvideos",
    title: "XVideos",
    version: "2.0.1",
    requiredVersion: "0.0.1",
    description: "www.xvideos.com 最新／頻道／明星（優先有聲 MP4）",
    author: "Baran",
    site: "https://www.xvideos.com/",
    detailCacheDuration: 3600,
    modules: [
        {
            id: "xvideos.new",
            title: "最新視頻",
            functionName: "getNewList",
            cacheDuration: 3600,
            params: [
                { name: "page", title: "頁碼", type: "page", value: "0" }
            ]
        },
        {
            id: "xvideos.channels",
            title: "頻道",
            functionName: "getChannelList",
            cacheDuration: 3600,
            params: [
                {
                    name: "channel",
                    title: "頻道",
                    type: "enumeration",
                    value: "asiam",
                    enumOptions: [
                        { title: "AsiaM 麻豆", value: "asiam" },
                        { title: "HEYZO", value: "heyzo-xxx" },
                        { title: "Peach Japan", value: "peach_japan" },
                        { title: "Elle Lee Official", value: "elle_lee_official" },
                        { title: "Monger In Asia", value: "monger-in-asia" },
                        { title: "All Japanese Pass", value: "alljapanesepass" },
                        { title: "AV Tits", value: "avtits" },
                        { title: "MAX-Japanese", value: "max-japanese" },
                        { title: "Osakaporn", value: "osakaporn" },
                        { title: "Emuyumi Couple", value: "emuyumi-couple" },
                        { title: "Kninebox", value: "kninebox" }
                    ]
                },
                { name: "page", title: "頁碼", type: "page", value: "0" }
            ]
        },
        {
            id: "xvideos.pornstars",
            title: "色情明星",
            functionName: "getPornstarsList",
            cacheDuration: 3600,
            params: [
                {
                    name: "pornstar",
                    title: "明星",
                    type: "enumeration",
                    value: "li-rong-rong",
                    enumOptions: [
                        { title: "李蓉蓉 Li Rong Rong", value: "li-rong-rong" },
                        { title: "夏青子 Xia Qing Zi", value: "xia-qing-zi1" },
                        { title: "Rae Lil Black", value: "rae-lil-black" },
                        { title: "Eimi Fukada", value: "eimi-fukada" },
                        { title: "Yua Mikami", value: "yua-mikami" }
                    ]
                },
                { name: "page", title: "頁碼", type: "page", value: "0" }
            ]
        }
    ]
};

const HOST = "https://www.xvideos.com";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36";

function headers(referer) {
    return {
        "User-Agent": UA,
        Accept: "text/html,application/json,application/xhtml+xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-TW,zh;q=0.9,en;q=0.8",
        Referer: referer || HOST + "/"
    };
}

function abs(url) {
    if (!url) return "";
    if (url.indexOf("//") === 0) return "https:" + url;
    if (url.charAt(0) === "/") return HOST + url;
    return url;
}

function unescapeHtml(s) {
    return String(s || "")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
}

function previewFromThumb(thumb) {
    if (!thumb) return "";
    try {
        return (
            thumb
                .substring(0, thumb.lastIndexOf("/"))
                .replace(/\/thumbs(169)?(xnxx)?((l*)|(poster))\//, "/videopreview/")
                .replace(/(-[0-9]+)_([0-9]+)/, "_$2$1") + "_169.mp4"
        );
    } catch (e) {
        return "";
    }
}

function formatApiItem(item) {
    const url = abs(item.u);
    return {
        id: url,
        type: "url",
        mediaType: "movie",
        link: url,
        title: unescapeHtml(item.tf || item.t || ""),
        backdropPath: item.i || "",
        coverUrl: item.i || "",
        previewUrl: item.i ? previewFromThumb(item.i) : ""
    };
}

function parseThumbList(html) {
    const $ = Widget.html.load(html);
    const list = [];
    $("#content .thumb-block, .mozaique .thumb-block").not(".thumb-ad").each(function () {
        const $el = $(this);
        const $a = $el.find(".title a");
        let link = $a.attr("href");
        if (!link) return;
        link = abs(link);
        const thumb = $el.find(".thumb img").attr("data-src") || $el.find(".thumb img").attr("src") || "";
        list.push({
            id: link,
            type: "url",
            mediaType: "movie",
            link: link,
            title: ($a.text() || "").trim(),
            backdropPath: thumb,
            coverUrl: thumb,
            previewUrl: previewFromThumb(thumb)
        });
    });
    return list.filter(function (x) { return x.title && x.link; });
}

async function fetchRaw(url) {
    const resp = await Widget.http.get(url, { headers: headers(HOST + "/") });
    if (!resp || resp.data == null) throw new Error("載入失敗");
    return resp.data;
}

function parseVideosPayload(data) {
    if (!data) return [];
    if (typeof data === "string") {
        try { data = JSON.parse(data); } catch (e) { return []; }
    }
    const videos = data.videos || [];
    return videos.map(formatApiItem).filter(function (x) { return x.link && x.title; });
}

async function getNewList(params) {
    const page = params.page ? parseInt(params.page, 10) : 0;
    const url = page > 0 ? HOST + "/new/" + page : HOST + "/";
    return parseThumbList(String(await fetchRaw(url)));
}

async function getChannelList(params) {
    const page = params.page ? parseInt(params.page, 10) : 0;
    const channel = String(params.channel || "asiam").trim();
    const api = HOST + "/channels/" + encodeURIComponent(channel) + "/videos/best/" + page;
    let items = parseVideosPayload(await fetchRaw(api));
    if (items.length) return items;
    const htmlUrl = page > 0
        ? HOST + "/channels/" + encodeURIComponent(channel) + "/" + page
        : HOST + "/channels/" + encodeURIComponent(channel);
    items = parseThumbList(String(await fetchRaw(htmlUrl)));
    if (!items.length) throw new Error("這個頻道目前沒有影片");
    return items;
}

async function getPornstarsList(params) {
    let page = parseInt(params.page, 10);
    if (isNaN(page) || page < 0) page = 0;
    const star = String(params.pornstar || params.username || "li-rong-rong").trim();
    const slug = encodeURIComponent(star);
    const apis = [
        HOST + "/models/" + slug + "/videos/best/" + page,
        HOST + "/pornstars/" + slug + "/videos/best/" + page,
        HOST + "/models/" + slug + "/videos/new/" + page
    ];
    for (let i = 0; i < apis.length; i++) {
        try {
            const items = parseVideosPayload(await fetchRaw(apis[i]));
            if (items.length) return items;
        } catch (e) {}
    }
    const htmls = [
        page > 0 ? HOST + "/models/" + slug + "/" + page : HOST + "/models/" + slug,
        HOST + "/pornstars/" + slug
    ];
    for (let j = 0; j < htmls.length; j++) {
        try {
            const items = parseThumbList(String(await fetchRaw(htmls[j])));
            if (items.length) return items;
        } catch (e) {}
    }
    throw new Error("這個明星目前沒有影片");
}

async function loadDetail(link) {
    const pageUrl = abs(link);
    const html = String(await fetchRaw(pageUrl));
    const $ = Widget.html.load(html);
    const order = [
        "html5player.setVideoUrlHigh",
        "html5player.setVideoUrlLow",
        "html5player.setVideoHLS"
    ];
    let videoUrl = "";
    const scripts = $("script").toArray().map(function (el) { return $(el).text(); }).join("\n");
    for (let i = 0; i < order.length; i++) {
        const m = scripts.match(new RegExp(order[i].replace(/\./g, "\\.") + "\\('([^']+)'"));
        if (m && m[1]) {
            videoUrl = m[1];
            break;
        }
    }
    let title = "";
    let description = "";
    let backdropPath = "";
    try {
        const ld = JSON.parse($('script[type="application/ld+json"]').first().text());
        title = ld.name || "";
        description = ld.description || "";
        backdropPath = (ld.thumbnailUrl && ld.thumbnailUrl[0]) || "";
        if (!videoUrl) videoUrl = ld.contentUrl || "";
    } catch (e) {}
    if (!videoUrl) throw new Error("找不到播放網址");
    const result = {
        id: pageUrl,
        type: "detail",
        mediaType: "movie",
        link: pageUrl,
        title: title || "XVideos",
        description: description,
        backdropPath: backdropPath,
        videoUrl: videoUrl,
        customHeaders: headers(pageUrl)
    };
    try {
        const rel = scripts.match(/video_related=(\[[\s\S]*?\]);/);
        if (rel) result.childItems = JSON.parse(rel[1]).map(formatApiItem);
    } catch (e) {}
    return result;
}
