const DEFAULT_HEADERS = { 'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7' };
const DEFAULT_BASE_URL = 'https://91porn.com';

async function fetchHtml(url) {
    const resp = await Widget.http.get(url, { headers: DEFAULT_HEADERS });
    if (!resp || resp.statusCode !== 200) throw new Error(`请求失败: ${resp?.statusCode || "未知错误"}`);
    return Widget.html.load(resp.data);
}

function parseVideoList($, baseUrl) {
    const list = [];
    $('.videos-text-align').each((_, el) => {
        const $el = $(el);
        if ($el.closest('.col-lg-8').length > 0) return;
        
        let link = $el.find('a').attr('href');
        if (!link) return;
        link = link.startsWith('http') ? link : `${baseUrl}${link.startsWith('/') ? '' : '/'}${link}`;

        const backdropPath = $el.find('.img-responsive').attr('src');
        const videoID = backdropPath?.split('/')?.pop()?.split('.')?.shift();
        const addTimeNode = $el.find('.info').filter((_, el) => $(el).text().includes("添加时间"))[0]?.next;

        list.push({
            id: link,
            type: 'url',
            mediaType: 'movie',
            link,
            title: $el.find('.video-title').text()?.trim(),
            backdropPath,
            durationText: $el.find('.duration').text()?.trim(),
            previewUrl: videoID ? `https://vthumb.killcovid2021.com/thumb/${videoID}.mp4` : undefined,
            releaseDate: addTimeNode?.data?.trim() || addTimeNode?.nodeValue?.trim() || undefined
        });
    });
    return list;
}

WidgetMetadata = {
    id: '91pornTao',
    title: '91Porn',
    description: '91Porn网站聚合',
    version: "1.1.3",
    requiredVersion: '0.0.1',
    author: "廿二日",
    site: 'https://91porn.com',
    detailCacheDuration: 300,
    modules: [
        {
            id: '91porn.list',
            title: '91Porn',
            description: '91Porn',
            cacheDuration: 3600,
            requiresWebView: false,
            functionName: 'getList',
            params: [
                {
                    name: 'sort_by',
                    title: "分类",
                    description: "分类",
                    type: 'enumeration',
                    value: 'rf',
                    enumOptions: [
                        { value: 'rf', title: "最近加精" },
                        { value: 'hot', title: "当前最热" },
                        { value: 'top', title: "本月最热" },
                        { value: 'tf', title: "本月收藏" },
                        { value: 'md', title: "本月讨论" },
                        { value: 'top&m=-1', title: "上月最热" },
                        { value: 'ori', title: "91原创" },
                        { value: 'long', title: "10分钟以上 " },
                        { value: 'longer', title: "20分钟以上 " },
                        { value: 'mf', title: "收藏最多" }
                    ]
                },
                { name: 'page', title: "页码", type: 'page', value: '1' },
                { name: 'base_url', title: "基础 URL", type: 'input', value: DEFAULT_BASE_URL }
            ]
        }
    ],
    search: {
        title: "91Porn 搜索",
        functionName: "searchVideos",
        params: [
            { name: "keyword", title: "搜索关键词", type: "input", description: "请输入想看的关键词" },
            { name: 'page', title: "页码", type: 'page', value: '1' },
            { name: 'base_url', title: "基础 URL", type: 'input', value: DEFAULT_BASE_URL }
        ]
    }
};

async function getList(params = {}) {
    const { sort_by = 'ori', page = 1, base_url = DEFAULT_BASE_URL } = params;
    try {
        const $ = await fetchHtml(`${base_url}/v.php?category=${sort_by}&viewtype=basic&page=${page}`);
        return parseVideoList($, base_url);
    } catch (error) {
        return [];
    }
}

async function searchVideos(params = {}) {
    const keyword = (params.keyword || params.query || "").trim();
    if (!keyword) return [];
    const { page = 1, base_url = DEFAULT_BASE_URL } = params;
    try {
        const $ = await fetchHtml(`${base_url}/search_result.php?search_id=${encodeURIComponent(keyword)}&search_type=search_videos&page=${page}`);
        return parseVideoList($, base_url);
    } catch (error) {
        return [];
    }
}

async function loadDetail(url) {
    try {
        const $ = await fetchHtml(url);
        const player = $('#player_one');
        const sourceHtml = decodeURIComponent(player.find("script").text().match(/strencode2\("(.*?)"\)/)?.[1] || '');
        const videoUrl = Widget.html.load(sourceHtml)('source').attr('src');
        if (!videoUrl) throw new Error();

        const result = {
            id: url,
            type: 'detail',
            mediaType: 'movie',
            link: url,
            title: $('#videodetails h4').first().text()?.trim(),
            backdropPath: player.attr('poster'),
            videoUrl,
            durationText: $('#useraction').find('.info').filter((_, el) => $(el).text().includes("时长")).find('.video-info-span').text()?.trim(),
            releaseDate: $('.title-yakov').eq(0).text()?.trim(),
            description: Widget.html.load($('#v_desc').html()?.replace(/<br\s*\/?>/g, '\n') || '').text()?.trim(),
            childItems: []
        };

        $('.well').each((_, el) => {
            const $el = $(el);
            const link = $el.find('a').attr('href');
            if (!link) return;
            result.childItems.push({
                id: link,
                type: 'url',
                mediaType: 'movie',
                link,
                title: $el.find('.video-title').text()?.trim(),
                durationText: $el.find('.duration').text()?.trim(),
                backdropPath: $el.find('.img-responsive').attr('src')
            });
        });

        return result;
    } catch (error) {
        return null;
    }
}
