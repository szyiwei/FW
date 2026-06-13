const BASE_URL = 'https://www.xvideos.com';

const unescapeHtml = (str) => String(str || '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

const generateVideoPreviewUrl = (thumbnailUrl) => `${thumbnailUrl.substring(0, thumbnailUrl.lastIndexOf('/')).replace(/\/thumbs(169)?(xnxx)?((l*)|(poster))\//, '/videopreview/').replace(/(-[0-9]+)_([0-9]+)/, '_$2$1')}_169.mp4`;

const formatUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('//')) return `https:${url}`;
    if (url.startsWith('/')) return `${BASE_URL}${url}`;
    return url;
};

const formatXVideosItem = (item) => {
    const link = formatUrl(item.u);
    return {
        id: link,
        type: 'url',
        mediaType: 'movie',
        link,
        title: unescapeHtml(item.tf || item.t),
        backdropPath: item.i,
        previewUrl: generateVideoPreviewUrl(item.i)
    };
};

async function getSessionHeaders() {
    let sessionToken = null;
    try {
        sessionToken = await Promise.race([
            Widget.storage.getItem('xvideos.session_token'),
            new Promise((_, r) => setTimeout(() => r(null), 1000))
        ]);
    } catch (e) {}
    const headers = { 'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7' };
    if (sessionToken) headers.Cookie = `session_token=${sessionToken}`;
    return headers;
}

async function fetchHtml(url) {
    const resp = await Widget.http.get(url, { headers: await getSessionHeaders() });
    if (!resp || resp.statusCode !== 200) throw new Error('请求失败');
    return Widget.html.load(resp.data);
}

async function fetchApi(url) {
    const resp = await Widget.http.get(url, { headers: await getSessionHeaders() });
    if (!resp || resp.statusCode !== 200) throw new Error('请求失败');
    return typeof resp.data === 'string' ? JSON.parse(resp.data) : resp.data;
}

function parseVideoList($) {
    return $('#content .thumb-block:not(.thumb-ad), .thumb-block:not(.thumb-ad)').toArray().map(el => {
        const $el = $(el);
        const $title = $el.find('.title a').first();
        let link = $title.attr('href');
        if (!link) return null;
        link = formatUrl(link);
        const backdropPath = $el.find('.thumb img').attr('data-src') || $el.find('.thumb img').attr('src');
        const result = {
            id: link,
            type: 'url',
            mediaType: 'movie',
            link,
            title: $title.text().trim() || link,
            backdropPath
        };
        if (backdropPath) result.previewUrl = generateVideoPreviewUrl(backdropPath);
        return result;
    }).filter(Boolean);
}

