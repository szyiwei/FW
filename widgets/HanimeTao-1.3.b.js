var WidgetMetadata = {
    id: "hanime1_me_advanced", 
    title: "Hanime1-全能检索",
    description: "影片分类与搜索，上滑无限加载",
    author: "网络/TaYhu", 
    site: "https://hanime1.me",
    version: "1.0.3",
    requiredVersion: "0.0.2",
    detailCacheDuration: 300,
    modules: [
        {
            title: "搜索",
            functionName: "searchVideos",
            cacheDuration: 600, 
            params: [
                { name: "keyword", title: "搜索关键词", type: "input", value: "" },
                {
                    name: "sort_by", title: "排序方式", type: "enumeration", value: "all",
                    enumOptions: [{ title: "全部", value: "all" }, { title: "最新上市", value: "new_release" }, { title: "最新上传", value: "latest_upload" }, { title: "本日排行", value: "daily_rank" }, { title: "本周排行", value: "weekly_rank" }, { title: "本月排行", value: "monthly_rank" }, { title: "观看次数", value: "views" }, { title: "点赞比例", value: "likes" }, { title: "时长最长", value: "duration" }, { title: "他们在看", value: "watching" }]
                },
                {
                    name: "upload_time", title: "发布日期", type: "enumeration", value: "all",
                    enumOptions: [{ title: "全部", value: "all" }, { title: "过去 24 小时", value: "24h" }, { title: "过去 2 天", value: "2d" }, { title: "过去 1 周", value: "1w" }, { title: "过去 1 个月", value: "1m" }, { title: "过去 3 个月", value: "3m" }, { title: "过去 1 年", value: "1y" }]
                },
                {
                    name: "duration_filter", title: "时长范围", type: "enumeration", value: "all",
                    enumOptions: [{ title: "全部", value: "all" }, { title: "1 分钟 +", value: "1m_plus" }, { title: "5 分钟 +", value: "5m_plus" }, { title: "10 分钟 +", value: "10m_plus" }, { title: "20 分钟 +", value: "20m_plus" }, { title: "30 分钟 +", value: "30m_plus" }, { title: "60 分钟 +", value: "60m_plus" }, { title: "0 - 10 分钟", value: "0_10m" }, { title: "0 - 20 分钟", value: "0_20m" }]
                },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        },
        {
            title: "影片分类",
            functionName: "loadAdvancedGenre", 
            cacheDuration: 600, 
            params: [
                {
                    name: "genre", title: "基础大分类", type: "enumeration", value: "all",
                    enumOptions: [{ title: "全部", value: "all" }, { title: "里番", value: "rifan" }, { title: "泡面番", value: "paomian" }, { title: "Motion Anime", value: "motion" }, { title: "3DCG", value: "3dcg" }, { title: "2D 动画", value: "2d" }, { title: "2.5D", value: "2_5d" }, { title: "AI 生成", value: "ai" }, { title: "MMD", value: "mmd" }, { title: "Cosplay", value: "cosplay" }]
                },
                {
                    name: "sort_by", title: "排序方式", type: "enumeration", value: "all",
                    enumOptions: [{ title: "全部", value: "all" }, { title: "最新上市", value: "new_release" }, { title: "最新上传", value: "latest_upload" }, { title: "本日排行", value: "daily_rank" }, { title: "本周排行", value: "weekly_rank" }, { title: "本月排行", value: "monthly_rank" }, { title: "观看次数", value: "views" }, { title: "点赞比例", value: "likes" }, { title: "时长最长", value: "duration" }, { title: "他们在看", value: "watching" }]
                },
                {
                    name: "upload_time", title: "发布日期", type: "enumeration", value: "all",
                    enumOptions: [{ title: "全部", value: "all" }, { title: "过去 24 小时", value: "24h" }, { title: "过去 2 天", value: "2d" }, { title: "过去 1 周", value: "1w" }, { title: "过去 1 个月", value: "1m" }, { title: "过去 3 个月", value: "3m" }, { title: "过去 1 年", value: "1y" }]
                },
                {
                    name: "duration_filter", title: "时长范围", type: "enumeration", value: "all",
                    enumOptions: [{ title: "全部", value: "all" }, { title: "1 分钟 +", value: "1m_plus" }, { title: "5 分钟 +", value: "5m_plus" }, { title: "10 分钟 +", value: "10m_plus" }, { title: "20 分钟 +", value: "20m_plus" }, { title: "30 分钟 +", value: "30m_plus" }, { title: "60 分钟 +", value: "60m_plus" }, { title: "0 - 10 分钟", value: "0_10m" }, { title: "0 - 20 分钟", value: "0_20m" }]
                },
                { name: "tag_attr", title: "影片属性", type: "enumeration", value: "all", enumOptions: [{title:"全部",value:"all"}, {title:"无码",value:"无码"}, {title:"AI解码",value:"AI解码"}, {title:"中文字幕",value:"中文字幕"}, {title:"中文配音",value:"中文配音"}, {title:"同人作品",value:"同人作品"}, {title:"断面图",value:"断面图"}, {title:"ASMR",value:"ASMR"}, {title:"1080p",value:"1080p"}, {title:"60FPS",value:"60FPS"}] },
                { name: "tag_rel", title: "人物关系", type: "enumeration", value: "all", enumOptions: [{title:"全部",value:"all"}, {title:"近亲",value:"近亲"}, {title:"姐",value:"姐"}, {title:"妹",value:"妹"}, {title:"母",value:"母"}, {title:"女儿",value:"女儿"}, {title:"师生",value:"师生"}, {title:"情侣",value:"情侣"}, {title:"青梅竹马",value:"青梅竹马"}, {title:"同事",value:"同事"}] },
                { name: "tag_role", title: "角色设定", type: "enumeration", value: "all", enumOptions: [{title:"全部",value:"all"}, {title:"JK",value:"JK"}, {title:"处女",value:"处女"}, {title:"御姐",value:"御姐"}, {title:"熟女",value:"熟女"}, {title:"人妻",value:"人妻"}, {title:"女教师",value:"女教师"}, {title:"男教师",value:"男教师"}, {title:"女医生",value:"女医生"}, {title:"女病人",value:"女病人"}, {title:"护士",value:"护士"}, {title:"OL",value:"OL"}, {title:"女警",value:"女警"}, {title:"大小姐",value:"大小姐"}, {title:"偶像",value:"偶像"}, {title:"女仆",value:"女仆"}, {title:"巫女",value:"巫女"}, {title:"魔女",value:"魔女"}, {title:"修女",value:"修女"}, {title:"风俗娘",value:"风俗娘"}, {title:"公主",value:"公主"}, {title:"女忍者",value:"女忍者"}, {title:"女战士",value:"女战士"}, {title:"女骑士",value:"女骑士"}, {title:"魔法少女",value:"魔法少女"}, {title:"异种族",value:"异种族"}, {title:"天使",value:"天使"}, {title:"妖精",value:"妖精"}, {title:"魔物娘",value:"魔物娘"}, {title:"魅魔",value:"魅魔"}, {title:"吸血鬼",value:"吸血鬼"}, {title:"女鬼",value:"女鬼"}, {title:"兽娘",value:"兽娘"}, {title:"福瑞",value:"福瑞"}, {title:"乳牛",value:"乳牛"}, {title:"机械娘",value:"机械娘"}, {title:"碧池",value:"碧池"}, {title:"痴女",value:"痴女"}, {title:"雌小鬼",value:"雌小鬼"}, {title:"不良少女",value:"不良少女"}, {title:"傲娇",value:"傲嬌"}, {title:"病娇",value:"病嬌"}, {title:"无口",value:"无口"}, {title:"无表情",value:"无表情"}, {title:"眼神死",value:"眼神死"}, {title:"正太",value:"正太"}, {title:"伪娘",value:"伪娘"}, {title:"扶他",value:"扶他"}] },
                { name: "tag_body", title: "外貌身材", type: "enumeration", value: "all", enumOptions: [{title:"全部",value:"all"}, {title:"短发",value:"短发"}, {title:"马尾",value:"马尾"}, {title:"双马尾",value:"双马尾"}, {title:"丸子头",value:"丸子头"}, {title:"巨乳",value:"巨乳"}, {title:"乳环",value:"乳环"}, {title:"舌环",value:"舌环"}, {title:"贫乳",value:"贫乳"}, {title:"黑皮肤",value:"黑皮肤"}, {title:"晒痕",value:"晒痕"}, {title:"眼镜娘",value:"眼镜娘"}, {title:"兽耳",value:"兽耳"}, {title:"尖耳朵",value:"尖耳朵"}, {title:"异色瞳",value:"异色瞳"}, {title:"美人痣",value:"美人痣"}, {title:"肌肉女",value:"肌肉女"}, {title:"白虎",value:"白虎"}, {title:"阴毛",value:"阴毛"}, {title:"腋毛",value:"腋毛"}, {title:"大屌",value:"大屌"}, {title:"着衣",value:"着衣"}, {title:"水手服",value:"水手服"}, {title:"体操服",value:"体操服"}, {title:"泳装",value:"泳装"}, {title:"比基尼",value:"比基尼"}, {title:"死库水",value:"死库水"}, {title:"和服",value:"和服"}, {title:"兔女郎",value:"兔女郎"}, {title:"围裙",value:"围裙"}, {title:"啦啦队",value:"啦啦队"}, {title:"丝袜",value:"丝袜"}, {title:"吊袜带",value:"吊袜带"}, {title:"热裤",value:"熱褲"}, {title:"迷你裙",value:"迷你裙"}, {title:"性感内衣",value:"性感內衣"}, {title:"紧身衣",value:"緊身衣"}, {title:"丁字裤",value:"丁字褲"}, {title:"高跟鞋",value:"高跟鞋"}, {title:"睡衣",value:"睡衣"}, {title:"婚纱",value:"婚紗"}, {title:"旗袍",value:"旗袍"}, {title:"古装",value:"古装"}, {title:"哥德",value:"哥德"}, {title:"口罩",value:"口罩"}, {title:"刺青",value:"刺青"}, {title:"淫纹",value:"淫紋"}, {title:"身体写字",value:"身體寫字"}] },
                { name: "tag_loc", title: "情境场所", type: "enumeration", value: "all", enumOptions: [{title:"全部",value:"all"}, {title:"校园",value:"校園"}, {title:"教室",value:"教室"}, {title:"图书馆",value:"圖書館"}, {title:"保健室",value:"保健室"}, {title:"游泳池",value:"游泳池"}, {title:"爱情宾馆",value:"愛情賓館"}, {title:"医院",value:"醫院"}, {title:"办公室",value:"辦公室"}, {title:"浴室",value:"浴室"}, {title:"窗边",value:"窗邊"}, {title:"公共厕所",value:"公共廁所"}, {title:"公众场合",value:"公眾场合"}, {title:"户外野战",value:"戶外野戰"}, {title:"电车",value:"電車"}, {title:"车震",value:"車震"}, {title:"游艇",value:"遊艇"}, {title:"露营帐篷",value:"露營帳篷"}, {title:"电影院",value:"電影院"}, {title:"健身房",value:"健身房"}, {title:"沙滩",value:"沙灘"}, {title:"温泉",value:"温泉"}, {title:"夜店",value:"夜店"}, {title:"监狱",value:"監獄"}, {title:"教堂",value:"教堂"}] },
                { name: "tag_plot", title: "故事剧情", type: "enumeration", value: "all", enumOptions: [{title:"全部",value:"all"}, {title:"纯爱",value:"純愛"}, {title:"恋爱喜剧",value:"戀愛喜劇"}, {title:"后宫",value:"後宮"}, {title:"十指紧扣",value:"十指緊扣"}, {title:"开大车",value:"開大車"}, {title:"NTR",value:"NTR"}, {title:"精神控制",value:"精神控制"}, {title:"药物",value:"藥物"}, {title:"痴汉",value:"痴漢"}, {title:"阿嘿颜",value:"阿嘿顏"}, {title:"精神崩溃",value:"精神崩潰"}, {title:"猎奇",value:"獵奇"}, {title:"BDSM",value:"BDSM"}, {title:"捆绑",value:"綑綁"}, {title:"眼罩",value:"眼罩"}, {title:"项圈",value:"項圈"}, {title:"调教",value:"調教"}, {title:"异物插入",value:"異物插入"}, {title:"寻欢洞",value:"尋歡洞"}, {title:"肉便器",value:"肉便器"}, {title:"性奴隶",value:"性奴隸"}, {title:"胃凸",value:"胃凸"}, {title:"强制",value:"強制"}, {title:"轮奸",value:"輪姦"}, {title:"凌辱",value:"凌辱"}, {title:"性暴力",value:"性暴力"}, {title:"逆强制",value:"逆強制"}, {title:"女王样",value:"女王樣"}, {title:"榨精",value:"榨精"}, {title:"母女丼",value:"母女丼"}, {title:"姐妹丼",value:"姐妹丼"}, {title:"出轨",value:"出軌"}, {title:"醉酒",value:"醉酒"}, {title:"摄影",value:"摄影"}, {title:"睡眠奸",value:"睡眠姦"}, {title:"机械奸",value:"機械姦"}, {title:"虫奸",value:"蟲姦"}, {title:"性转换",value:"性轉換"}, {title:"百合",value:"百合"}, {title:"耽美",value:"耽美"}, {title:"时间停止",value:"时间停止"}, {title:"异世界",value:"異世界"}, {title:"怪兽",value:"怪獸"}, {title:"哥布林",value:"哥布林"}, {title:"世界末日",value:"世界末日"}] },
                { name: "tag_pos", title: "性交体位", type: "enumeration", value: "all", enumOptions: [{title:"全部",value:"all"}, {title:"手交",value:"手交"}, {title:"指交",value:"指交"}, {title:"乳交",value:"乳交"}, {title:"乳头交",value:"乳頭交"}, {title:"肛交",value:"肛交"}, {title:"双洞齐下",value:"雙洞齊下"}, {title:"脚交",value:"腳交"}, {title:"素股",value:"素股"}, {title:"拳交",value:"拳交"}, {title:"3P",value:"3P"}, {title:"群交",value:"群交"}, {title:"口交",value:"口交"}, {title:"跪舔",value:"跪舔"}, {title:"深喉咙",value:"深喉嚨"}, {title:"口爆",value:"口爆"}, {title:"吞精",value:"吞精"}, {title:"舔蛋蛋",value:"舔蛋蛋"}, {title:"舔穴",value:"舔穴"}, {title:"69",value:"69"}, {title:"自慰",value:"自慰"}, {title:"腋交",value:"腋交"}, {title:"舔腋下",value:"舔腋下"}, {title:"发交",value:"髮交"}, {title:"舔耳朵",value:"舔耳朵"}, {title:"舔脚",value:"舔腳"}, {title:"内射",value:"內射"}, {title:"外射",value:"外射"}, {title:"颜射",value:"顏射"}, {title:"潮吹",value:"潮吹"}, {title:"怀孕",value:"懷孕"}, {title:"喷奶",value:"噴奶"}, {title:"放尿",value:"放尿"}, {title:"排便",value:"排便"}, {title:"骑乘位",value:"騎乘位"}, {title:"背后位",value:"背後位"}, {title:"颜面骑乘",value:"顏面騎乘"}, {title:"火车便当",value:"火車便當"}, {title:"一字马",value:"一字馬"}, {title:"性玩具",value:"性玩具"}, {title:"飞机杯",value:"飛機杯"}, {title:"跳蛋",value:"跳蛋"}, {title:"毒龙钻",value:"毒龍鑽"}, {title:"触手",value:"觸手"}, {title:"兽交",value:"獸交"}, {title:"颈手枷",value:"頸手枷"}, {title:"扯头发",value:"扯頭髮"}, {title:"掐脖子",value:"掐脖子"}, {title:"打屁股",value:"打屁股"}, {title:"肉棒打脸",value:"肉棒打臉"}, {title:"阴道外翻",value:"阴道外翻"}, {title:"男乳首责",value:"男乳首責"}, {title:"接吻",value:"接吻"}, {title:"舌吻",value:"舌吻"}, {title:"POV",value:"POV"}] },
                { name: "page", title: "页码", type: "page", value: "1" }
            ]
        }
    ]
};

const BASE_URL = "https://hanime1.me";
const REQUEST_TIMEOUT = 10000;

function getCommonHeaders() {
    return { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", "Referer": BASE_URL, "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7" };
}

async function httpGetWithTimeout(url) {
    return Widget.http.get(url, { headers: getCommonHeaders(), timeout: REQUEST_TIMEOUT });
}

function normalizeImageUrl(src) {
    if (!src) return "";
    if (src.startsWith("//")) return "https:" + src;
    if (src.startsWith("/")) return BASE_URL + src;
    return src.startsWith("http") ? src : BASE_URL + "/" + src;
}

async function fetchAndParse(url) {
    try {
        const response = await httpGetWithTimeout(url);
        const $ = Widget.html.load(response.data);
        const items = [];
        $('a[href*="/watch?v="]').each((i, el) => {
            let link = $(el).attr('href');
            if (!link.startsWith('http')) link = BASE_URL + (link.startsWith('/') ? '' : '/') + link;
            if (items.some(it => it.link === link)) return;
            const $img = $(el).find('img').first();
            let poster = normalizeImageUrl($img.attr('data-src') || $img.attr('src') || "");
            let title = $(el).find('.card-mobile-title, .home-rows-videos-title, [class*="title"]').first().text().trim() || $img.attr('alt') || "";
            if (!title) return;
            items.push({ id: link + "||" + Math.random().toString(36).substring(2, 8), type: "url", title: title, posterPath: poster, backdropPath: poster, mediaType: "movie", durationText: $(el).find('.card-mobile-duration, .duration').first().text().trim(), description: $(el).find('.card-mobile-user, .author').first().text().trim() || "Hanime1", link: link });
        });
        return items;
    } catch (e) { throw new Error("网络加载失败，请上拉重试"); }
}

function mapSortToApi(v) {
    const m = {"new_release":"最新上市","latest_upload":"最新上傳","daily_rank":"本日排行","weekly_rank":"本週排行","monthly_rank":"本月排行","views":"觀看次數","likes":"點讚比例","duration":"時長最長","watching":"他們在看"};
    return m[v] || "";
}

function mapGenreToApi(v) {
    const m = {"rifan":"裏番","paomian":"泡麵番","motion":"Motion Anime","3dcg":"3DCG","2d":"2D動畫","2_5d":"2.5D","ai":"AI生成","mmd":"MMD","cosplay":"Cosplay"};
    return m[v] || "";
}

function mapTimeToApi(v) {
    const m = {"24h":"過去 24 小時","2d":"過去 2 天","1w":"過去 1 週","1m":"過去 1 個月","3m":"過去 3 個月","1y":"過去 1 年"};
    return m[v] || "";
}

function mapDurationToApi(v) {
    const m = {"1m_plus":"1 分鐘 +","5m_plus":"5 分鐘 +","10m_plus":"10 分鐘 +","20m_plus":"20 分鐘 +","30m_plus":"30 分鐘 +","60m_plus":"60 分鐘 +","0_10m":"0 - 10 分鐘","0_20m":"0 - 20 分鐘"};
    return m[v] || "";
}

const S2T_MAP = {"无码":"無碼","AI解码":"AI解碼","中文字幕":"中文字幕","中文配音":"中文配音","同人作品":"同人作品","断面图":"斷面圖","近亲":"近親","女儿":"女兒","师生":"師生","情侣":"情侶","青梅竹马":"青梅竹馬","处女":"處女","御姐":"御姐","熟女":"熟女","女教师":"女教師","男教师":"男教師","女医生":"女醫生","女病人":"女病人","护士":"護士","女警":"女警","大小姐":"大小姐","女仆":"女僕","魔女":"魔女","修女":"修女","风俗娘":"風俗娘","女忍者":"女忍者","女战士":"女戰士","女骑士":"女騎士","魔法少女":"魔法少女","异种族":"異種族","妖精":"妖精","魔物娘":"魔物娘","魅魔":"魅魔","吸血鬼":"吸血鬼","女鬼":"女鬼","兽娘":"獸娘","乳牛":"乳牛","机械娘":"機械娘","痴女":"痴女","雌小鬼":"雌小鬼","不良少女":"不良少女","傲娇":"傲嬌","病娇":"病嬌","无表情":"無表情","伪娘":"偽娘","扶他":"扶他","短发":"短髮","马尾":"馬尾","双马尾":"雙馬尾","丸子头":"丸子頭","乳环":"乳環","舌环":"舌環","贫乳":"貧乳","黑皮肤":"黑皮膚","晒痕":"曬痕","眼镜娘":"眼鏡娘","兽耳":"獸耳","尖耳朵":"尖耳朵","异色瞳":"異色瞳","美人痣":"美人痣","肌肉女":"肌肉女","阴毛":"陰毛","腋毛":"腋毛","大屌":"大屌","着衣":"著衣","体操服":"體操服","兔女郎":"兔女郎","围裙":"圍裙","啦啦队":"啦啦隊","丝袜":"絲襪","吊袜带":"吊襪帶","热裤":"熱褲","迷你裙":"迷你裙","性感内衣":"性感內衣","紧身衣":"緊身衣","丁字裤":"丁字褲","高跟鞋":"高跟鞋","睡衣":"睡衣","婚纱":"婚紗","旗袍":"旗袍","古装":"古装","哥德":"哥德","口罩":"口罩","刺青":"刺青","淫纹":"淫紋","身体写字":"身體寫字","校园":"校園","图书馆":"圖書館","游泳池":"游泳池","爱情宾馆":"愛情賓館","医院":"醫院","办公室":"辦公室","窗边":"窗邊","公共厕所":"公共廁所","公众场合":"公眾场合","户外野战":"戶外野戰","电车":"電車","车震":"車震","游艇":"遊艇","露营帐篷":"露營帳篷","电影院":"電影院","健身房":"健身房","沙滩":"沙灘","夜店":"夜店","监狱":"監獄","纯爱":"純愛","恋爱喜剧":"戀愛喜劇","后宫":"後宮","十指紧扣":"十指緊扣","开大车":"開大車","精神控制":"精神控制","药物":"藥物","痴汉":"痴漢","阿嘿颜":"阿嘿顏","精神崩溃":"精神崩潰","猎奇":"獵奇","捆绑":"綑綁","项圈":"項圈","调教":"調教","异物插入":"異物插入","寻欢洞":"尋歡洞","肉便器":"肉便器","性奴隶":"性奴隸","胃凸":"胃凸","强制":"強制","轮奸":"輪姦","凌辱":"凌辱","性暴力":"性暴力","逆强制":"逆強制","女王样":"女王樣","榨精":"榨精","母女丼":"母女丼","姐妹丼":"姐妹丼","出轨":"出軌","醉酒":"醉酒","睡眠奸":"睡眠姦","机械奸":"機械姦","虫奸":"蟲姦","性转换":"性轉換","时间停止":"时间停止","异世界":"異世界","怪兽":"怪獸","哥布林":"哥布林","世界末日":"世界末日"};

function convertToTraditional(t) {
    if (!t) return "";
    let r = t;
    for (const [s, tr] of Object.entries(S2T_MAP)) r = r.split(s).join(tr);
    return r;
}

function appendTagsToQuery(params, queryParts) {
    const fields = ['tag_attr', 'tag_rel', 'tag_role', 'tag_body', 'tag_plot', 'tag_loc', 'tag_pos'];
    fields.forEach(field => {
        if (params[field] && params[field] !== 'all') {
            params[field].split(/[\s,，]+/).forEach(tag => { if (tag) queryParts.push(`tags%5B%5D=${encodeURIComponent(convertToTraditional(tag))}`); });
        }
    });
}

async function searchVideos(params) {
    const page = parseInt(params.page) || 1;
    let url = `${BASE_URL}/search`;
    const qp = [];
    if (params.keyword) qp.push(`query=${encodeURIComponent(convertToTraditional(params.keyword))}`);
    if (params.sort_by && params.sort_by !== 'all') qp.push(`sort=${encodeURIComponent(mapSortToApi(params.sort_by))}`);
    if (params.upload_time && params.upload_time !== 'all') qp.push(`time=${encodeURIComponent(mapTimeToApi(params.upload_time))}`);
    if (params.duration_filter && params.duration_filter !== 'all') qp.push(`duration=${encodeURIComponent(mapDurationToApi(params.duration_filter))}`);
    if (page > 1) qp.push(`page=${page}`);
    if (qp.length > 0) url += '?' + qp.join('&');
    return fetchAndParse(url);
}

async function loadAdvancedGenre(params) {
    const page = parseInt(params.page) || 1;
    let url = `${BASE_URL}/search`;
    const qp = [];
    if (params.genre !== 'all') qp.push(`genre=${encodeURIComponent(mapGenreToApi(params.genre))}`);
    qp.push(`sort=${encodeURIComponent(mapSortToApi(params.sort_by || "all"))}`);
    if (params.upload_time !== 'all') qp.push(`time=${encodeURIComponent(mapTimeToApi(params.upload_time))}`);
    if (params.duration_filter !== 'all') qp.push(`duration=${encodeURIComponent(mapDurationToApi(params.duration_filter))}`);
    appendTagsToQuery(params, qp);
    if (page > 1) qp.push(`page=${page}`);
    if (qp.length > 0) url += '?' + qp.join('&');
    return fetchAndParse(url);
}

async function loadDetail(link) {
    link = link.split('||')[0];
    try {
        const response = await httpGetWithTimeout(link);
        const $ = Widget.html.load(response.data);
        let videoUrl = "";
        const qids = ['#video-sd', '#video-hd', '#video-720p', '#video-1080p'];
        for (const id of qids) { if ($(id).val()) { videoUrl = $(id).val(); break; } }
        if (!videoUrl) videoUrl = (response.data.match(/source\s*=\s*['"](https:\/\/[^'"]+)['"]/) || [])[1] || $('video source').attr('src');
        if (!videoUrl) throw new Error("video_url_not_found");
        const childItems = [];
        $('.home-rows-videos-div a[href*="/watch?v="]').each((i, el) => {
            if (i >= 10) return false;
            let recLink = $(el).attr('href');
            if (!recLink.startsWith('http')) recLink = BASE_URL + (recLink.startsWith('/') ? '' : '/') + recLink;
            const $img = $(el).find('img').first();
            childItems.push({ id: recLink + "||" + Math.random().toString(36).substring(2, 8), type: "url", title: $(el).find('.home-rows-videos-title').first().text().trim() || $img.attr('alt') || "相关视频", posterPath: normalizeImageUrl($img.attr('data-src') || $img.attr('src') || ""), mediaType: "movie", link: recLink });
        });
        const cover = $('meta[property="og:image"]').attr('content') || "";
        return { id: link, type: "detail", videoUrl: videoUrl.replace(/&amp;/g, '&'), title: $('meta[property="og:title"]').attr('content') || "未知", description: $('meta[property="og:description"]').attr('content') || "", posterPath: normalizeImageUrl(cover), backdropPath: normalizeImageUrl(cover), mediaType: "movie", link: link, childItems: childItems, headers: getCommonHeaders() };
    } catch (error) {
        return { id: link, type: "detail", videoUrl: link, title: "加载失败", description: error.message === "video_url_not_found" ? "未找到视频地址" : "请重试", posterPath: "", mediaType: "movie", link: link };
    }
}