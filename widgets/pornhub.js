WidgetMetadata = {
    id: "Pornhub",
    title: "Pornhub",
    version: "2.0.0",
    requiredVersion: "0.0.1",
    description: "cn.pornhub.com 分類列表與播放（HLS）",
    author: "海带",
    site: "https://cn.pornhub.com/",
    detailCacheDuration: 3600,
    modules: [
        {
            id: "languageVideos",
            title: "語言篩選",
            functionName: "getVideosByLanguage",
            cacheDuration: 3600,
            params: [
                {
                    name: "language",
                    title: "語言",
                    type: "enumeration",
                    value: "chinese",
                    enumOptions: [
                        { title: "中文", value: "chinese" },
                        { title: "日語", value: "japanese" },
                        { title: "英語", value: "english" },
                        { title: "韓語", value: "korean" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序",
                    type: "enumeration",
                    value: "cm",
                    enumOptions: [
                        { title: "最新", value: "cm" },
                        { title: "熱播", value: "ht" },
                        { title: "最多觀看", value: "mv" },
                        { title: "最高評分", value: "tr" }
                    ]
                },
                { name: "page", title: "頁碼", type: "page", value: "1" }
            ]
        },
        {
            id: "hotVideos",
            title: "熱播視頻",
            functionName: "getVideos",
            cacheDuration: 3600,
            params: [
                { name: "pageType", title: "類型", type: "constant", value: "ht" },
                { name: "page", title: "頁碼", type: "page", value: "1" }
            ]
        },
        {
            id: "topViews",
            title: "最多觀看",
            functionName: "getVideos",
            cacheDuration: 3600,
            params: [
                { name: "pageType", title: "類型", type: "constant", value: "mv" },
                { name: "page", title: "頁碼", type: "page", value: "1" }
            ]
        },
        {
            id: "maxRating",
            title: "最高評分",
            functionName: "getVideos",
            cacheDuration: 3600,
            params: [
                { name: "pageType", title: "類型", type: "constant", value: "tr" },
                { name: "page", title: "頁碼", type: "page", value: "1" }
            ]
        },
        {
            id: "newVideos",
            title: "最新視頻",
            functionName: "getVideos",
            cacheDuration: 3600,
            params: [
                { name: "pageType", title: "類型", type: "constant", value: "cm" },
                { name: "page", title: "頁碼", type: "page", value: "1" }
            ]
        },
        {
            id: "searchUser",
            title: "優選頻道",
            functionName: "getChannelVideos",
            cacheDuration: 3600,
            params: [
                {
                    name: "username",
                    title: "頻道",
                    type: "enumeration",
                    value: "asiam",
                    enumOptions: [
                        { title: "麻豆傳媒 AsiaM", value: "asiam" },
                        { title: "HongKongDoll", value: "HongKongDoll" }
                    ]
                },
                { name: "page", title: "頁碼", type: "page", value: "1" }
            ]
        }
    ]
};

const HOST = "https://cn.pornhub.com";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36";

function headers(referer) {
    return {
        "User-Agent": UA,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-TW,zh;q=0.9,en;q=0.8",
        "Referer": referer || (HOST + "/")
    };
}

function abs(url) {
    if (!url) return "";
    if (/^https?:\/\//.test(url)) return url;
    return HOST + url;
}

function extractViewkey($, el) {
    const $el = $(el);
    return (
        $el.attr("data-video-vkey") ||
        $el.attr("data-id") ||
        (($el.find("a[href*='viewkey=']").attr("href") || "").match(/viewkey=([^&]+)/) || [])[1] ||
        ""
    );
}

function parseVideoList(html) {
    const $ = Widget.html.load(html);
    const items = [];
    const seen = {};
    $(".pcVideoListItem, li.videoblock, li.videoBox").each(function () {
        const vkey = extractViewkey($, this);
        if (!vkey || seen[vkey]) return;
        seen[vkey] = true;
        const $item = $(this);
        const title =
            $item.find(".title a").attr("title") ||
            $item.find(".title a").text() ||
            $item.find(".title").text().trim();
        if (!title) return;
        let link = $item.find("a[href*='viewkey=']").attr("href") || "";
        link = abs(link) || (HOST + "/view_video.php?viewkey=" + vkey);
        const img = $item.find("img");
        items.push({
            id: vkey,
            type: "link",
            mediaType: "movie",
            title: String(title).trim(),
            link: link,
            coverUrl: img.attr("data-src") || img.attr("src") || img.attr("data-thumb") || "",
            previewUrl: img.attr("data-mediabook") || img.attr("data-preview") || "",
            durationText: $item.find(".duration, .videoDuration").text().trim()
        });
    });
    return items;
}

async function fetchHtml(url) {
    const response = await Widget.http.get(url, { headers: headers(HOST + "/") });
    if (!response || !response.data) throw new Error("頁面載入失敗");
    const html = String(response.data);
    if (html.indexOf("elected officials") !== -1) throw new Error("地區限制，換網路後再試");
    return html;
}

async function getVideos(params) {
    const page = Math.max(1, Number(params.page) || 1);
    const o = params.pageType || "ht";
    const url = HOST + "/video?o=" + o + "&page=" + page;
    const items = parseVideoList(await fetchHtml(url));
    if (!items.length) throw new Error("沒有抓到列表，頁面可能已改版");
    return items;
}

async function getVideosByLanguage(params) {
    const page = Math.max(1, Number(params.page) || 1);
    const language = params.language || "chinese";
    const sort = params.sort_by || "cm";
    let url = HOST + "/language/" + encodeURIComponent(language) + "?page=" + page;
    if (sort) url += "&o=" + encodeURIComponent(sort);
    const items = parseVideoList(await fetchHtml(url));
    if (!items.length) throw new Error("沒有抓到列表，頁面可能已改版");
    return items;
}

async function getChannelVideos(params) {
    const page = Math.max(1, Number(params.page) || 1);
    const name = String(params.username || "asiam").trim();
    const slug = name.replace(/\s+/g, "-").toLowerCase();
    const urls = [
        HOST + "/channels/" + encodeURIComponent(slug) + (page > 1 ? "/videos?page=" + page : ""),
        HOST + "/model/" + encodeURIComponent(slug) + "/videos?o=mr" + (page > 1 ? "&page=" + page : "")
    ];
    let lastError = null;
    for (let i = 0; i < urls.length; i++) {
        try {
            const items = parseVideoList(await fetchHtml(urls[i]));
            if (items.length) return items;
        } catch (e) {
            lastError = e;
        }
    }
    throw lastError || new Error("頻道沒有影片");
}

function pickHlsUrl(html) {
    const blockMatch = html.match(/"mediaDefinitions"\s*:\s*(\[[\s\S]*?\])\s*,\s*"isVertical"/);
    const raw = blockMatch ? blockMatch[1] : html;
    const entries = [];
    const re = /"format"\s*:\s*"(hls)"[\s\S]{0,500}?"videoUrl"\s*:\s*"([^"]+)"[\s\S]{0,200}?"quality"\s*:\s*"(\d+)"/g;
    let m;
    while ((m = re.exec(raw))) {
        const url = m[2].replace(/\\u002F/g, "/").replace(/\\\//g, "/");
        const around = raw.slice(Math.max(0, m.index - 180), m.index + 80);
        entries.push({
            url: url,
            quality: parseInt(m[3], 10) || 0,
            isDefault: around.indexOf('"defaultQuality":true') !== -1
        });
    }
    if (!entries.length) {
        const re2 = /https:\\\/\\\/ev-h\.phncdn\.com\\\/hls[^"]+master\.m3u8[^"]+/g;
        let n;
        while ((n = re2.exec(html))) {
            entries.push({
                url: n[0].replace(/\\\//g, "/"),
                quality: /720P/.test(n[0]) ? 720 : (/1080P/.test(n[0]) ? 1080 : 480),
                isDefault: /720P/.test(n[0])
            });
        }
    }
    if (!entries.length) return "";
    const preferred = entries.find(function (e) { return e.isDefault; }) ||
        entries.sort(function (a, b) { return Math.abs(a.quality - 720) - Math.abs(b.quality - 720); })[0];
    return preferred.url;
}

async function loadDetail(link) {
    const viewkeyMatch = String(link || "").match(/viewkey=([^&]+)/);
    const viewkey = viewkeyMatch ? viewkeyMatch[1] : String(link || "");
    if (!viewkey) throw new Error("無效連結");
    const pageUrl = HOST + "/view_video.php?viewkey=" + viewkey;
    const html = await fetchHtml(pageUrl);
    const videoUrl = pickHlsUrl(html);
    if (!videoUrl) throw new Error("找不到 HLS 播放網址");
    const $ = Widget.html.load(html);
    const title = ($("#videoTitle, h1.title").first().text() || "Pornhub").trim();
    return {
        id: viewkey,
        type: "detail",
        mediaType: "movie",
        title: title,
        link: pageUrl,
        videoUrl: videoUrl,
        customHeaders: headers(pageUrl)
    };
}