WidgetMetadata = {
    id: 'xvideosTao',
    title: 'xvideos',
    description: 'xvideos视频资源浏览模块',
    version: "1.1.3",
    requiredVersion: '0.0.1',
    author: "廿二日",
    site: 'https://www.xvideos.com',
    detailCacheDuration: 300,
    modules: [
        {
            id: 'xvideos.new',
            title: "最新",
            description: "XVideos 最新视频",
            functionName: 'getNewList',
            params: [
                {
                    name: 'page',
                    title: "页码",
                    type: 'page',
                    value: '0'
                }
            ]
        },
        {
            id: 'xvideos.best',
            title: "热门",
            description: "XVideos 热门视频",
            functionName: 'getBestList',
            params: [
                {
                    name: 'mode',
                    title: "类型",
                    type: 'enumeration',
                    value: 'free',
                    enumOptions: [
                        { title: '免费', value: 'free' },
                        { title: 'RED视频', value: 'red' }
                    ]
                },
                {
                    name: 'sort_by',
                    title: "月份",
                    type: 'enumeration',
                    value: '2026-04',
                    enumOptions: [
                        { title: '2026-04', value: '2026-04' },
                        { title: '2026-03', value: '2026-03' },
                        { title: '2026-02', value: '2026-02' },
                        { title: '2026-01', value: '2026-01' },
                        { title: '2025-12', value: '2025-12' },
                        { title: '2025-11', value: '2025-11' },
                        { title: '2025-10', value: '2025-10' },
                        { title: '2025-09', value: '2025-09' },
                        { title: '2025-08', value: '2025-08' },
                        { title: '2025-07', value: '2025-07' },
                        { title: '2025-06', value: '2025-06' },
                        { title: '2025-05', value: '2025-05' },
                        { title: '2025-04', value: '2025-04' },
                        { title: '2025-03', value: '2025-03' },
                        { title: '2025-02', value: '2025-02' },
                        { title: '2025-01', value: '2025-01' },
                        { title: '2024-12', value: '2024-12' },
                        { title: '2024-11', value: '2024-11' },
                        { title: '2024-10', value: '2024-10' },
                        { title: '2024-09', value: '2024-09' },
                        { title: '2024-08', value: '2024-08' },
                        { title: '2024-07', value: '2024-07' },
                        { title: '2024-06', value: '2024-06' },
                        { title: '2024-05', value: '2024-05' },
                        { title: '2024-04', value: '2024-04' },
                        { title: '2024-03', value: '2024-03' },
                        { title: '2024-02', value: '2024-02' },
                        { title: '2024-01', value: '2024-01' },
                        { title: '2023-12', value: '2023-12' },
                        { title: '2023-11', value: '2023-11' },
                        { title: '2023-10', value: '2023-10' },
                        { title: '2023-09', value: '2023-09' },
                        { title: '2023-08', value: '2023-08' },
                        { title: '2023-07', value: '2023-07' },
                        { title: '2023-06', value: '2023-06' },
                        { title: '2023-05', value: '2023-05' },
                        { title: '2023-04', value: '2023-04' },
                        { title: '2023-03', value: '2023-03' },
                        { title: '2023-02', value: '2023-02' },
                        { title: '2023-01', value: '2023-01' },
                        { title: '2022-12', value: '2022-12' },
                        { title: '2022-11', value: '2022-11' },
                        { title: '2022-10', value: '2022-10' },
                        { title: '2022-09', value: '2022-09' },
                        { title: '2022-08', value: '2022-08' },
                        { title: '2022-07', value: '2022-07' },
                        { title: '2022-06', value: '2022-06' },
                        { title: '2022-05', value: '2022-05' },
                        { title: '2022-04', value: '2022-04' },
                        { title: '2022-03', value: '2022-03' },
                        { title: '2022-02', value: '2022-02' },
                        { title: '2022-01', value: '2022-01' },
                        { title: '2021-12', value: '2021-12' },
                        { title: '2021-11', value: '2021-11' },
                        { title: '2021-10', value: '2021-10' },
                        { title: '2021-09', value: '2021-09' },
                        { title: '2021-08', value: '2021-08' },
                        { title: '2021-07', value: '2021-07' },
                        { title: '2021-06', value: '2021-06' },
                        { title: '2021-05', value: '2021-05' },
                        { title: '2021-04', value: '2021-04' },
                        { title: '2021-03', value: '2021-03' },
                        { title: '2021-02', value: '2021-02' },
                        { title: '2021-01', value: '2021-01' },
                        { title: '2020-12', value: '2020-12' },
                        { title: '2020-11', value: '2020-11' },
                        { title: '2020-10', value: '2020-10' },
                        { title: '2020-09', value: '2020-09' },
                        { title: '2020-08', value: '2020-08' },
                        { title: '2020-07', value: '2020-07' },
                        { title: '2020-06', value: '2020-06' },
                        { title: '2020-05', value: '2020-05' },
                        { title: '2020-04', value: '2020-04' },
                        { title: '2020-03', value: '2020-03' },
                        { title: '2020-02', value: '2020-02' },
                        { title: '2020-01', value: '2020-01' },
                        { title: '2019-12', value: '2019-12' },
                        { title: '2019-11', value: '2019-11' },
                        { title: '2019-10', value: '2019-10' },
                        { title: '2019-09', value: '2019-09' },
                        { title: '2019-08', value: '2019-08' },
                        { title: '2019-07', value: '2019-07' },
                        { title: '2019-06', value: '2019-06' },
                        { title: '2019-05', value: '2019-05' },
                        { title: '2019-04', value: '2019-04' },
                        { title: '2019-03', value: '2019-03' },
                        { title: '2019-02', value: '2019-02' },
                        { title: '2019-01', value: '2019-01' },
                        { title: '2018-12', value: '2018-12' },
                        { title: '2018-11', value: '2018-11' },
                        { title: '2018-10', value: '2018-10' },
                        { title: '2018-09', value: '2018-09' },
                        { title: '2018-08', value: '2018-08' },
                        { title: '2018-07', value: '2018-07' },
                        { title: '2018-06', value: '2018-06' },
                        { title: '2018-05', value: '2018-05' },
                        { title: '2018-04', value: '2018-04' },
                        { title: '2018-03', value: '2018-03' },
                        { title: '2018-02', value: '2018-02' },
                        { title: '2018-01', value: '2018-01' },
                        { title: '2017-12', value: '2017-12' },
                        { title: '2017-11', value: '2017-11' },
                        { title: '2017-10', value: '2017-10' },
                        { title: '2017-09', value: '2017-09' },
                        { title: '2017-08', value: '2017-08' },
                        { title: '2017-07', value: '2017-07' },
                        { title: '2017-06', value: '2017-06' },
                        { title: '2017-05', value: '2017-05' },
                        { title: '2017-04', value: '2017-04' },
                        { title: '2017-03', value: '2017-03' },
                        { title: '2017-02', value: '2017-02' },
                        { title: '2017-01', value: '2017-01' },
                        { title: '2016-12', value: '2016-12' },
                        { title: '2016-11', value: '2016-11' },
                        { title: '2016-10', value: '2016-10' },
                        { title: '2016-09', value: '2016-09' },
                        { title: '2016-08', value: '2016-08' },
                        { title: '2016-07', value: '2016-07' },
                        { title: '2016-06', value: '2016-06' },
                        { title: '2016-05', value: '2016-05' },
                        { title: '2016-04', value: '2016-04' },
                        { title: '2016-03', value: '2016-03' },
                        { title: '2016-02', value: '2016-02' },
                        { title: '2016-01', value: '2016-01' },
                        { title: '2015-12', value: '2015-12' },
                        { title: '2015-11', value: '2015-11' },
                        { title: '2015-10', value: '2015-10' },
                        { title: '2015-09', value: '2015-09' },
                        { title: '2015-08', value: '2015-08' },
                        { title: '2015-07', value: '2015-07' },
                        { title: '2015-06', value: '2015-06' },
                        { title: '2015-05', value: '2015-05' },
                        { title: '2015-04', value: '2015-04' },
                        { title: '2015-03', value: '2015-03' },
                        { title: '2015-02', value: '2015-02' },
                        { title: '2015-01', value: '2015-01' },
                        { title: '2014-12', value: '2014-12' },
                        { title: '2014-11', value: '2014-11' },
                        { title: '2014-10', value: '2014-10' },
                        { title: '2014-09', value: '2014-09' },
                        { title: '2014-08', value: '2014-08' },
                        { title: '2014-07', value: '2014-07' },
                        { title: '2014-06', value: '2014-06' },
                        { title: '2014-05', value: '2014-05' },
                        { title: '2014-04', value: '2014-04' },
                        { title: '2014-03', value: '2014-03' },
                        { title: '2014-02', value: '2014-02' },
                        { title: '2014-01', value: '2014-01' },
                        { title: '2013-12', value: '2013-12' },
                        { title: '2013-11', value: '2013-11' },
                        { title: '2013-10', value: '2013-10' },
                        { title: '2013-09', value: '2013-09' },
                        { title: '2013-08', value: '2013-08' },
                        { title: '2013-07', value: '2013-07' }
                    ]
                },
                {
                    name: 'page',
                    title: "页码",
                    type: 'page',
                    value: '0'
                }
            ]
        },
        {
            id: 'xvideos.category',
            title: "分类",
            description: "XVideos 分类视频",
            functionName: 'getCategoryList',
            params: [
                {
                    name: 'sort_by',
                    title: "分类",
                    type: 'enumeration',
                    value: 'lang/chinese',
                    enumOptions: [
                        { title: '中文色情', value: 'lang/chinese' },
                        { title: 'AI', value: 'c/AI-239' },
                        { title: '业余', value: 'c/Amateur-65' },
                        { title: '肛交', value: 'c/Anal-12' },
                        { title: '阿拉伯', value: 'c/Arab-159' },
                        { title: '亚洲', value: 'c/Asian_Woman-32' },
                        { title: 'ASMR', value: 'c/ASMR-229' },
                        { title: '臀部', value: 'c/Ass-14' },
                        { title: '双性恋', value: 'c/Bi_Sexual-62' },
                        { title: '大屁股', value: 'c/Big_Ass-24' },
                        { title: '大鸡巴', value: 'c/Big_Cock-34' },
                        { title: '大胸', value: 'c/Big_Tits-23' },
                        { title: '黑人', value: 'c/Black_Woman-30' },
                        { title: '金发', value: 'c/Blonde-20' },
                        { title: '口交', value: 'c/Blowjob-15' },
                        { title: '黑发', value: 'c/Brunette-25' },
                        { title: '摄像头色情', value: 'c/Cam_Porn-58' },
                        { title: '中出', value: 'c/Creampie-40' },
                        { title: '绿帽/热妻', value: 'c/Cuckold-237' },
                        { title: '射精', value: 'c/Cumshot-18' },
                        { title: '女王调教', value: 'c/Femdom-235' },
                        { title: '拳交', value: 'c/Fisting-165' },
                        { title: '混乱家庭', value: 'c/Fucked_Up_Family-81' },
                        { title: '群交', value: 'c/Gangbang-69' },
                        { title: '扩张', value: 'c/Gapes-167' },
                        { title: '跨种族', value: 'c/Interracial-27' },
                        { title: '拉丁裔', value: 'c/Latina-16' },
                        { title: '女同性恋', value: 'c/Lesbian-26' },
                        { title: '情趣内衣', value: 'c/Lingerie-83' },
                        { title: '熟女', value: 'c/Mature-38' },
                        { title: '美艳人妻', value: 'c/Milf-19' },
                        { title: '涂油', value: 'c/Oiled-22' },
                        { title: '红发', value: 'c/Redhead-31' },
                        { title: '单人/自慰', value: 'c/Solo_and_Masturbation-33' },
                        { title: '潮喷', value: 'c/Squirting-56' },
                        { title: '丝袜', value: 'c/Stockings-28' },
                        { title: '青少年', value: 'c/Teen-13' }
                    ]
                },
                {
                    name: 'page',
                    title: "页码",
                    type: 'page',
                    value: '0'
                }
            ]
        },
        {
            id: 'xvideos.tag',
            title: "标签",
            description: "XVideos 标签视频",
            functionName: 'getTagList',
            params: [
                {
                    name: 'sort_by',
                    title: "标签",
                    type: 'enumeration',
                    value: 'amateur',
                    enumOptions: [
                        { title: '业余', value: 'amateur' },
                        { title: '亚洲', value: 'asian' },
                        { title: '最佳', value: 'best' },
                        { title: '口交', value: 'blowjob' },
                        { title: '情侣', value: 'couple' },
                        { title: '中出', value: 'creampie' },
                        { title: '女孩', value: 'girls' },
                        { title: '熟女', value: 'milf' },
                        { title: '阴部', value: 'pussy' },
                        { title: '少女', value: 'teen' },
                        { title: '丝袜', value: 'stockings' },
                        { title: '女性', value: 'woman' },
                        { title: '日本', value: 'japanese' },
                        { title: '中文', value: 'chinese' },
                        { title: '浓稠分泌', value: 'creamy' },
                        { title: '香港', value: 'hong-kong' },
                        { title: '中国', value: 'china' },
                        { title: '韩国', value: 'korea' },
                        { title: '泰国', value: 'thai' },
                        { title: '角色扮演', value: 'cosplay' },
                        { title: '游戏', value: 'game' },
                        { title: 'ASMR', value: 'ASMR-229' },
                        { title: 'Roblox', value: 'roblox' },
                        { title: '电影', value: 'movie' },
                        { title: '日本人妻', value: 'japanese-wife' },
                        { title: '肛交', value: 'anal' },
                        { title: '臀部', value: 'ass' },
                        { title: '肥臀', value: 'big-ass' },
                        { title: '大胸', value: 'big-tits' },
                        { title: '大鸡巴', value: 'big-cock' },
                        { title: '直播', value: 'cam' },
                        { title: '射精时刻', value: 'cumshot' },
                        { title: '后入式', value: 'doggystyle' },
                        { title: '拳交', value: 'fisting' },
                        { title: '跨种族', value: 'interracial' },
                        { title: '情趣内衣', value: 'lingerie' },
                        { title: '涂油', value: 'oiled' },
                        { title: '红发', value: 'redhead' },
                        { title: '潮喷', value: 'squirting' },
                        { title: '拉丁裔', value: 'latina' },
                        { title: '阿拉伯', value: 'arab' },
                        { title: '黑人', value: 'black' },
                        { title: '女上位', value: 'femdom' },
                        { title: '扩张', value: 'gapes' },
                        { title: '熟女', value: 'mature' },
                        { title: '按摩', value: 'massage' }
                    ]
                },
                {
                    name: 'page',
                    title: "页码",
                    type: 'page',
                    value: '0'
                }
            ]
        },
        {
            id: 'xvideos.channel',
            title: "频道",
            description: "XVideos 频道",
            functionName: 'getChannelList',
            params: [
                {
                    name: 'sort_by',
                    title: "频道",
                    type: 'enumeration',
                    value: 'asiam',
                    enumOptions: [
                        { title: 'AsiaM', value: 'asiam' },
                        { title: 'Vixen', value: 'vixen-1' },
                        { title: 'Tushy', value: 'tushy_com' },
                        { title: 'AV Jiali', value: 'av-jiali' },
                        { title: 'Japan HDV', value: 'japan-hdv' },
                        { title: 'Jav HD', value: 'javhd' },
                        { title: 'Caribbeancom', value: 'caribbeancom' },
                        { title: 'Hisidepon', value: 'hisidepon' },
                        { title: 'MOON FORCE', value: 'moonforce' },
                        { title: 'Mya Mya', value: 'myanma_porn' },
                        { title: 'Zzzgirlxxx', value: 'zzzgirlxxx' },
                        { title: 'Guodong Media', value: 'guodong_media' },
                        { title: 'YOSUGA', value: 'yosuga' },
                        { title: 'Momoka', value: 'japanese31' },
                        { title: 'Raptor Inc', value: 'raptor_inc' },
                        { title: 'Girls of HEL', value: 'girlsofhel_official' },
                        { title: 'Armadillo', value: 'shiroutotv' },
                        { title: '1pondo', value: 'ipondo' },
                        { title: 'Swaglive', value: 'swaglive' },
                        { title: 'NIKSINDIAN', value: 'niks_indian' },
                        { title: 'S Cute Official', value: 's-cute-official' },
                        { title: 'Japaneserxrx', value: 'japaneserxrx' },
                        { title: 'JapBliss', value: 'japbliss' },
                        { title: 'Hey Milf', value: 'heymilf' },
                        { title: 'Tenshigao', value: 'tenshigao' },
                        { title: 'AV 69', value: 'av69tv' },
                        { title: 'Jukujosukidesu', value: 'jukujosukidesu' },
                        { title: 'Schoolgirls HD', value: 'schoolgirlshd' },
                        { title: 'PrivateSociety', value: 'privatesociety' },
                        { title: 'Dogfart Network', value: 'dogfartnetwork' },
                        { title: 'Jav HD', value: 'javhd' },
                        { title: 'PutaLocura Oficial', value: 'putalocura_oficial' },
                        { title: 'Net Video Girls', value: 'netvideogirls' },
                        { title: 'Japan HDV', value: 'japan-hdv' },
                        { title: 'Sara Jay', value: 'sara-jay' },
                        { title: 'Caribbeancom', value: 'caribbeancom' },
                        { title: 'Pervcity', value: 'pervcity' },
                        { title: 'MadeInCanarias', value: 'madeincanarias' },
                        { title: 'BangBros 18', value: 'bangbros-18' },
                        { title: 'Exposed Latinas', value: 'exposedlatinas' },
                        { title: 'Oldje', value: 'cindyca' },
                        { title: 'New Sensations', value: 'newsensations' },
                        { title: 'CamSoda', value: 'camsoda' },
                        { title: 'Moms Teach Sex', value: 'momsteachsex' },
                        { title: 'Primal Fetish', value: 'primalfetish' },
                        { title: 'Backroom Casting Couch', value: 'backroomcastingcouch' },
                        { title: 'Mandy Flores', value: 'mandy-flores' },
                        { title: 'Step Siblings Caught', value: 'step-siblings-caught' },
                        { title: 'Digital Playground', value: 'digital-playground' },
                        { title: 'ShopLyfter', value: 'shoplyfter' },
                        { title: '21Naturals', value: '21naturals' },
                        { title: 'Perv Mom', value: 'perv-mom' },
                        { title: 'Sis Loves Me', value: 'sis-loves-me' },
                        { title: 'Fake Hub', value: 'fake-hub' },
                        { title: 'Net Video Girls', value: 'net-video-girls' },
                        { title: 'Japan HDV', value: 'japan-hdv' },
                        { title: 'Caribbeancom', value: 'caribbeancom' },
                        { title: 'Emuyumi Couple', value: 'emuyumi-couple' },
                        { title: 'Monger In Asia', value: 'monger-in-asia' },
                        { title: 'All Japanese Pass', value: 'alljapanesepass' },
                        { title: 'AV Stockings', value: 'avstockings' },
                        { title: 'Asians Bondage', value: 'asians-bondage' },
                        { title: 'Eagle MILF', value: 'eagle-milf' },
                        { title: 'PETERS', value: 'peters-1' }
                    ]
                },
                {
                    name: 'page',
                    title: "页码",
                    type: 'page',
                    value: '0'
                }
            ]
        },
        {
            id: 'xvideos.pornstars',
            title: "明星",
            description: "XVideos 色情明星",
            functionName: 'getPornstarsList',
            params: [
                {
                    name: 'sort_by',
                    title: "色情明星",
                    type: 'enumeration',
                    value: 'su-chang-model',
                    enumOptions: [
                        { title: 'Su Chang', value: 'su-chang-model' },
                        { title: 'Yui Hatano', value: 'yui-hatano-1' },
                        { title: 'Sweetie Fox', value: 'sweetie-fox1' },
                        { title: 'Riley Reid', value: 'riley-reid-1-model' },
                        { title: 'Anissa Miller', value: 'anissa-miller-model' },
                        { title: 'Keila Bassi', value: 'keilabassi77-model' },
                        { title: 'Lana Rhoades', value: 'lana-rhoades' },
                        { title: 'Hot Pearl', value: 'hot-pearl2' },
                        { title: 'Leana Lovings', value: 'leana-lovings' },
                        { title: 'Skye Young', value: 'skye-young2' },
                        { title: 'Lilibet Saunders', value: 'lilibet-saunders-model' },
                        { title: 'Shrooms Q', value: 'shrooms-q-model' },
                        { title: 'Nicole Murkovski', value: 'nicole-murkovski1' },
                        { title: 'Molly Little', value: 'molly-little' },
                        { title: 'Melody Marks', value: 'melody-marks' },
                        { title: 'Emily Willis', value: 'emily-willis' },
                        { title: 'Gabbie Carter', value: 'gabbie-carter' },
                        { title: 'Lia Lin', value: 'lia-lin' },
                        { title: 'Vale Nappi', value: 'vale_nappi3' },
                        { title: 'Dylann Vox', value: 'dylann-vox' },
                        { title: 'Stella Cox', value: 'stella-cox' },
                        { title: 'Eva Elfie', value: 'eva_elfie-model' },
                        { title: 'Gia Paige', value: 'gia-paige' },
                        { title: 'Bunny Colby', value: 'bunny-colby' },
                        { title: 'Ruka Kanae', value: 'ruka-kanae' }
                    ]
                },
                {
                    name: 'page',
                    title: "页码",
                    type: 'page',
                    value: '0'
                }
            ]
        }
    ]
};

async function getNewList(params) {
    try {
        if (params.region) {
            const currentRegion = await Widget.storage.getItem('xvideos.region').catch(()=>null);
            if (currentRegion !== params.region) {
                await Widget.storage.setItem('xvideos.region', params.region);
                const resp = await Widget.http.get(`${BASE_URL}/change-country/${params.region}`);
                const setCookie = resp?.headers?.['set-cookie'];
                if (setCookie) {
                    const match = setCookie.match(/session_token=([^;]+)/);
                    if (match) await Widget.storage.setItem('xvideos.session_token', match[1]);
                }
            }
        }
    } catch (e) {}

    const page = params.page ? parseInt(params.page) : 0;
    const $ = await fetchHtml(page > 0 ? `${BASE_URL}/new/${page}` : `${BASE_URL}/`);
    return parseVideoList($);
}

let cachedBestArchive = '';
async function getBestArchive() {
    if (cachedBestArchive) return cachedBestArchive;
    try {
        const $ = await fetchHtml(`${BASE_URL}/best`);
        const href = $('a[href^="/best/"]').toArray().map(el => $(el).attr('href')).find(link => /^\/best\/\d{4}-\d{2}$/.test(link || ''));
        if (href) cachedBestArchive = href.replace(/^\//, '').replace(/\/$/, '');
    } catch (e) {}
    return cachedBestArchive || '';
}

async function getBestList(params) {
    const page = params.page ? parseInt(params.page) : 0;
    const archive = params.archive || '';
    const mode = (params.sort_by || params.mode || 'free').toLowerCase();
    let url = `${BASE_URL}/best`;
    
    if (archive) {
        url = mode === 'red' ? `${BASE_URL}/best-of-red/${archive}` : `${BASE_URL}/best/${archive}`;
        if (page > 0) url += `/${page}`;
    } else if (page > 0) {
        const bestArchive = await getBestArchive();
        if (bestArchive) url = `${BASE_URL}/best/${bestArchive}/${page}`;
    }

    const $ = await fetchHtml(url);
    const list = parseVideoList($);
    if (list.length) return list;

    return $('a[href^="/video."]').toArray().map(el => {
        const $el = $(el);
        const link = formatUrl($el.attr('href'));
        if (!link) return null;
        return { id: link, type: 'url', mediaType: 'movie', link, title: $el.text().trim() || link };
    }).filter(Boolean);
}

async function getCategoryList(params) {
    const page = params.page ? parseInt(params.page) : 0;
    const categoryPath = params.sort_by || params.category || '';
    const url = `${BASE_URL}/${categoryPath}`;
    const finalUrl = page > 0 && categoryPath.startsWith('c/') ? `${url}/${page}` : url;
    return parseVideoList(await fetchHtml(finalUrl));
}

async function getTagList(params) {
    const page = params.page ? parseInt(params.page) : 0;
    const tag = params.sort_by || params.tag || '';
    return parseVideoList(await fetchHtml(`${BASE_URL}/tags/${tag}${page > 0 ? `/${page}` : ''}`));
}

async function getChannelList(params) {
    const page = params.page ? parseInt(params.page) : 0;
    const channel = params.sort_by || params.channel || '';
    const resp = await fetchApi(`${BASE_URL}/channels/${channel}/videos/best/${page}`);
    return (resp.videos || []).map(formatXVideosItem);
}

async function getPornstarsList(params) {
    const page = params.page ? parseInt(params.page) : 0;
    const pornstar = params.sort_by || params.pornstar || '';
    const resp = await fetchApi(`${BASE_URL}/pornstars/${pornstar}/videos/best/${page}`);
    return (resp.videos || []).map(formatXVideosItem);
}

async function loadDetail(url) {
    const $ = await fetchHtml(url);
    const scripts = $("script").text();
    
    const videoUrl = scripts.match(/html5player\.setVideoUrlHigh\('(.*?)'\)/)?.[1]
                  || scripts.match(/html5player\.setVideoHLS\('(.*?)'\)/)?.[1]
                  || scripts.match(/html5player\.setVideoUrlLow\('(.*?)'\)/)?.[1]
                  || '';

    let ldJson = {};
    try {
        ldJson = JSON.parse($('script[type="application/ld+json"]').text() || '{}');
    } catch (e) {}

    const finalVideoUrl = videoUrl || ldJson.contentUrl;
    if (!finalVideoUrl) throw new Error("未找到视频资源");

    const result = {
        id: url,
        type: 'detail',
        mediaType: 'movie',
        link: url,
        videoUrl: finalVideoUrl,
        title: ldJson.name || '',
        description: ldJson.description || '',
        backdropPath: ldJson.thumbnailUrl?.[0] || '',
        releaseDate: ldJson.uploadDate || ''
    };

    const relatedMatch = scripts.match(/video_related=\[(.*?)\];/);
    if (relatedMatch?.[1]) {
        try {
            const allRelated = JSON.parse(`[${relatedMatch[1]}]`).map(formatXVideosItem);
            result.relatedItems = allRelated
                .filter(item => item.id !== url && item.link !== url)
                .slice(0, 12);
        } catch (e) {}
    }

    if (result.backdropPath) {
        const previewUrl = generateVideoPreviewUrl(result.backdropPath);
        if (previewUrl) {
            result.trailers = [{
                coverUrl: result.backdropPath,
                url: previewUrl
            }];
        }
    }

    return result;
}

WidgetMetadata.search = {
    title: "快捷搜索",
    functionName: "searchVideos",
    params: [
        { name: "keyword", title: "搜索关键词", type: "input", description: "输入关键词", value: "" },
        { name: "page", title: "页码", type: "page", description: "页码", value: "0" }
    ]
};

async function searchVideos(params) {
    const page = params.page ? parseInt(params.page) : 0;
    const keyword = encodeURIComponent(params.keyword || "");
    if (!keyword) return [];
    
    const url = `${BASE_URL}/?k=${keyword}${page > 0 ? `&p=${page}` : ''}`;
    return parseVideoList(await fetchHtml(url));
}
