WidgetMetadata = {
    id: "Pornhub_int",
    title: "Pornhub",
    version: "1.3.1",
    requiredVersion: "0.0.1",
    description: "Pornhub 视频聚合模块",
    author: "海带|EL",
    site: "https://cn.pornhub.com",
    detailCacheDuration: 60,
    modules: [
        {
            id: "searchKeyword",
            title: "🔍 全站搜索",
            functionName: "getSearchResults",
            cacheDuration: 86400,
            params: [
                {
                    name: "search_query",
                    title: "搜索关键词",
                    type: "input",
                    description: "请输入要搜索的关键词",
                    value: ""
                },
                {
                    name: "search_type",
                    title: "是否开启精准搜索（作者名或视频标题 包含/等于 关键词）",
                    type: "enumeration",
                    description: "是否开启精准搜索",
                    value: "",
                    enumOptions: [
                        { title: "关闭", value: "no" },
                        { title: "开启", value: "yes" },

                    ]
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    description: "视频排序方式",
                    value: "",
                    enumOptions: [
                        { title: "最相关", value: "" },
                        { title: "最新发布", value: "new" },
                        { title: "最多播放", value: "views" },
                        { title: "最高评分", value: "rating" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    description: "页码",
                    value: "1"
                }
            ]
        },
        {
            id: "favorites",
            title: "❤️ 我的最爱",
            functionName: "getFavorites",
            cacheDuration: 180,
            params: [
                {
                    name: "username",
                    title: "用户名",
                    type: "input",
                    description: "填入你的Pornhub用户名",
                    value: "",
                    placeholders: [
                        {
                            title: "示例用户",
                            value: "watchadog"
                        }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    description: "页码",
                    value: "1"
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    description: "排序方式",
                    value: "new",
                    enumOptions: [
                        {
                            title: "最新发布",
                            value: "new"
                        },
                        {
                            title: "最多播放",
                            value: "views"
                        },
                        {
                            title: "最高评分",
                            value: "rating"
                        }
                    ]
                }
            ]
        },
        {
            id: "searchUser",
            title: "​🌟 优选艺人",
            functionName: "getUserUploads",
            cacheDuration: 86400,
            params: [
                {
                    name: "username",
                    title: "艺人名称",
                    type: "enumeration",
                    description: "支持全部类型",
                    belongTo: {
                        paramName: "sort_by",
                        value: ["new", "views", "rating"],
                    },
                    enumOptions: [
                        { title: 'HongKongDoll', value: 'HongKongDoll' },
                        { title: 'Nana_taipei', value: 'Nana_taipei' },
                        { title: 'Sweetie Fox', value: 'sweetie-fox' },
                        { title: 'Diana Rider', value: 'diana-rider' },
                        { title: 'Sola Zola', value: 'solazola' },
                        { title: 'Candy Love', value: 'candy-love' },
                        { title: 'Anastangel', value: 'anastangel' },
                        { title: 'HottiesTwo', value: 'hottiestwo' },
                        { title: 'Shinaryen', value: 'shinaryen' },
                        { title: 'Mila Muse', value: 'milamuse' },
                        { title: 'Melody Marks', value: 'melody-marks' },
                        { title: 'Eva Elfie', value: 'eva-elfie' },
                        { title: '麻豆传媒', value: 'asiam' },
                        { title: '麻豆-LiRongRong', value: 'Li Rong Rong' },
                        { title: 'Cabbage Sweety', value: 'Cabbage Sweety' },
                        { title: 'Lindainlove', value: 'Lindainlove' },
                        { title: 'SweetieYico', value: 'SweetieYico' },
                        { title: 'june liu', value: 'june liu' },
                        { title: '77bandage', value: '77bandage' },
                        { title: 'youyou', value: 'youyou' },
                        { title: 'manachanx', value: 'manachanx' },
                        { title: 'k production film', value: 'k production film' },
                        { title: '798DS', value: '798DS' },
                        { title: 'aiwanxiongxiong', value: 'aiwanxiongxiong' },
                        { title: 'ano ano chan', value: 'ano ano chan' },
                        { title: 'bibi Fluffy', value: 'bibi Fluffy' },
                        { title: 'CandyKissVip', value: 'CandyKissVip' },
                        { title: 'Chinese Bunny', value: 'Chinese Bunny' },
                        { title: 'DemiFairyTW', value: 'DemiFairyTW' },
                        { title: 'Eve', value: 'Eve' },
                        { title: 'fortunecutie', value: 'fortunecutie' },
                        { title: 'LIs Evans', value: 'LIs Evans' },
                        { title: 'loliiiiipop99', value: 'loliiiiipop99' },
                        { title: 'Makissse', value: 'Makissse' },
                        { title: 'nan12138', value: 'nan12138' },
                        { title: 'Nuomibaby', value: 'nuomibaby' },
                        { title: 'papaxmama', value: 'papaxmama' },
                        { title: 'Qiobnxingcaiii', value: 'Qiobnxingcaiii' },
                        { title: 'SakuraCandy', value: 'SakuraCandy' },
                        { title: 'thelittlejuicer', value: 'thelittlejuicer' },
                        { title: 'TLMS_SVJ', value: 'TLMS_SVJ' },
                        { title: 'twtutu', value: 'twtutu' },
                        { title: 'Vita Won', value: 'Vita Won' },
                        { title: 'Yuqiao Chen', value: 'Yuqiao Chen' },
                        { title: 'comatozze', value: 'comatozze' },
                        { title: 'Mirari Model', value: 'mirari-model' }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    description: "排序方式",
                    value: "new",
                    enumOptions: [
                        {
                            title: "最新发布",
                            value: "new"
                        },
                        {
                            title: "最多播放",
                            value: "views"
                        },
                        {
                            title: "最高评分",
                            value: "rating"
                        }
                    ]
                },
                {
                    name: "logo",
                    title: "标识符",
                    type: "constant",
                    description: "区分功能",
                    value: "yx",
                    type: "constant"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    description: "页码",
                    value: "1"
                }
            ]
        },
        {
            id: "premiumArtists",
            title: "👠 搜索艺人",
            functionName: "getUserUploads",
            cacheDuration: 300,
            params: [
                {
                    name: "user_type",
                    title: "艺人类型",
                    type: "enumeration",
                    description: "选择艺人类型",
                    value: "model",
                    enumOptions: [
                        { title: "模特", value: "model" },
                        { title: "频道", value: "channels" },
                        { title: "明星", value: "pornstar" }
                    ]
                },
                {
                    name: "username",
                    title: "艺人名称",
                    type: "input",
                    description: "支持全部类型",
                    value: ""
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    description: "视频排序方式",
                    value: "new",
                    enumOptions: [
                        {
                            title: "最新发布",
                            value: "new"
                        },
                        {
                            title: "最多播放",
                            value: "views"
                        },
                        {
                            title: "最高评分",
                            value: "rating"
                        }
                    ]
                },
                {
                    name: "logo",
                    title: "标识符",
                    type: "constant",
                    description: "区分功能",
                    value: "ss",
                    type: "constant"
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    description: "艺人视频页码",
                    value: "1"
                }
            ]
        },
        {
            id: "recommended",
            title: "🎬 推荐视频",
            functionName: "getRecommendedVideos",
            cacheDuration: 86400,
            params: [
                {
                    name: "cookie",
                    title: "登录Cookie",
                    type: "input",
                    value: "",
                    description: "未填写情况下非个性化推荐，登录Pornhub推荐页获取"
                },
                {
                    name: "sort_by",
                    title: "推荐逻辑",
                    description: "默认最相关",
                    type: "enumeration",
                    value: "",
                    enumOptions: [
                        { title: "最相关", value: "" },
                        { title: "最新", value: "time" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    value: "1"
                }
            ]
        },
        {
            id: "languageVideos",
            title: "​🌐 语言筛选",
            functionName: "getVideosByLanguage",
            cacheDuration: 86400,
            params: [
                {
                    name: "language",
                    title: "视频语言",
                    type: "enumeration",
                    value: "chinese",
                    description: "默认中文",
                    enumOptions: [
                        { title: "中文", value: "chinese" },
                        { title: "日语", value: "japanese" },
                        { title: "俄语", value: "russian" },
                        { title: "德语", value: "german" },
                        { title: "法语", value: "french" },
                        { title: "西班牙语", value: "spanish" },
                        { title: "荷兰语", value: "dutch" },
                        { title: "波兰语", value: "polish" },
                        { title: "捷克语", value: "czech" },
                        { title: "葡萄牙语", value: "portuguese" },

                    ]
                },
                {
                    name: "p",
                    title: "制作平台类型",
                    type: "enumeration",
                    description: "默认全部",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "专业", value: "professional" },
                        { title: "自制", value: "homemade" }
                    ]
                },
                {
                    name: "hd",
                    title: "分辨率",
                    type: "enumeration",
                    description: "全部",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "仅高清", value: "1" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序方式",
                    type: "enumeration",
                    description: "最新精选",
                    value: "",
                    enumOptions: [
                        { title: "最新精选", value: "" },
                        { title: "热播", value: "ht" },
                        { title: "最多观看", value: "mv" },
                        { title: "最高评分", value: "tr" },
                        { title: "最新视频", value: "cm" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    value: "1"
                }
            ]
        },
        {
            id: "hotVideos",
            title: "🔥 热播视频",
            functionName: "getVideos",
            cacheDuration: 600,
            params: [
                {
                    name: "pageType",
                    title: "区分页面类型",
                    description: "区分页面类型",
                    value: "ht",
                    type: "constant"
                },
                {
                    name: "p",
                    title: "出品类型",
                    type: "enumeration",
                    description: "全部",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "专业", value: "professional" },
                        { title: "自制", value: "homemade" }
                    ]
                },
                {
                    name: "hd",
                    title: "分辨率",
                    description: "默认全部",
                    type: "enumeration",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "仅高清", value: "1" }
                    ]
                },
                {
                    name: "c",
                    title: "视频类型",
                    type: "enumeration",
                    description: "筛选视频类型",
                    value: "",
                    enumOptions: [{ "title": "全部", "value": "" }, { "title": "已认证素人", "value": "138" }, { "title": "已认证模特", "value": "139" }, { "title": "亚洲人", "value": "1" }, { "title": "已认证情侣", "value": "482" }, { "title": "60帧", "value": "105" }, { "title": "大学", "value": "79" }, { "title": "18-25岁", "value": "teen" }, { "title": "韩国人", "value": "103" }, { "title": "日本人", "value": "111" }, { "title": "校园", "value": "88" }, { "title": "欧洲人", "value": "55" }, { "title": "英国人", "value": "96" }, { "title": "法国人", "value": "94" }, { "title": "浪漫", "value": "522" }, { "title": "女性自慰", "value": "492" }, { "title": "女性高潮", "value": "502" }, { "title": "3P", "value": "65" }, { "title": "Cosplay", "value": "241" }, { "title": "Gaming", "value": "881" }, { "title": "Podcast", "value": "891" }, { "title": "上班时观赏", "value": "221" }, { "title": "乱交群欢", "value": "2" }, { "title": "交互式", "value": "108" }, { "title": "佩戴式阳具", "value": "542" }, { "title": "俄国人", "value": "99" }, { "title": "公众野战", "value": "24" }, { "title": "内射中出", "value": "15" }, { "title": "内嵌字幕", "value": "732" }, { "title": "劲爆重口味", "value": "21" }, { "title": "卡通", "value": "86" }, { "title": "印度人", "value": "101" }, { "title": "双性恋男", "value": "76" }, { "title": "双龙入洞", "value": "72" }, { "title": "口交", "value": "13" }, { "title": "古典派", "value": "43" }, { "title": "合集", "value": "57" }, { "title": "名人", "value": "12" }, { "title": "大号美女", "value": "6" }, { "title": "女同", "value": "27" }, { "title": "娇妻偷吃", "value": "242" }, { "title": "射精", "value": "16" }, { "title": "巨乳", "value": "8" }, { "title": "巨屌", "value": "7" }, { "title": "巴西人", "value": "102" }, { "title": "德国人", "value": "95" }, { "title": "性玩具", "value": "23" }, { "title": "恋物癖", "value": "18" }, { "title": "恋足", "value": "93" }, { "title": "意大利人", "value": "97" }, { "title": "手交", "value": "20" }, { "title": "手淫", "value": "22" }, { "title": "抽烟", "value": "91" }, { "title": "拉丁裔美女", "value": "26" }, { "title": "拳交", "value": "19" }, { "title": "指交", "value": "592" }, { "title": "按摩", "value": "78" }, { "title": "捆绑", "value": "10" }, { "title": "捷克人", "value": "100" }, { "title": "搞笑", "value": "32" }, { "title": "撒尿", "value": "211" }, { "title": "深发女", "value": "11" }, { "title": "滑稽模仿", "value": "201" }, { "title": "潮吹", "value": "69" }, { "title": "火辣保姆", "value": "89" }, { "title": "熟女", "value": "28" }, { "title": "爆菊", "value": "35" }, { "title": "片场直击", "value": "141" }, { "title": "独家", "value": "115" }, { "title": "男同", "value": "63" }, { "title": "男性自慰", "value": "92" }, { "title": "真人实拍", "value": "31" }, { "title": "第一视角", "value": "41" }, { "title": "粗暴性爱", "value": "67" }, { "title": "素人", "value": "3" }, { "title": "红毛", "value": "42" }, { "title": "纹身女", "value": "562" }, { "title": "继家庭幻想", "value": "444" }, { "title": "老少欢", "value": "181" }, { "title": "聚会", "value": "53" }, { "title": "肌肉男", "value": "512" }, { "title": "肥臀", "value": "4" }, { "title": "脱衣舞", "value": "33" }, { "title": "自述视频", "value": "231" }, { "title": "舔屄", "value": "131" }, { "title": "色情日漫", "value": "36" }, { "title": "色情明星", "value": "30" }, { "title": "视频激情", "value": "61" }, { "title": "角色扮演", "value": "81" }, { "title": "试镜", "value": "90" }, { "title": "贫乳", "value": "59" }, { "title": "跨性别", "value": "83" }, { "title": "跨种族", "value": "25" }, { "title": "轮交", "value": "80" }, { "title": "辣妈", "value": "29" }, { "title": "金发女", "value": "9" }, { "title": "阿拉伯人", "value": "98" }, { "title": "集体颜射", "value": "14" }, { "title": "音乐", "value": "121" }, { "title": "风情少女", "value": "5" }, { "title": "高清色情片", "value": "38" }, { "title": "黑人女", "value": "17" }
                    ]
                },
                {
                    name: "country",
                    title: "国家/地区",
                    type: "enumeration",
                    description: "选择国家或地区",
                    value: "world",
                    enumOptions: [{ title: "全球", value: "world" }, { title: "日本", value: "jp" }, { title: "韩国", value: "kr" }, { title: "美国", value: "us" }, { title: "英国", value: "gb" }, { title: "法国", value: "fr" }, { title: "德国", value: "de" }, { title: "澳大利亚", value: "au" }, { title: "俄罗斯", value: "ru" }, { title: "塞尔维亚", value: "rs" }, { title: "丹麦", value: "dk" }, { title: "阿根廷", value: "ar" }, { title: "奥地利", value: "at" }, { title: "比利时", value: "be" }, { title: "巴西", value: "br" }, { title: "保加利亚", value: "bg" }, { title: "加拿大", value: "ca" }, { title: "智利", value: "cl" }, { title: "克罗地亚", value: "hr" }, { title: "捷克", value: "cz" }, { title: "埃及", value: "eg" }, { title: "芬兰", value: "fi" }, { title: "希腊", value: "gr" }, { title: "匈牙利", value: "hu" }, { title: "印度", value: "in" }, { title: "爱尔兰", value: "ie" }, { title: "以色列", value: "il" }, { title: "意大利", value: "it" }, { title: "墨西哥", value: "mx" }, { title: "摩洛哥", value: "ma" }, { title: "荷兰", value: "nl" }, { title: "新西兰", value: "nz" }, { title: "挪威", value: "no" }, { title: "巴基斯坦", value: "pk" }, { title: "波兰", value: "pl" }, { title: "葡萄牙", value: "pt" }, { title: "罗马尼亚", value: "ro" }, { title: "斯洛伐克", value: "sk" }, { title: "西班牙", value: "es" }, { title: "瑞典", value: "se" }, { title: "瑞士", value: "ch" }, { title: "乌克兰", value: "ua" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    description: "热门视频页码",
                    value: "1"
                }
            ]
        },
        {
            id: "topViews",
            title: "👀 最多观看",
            functionName: "getVideos",
            cacheDuration: 600,
            params: [
                {
                    name: "pageType",
                    title: "区分页面类型",
                    description: "区分页面类型",
                    value: "mv",
                    type: "constant"
                },
                {
                    name: "p",
                    title: "出品类型",
                    type: "enumeration",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "专业", value: "professional" },
                        { title: "自制", value: "homemade" }
                    ]
                },
                {
                    name: "hd",
                    title: "分辨率",
                    description: "默认全部",
                    type: "enumeration",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "仅高清", value: "1" }
                    ]
                },
                {
                    name: "c",
                    title: "视频类型",
                    type: "enumeration",
                    description: "筛选视频类型",
                    value: "",
                    enumOptions: [{ "title": "全部", "value": "" }, { "title": "已认证素人", "value": "138" }, { "title": "已认证模特", "value": "139" }, { "title": "亚洲人", "value": "1" }, { "title": "已认证情侣", "value": "482" }, { "title": "60帧", "value": "105" }, { "title": "大学", "value": "79" }, { "title": "18-25岁", "value": "teen" }, { "title": "韩国人", "value": "103" }, { "title": "日本人", "value": "111" }, { "title": "校园", "value": "88" }, { "title": "欧洲人", "value": "55" }, { "title": "英国人", "value": "96" }, { "title": "法国人", "value": "94" }, { "title": "浪漫", "value": "522" }, { "title": "女性自慰", "value": "492" }, { "title": "女性高潮", "value": "502" }, { "title": "3P", "value": "65" }, { "title": "Cosplay", "value": "241" }, { "title": "Gaming", "value": "881" }, { "title": "Podcast", "value": "891" }, { "title": "上班时观赏", "value": "221" }, { "title": "乱交群欢", "value": "2" }, { "title": "交互式", "value": "108" }, { "title": "佩戴式阳具", "value": "542" }, { "title": "俄国人", "value": "99" }, { "title": "公众野战", "value": "24" }, { "title": "内射中出", "value": "15" }, { "title": "内嵌字幕", "value": "732" }, { "title": "劲爆重口味", "value": "21" }, { "title": "卡通", "value": "86" }, { "title": "印度人", "value": "101" }, { "title": "双性恋男", "value": "76" }, { "title": "双龙入洞", "value": "72" }, { "title": "口交", "value": "13" }, { "title": "古典派", "value": "43" }, { "title": "合集", "value": "57" }, { "title": "名人", "value": "12" }, { "title": "大号美女", "value": "6" }, { "title": "女同", "value": "27" }, { "title": "娇妻偷吃", "value": "242" }, { "title": "射精", "value": "16" }, { "title": "巨乳", "value": "8" }, { "title": "巨屌", "value": "7" }, { "title": "巴西人", "value": "102" }, { "title": "德国人", "value": "95" }, { "title": "性玩具", "value": "23" }, { "title": "恋物癖", "value": "18" }, { "title": "恋足", "value": "93" }, { "title": "意大利人", "value": "97" }, { "title": "手交", "value": "20" }, { "title": "手淫", "value": "22" }, { "title": "抽烟", "value": "91" }, { "title": "拉丁裔美女", "value": "26" }, { "title": "拳交", "value": "19" }, { "title": "指交", "value": "592" }, { "title": "按摩", "value": "78" }, { "title": "捆绑", "value": "10" }, { "title": "捷克人", "value": "100" }, { "title": "搞笑", "value": "32" }, { "title": "撒尿", "value": "211" }, { "title": "深发女", "value": "11" }, { "title": "滑稽模仿", "value": "201" }, { "title": "潮吹", "value": "69" }, { "title": "火辣保姆", "value": "89" }, { "title": "熟女", "value": "28" }, { "title": "爆菊", "value": "35" }, { "title": "片场直击", "value": "141" }, { "title": "独家", "value": "115" }, { "title": "男同", "value": "63" }, { "title": "男性自慰", "value": "92" }, { "title": "真人实拍", "value": "31" }, { "title": "第一视角", "value": "41" }, { "title": "粗暴性爱", "value": "67" }, { "title": "素人", "value": "3" }, { "title": "红毛", "value": "42" }, { "title": "纹身女", "value": "562" }, { "title": "继家庭幻想", "value": "444" }, { "title": "老少欢", "value": "181" }, { "title": "聚会", "value": "53" }, { "title": "肌肉男", "value": "512" }, { "title": "肥臀", "value": "4" }, { "title": "脱衣舞", "value": "33" }, { "title": "自述视频", "value": "231" }, { "title": "舔屄", "value": "131" }, { "title": "色情日漫", "value": "36" }, { "title": "色情明星", "value": "30" }, { "title": "视频激情", "value": "61" }, { "title": "角色扮演", "value": "81" }, { "title": "试镜", "value": "90" }, { "title": "贫乳", "value": "59" }, { "title": "跨性别", "value": "83" }, { "title": "跨种族", "value": "25" }, { "title": "轮交", "value": "80" }, { "title": "辣妈", "value": "29" }, { "title": "金发女", "value": "9" }, { "title": "阿拉伯人", "value": "98" }, { "title": "集体颜射", "value": "14" }, { "title": "音乐", "value": "121" }, { "title": "风情少女", "value": "5" }, { "title": "高清色情片", "value": "38" }, { "title": "黑人女", "value": "17" }
                    ]
                },
                {
                    name: "sort_by",
                    title: "时间范围",
                    type: "enumeration",
                    description: "选择统计时间范围",
                    value: "", // 默认值为空，对应每周统计
                    enumOptions: [
                        { title: "每周", value: "" },
                        { title: "每天", value: "t" },
                        { title: "每月", value: "m" },
                        { title: "每年", value: "y" },
                        { title: "迄今为止", value: "a" }
                    ]
                },
                {
                    name: "country",
                    title: "国家/地区",
                    type: "enumeration",
                    description: "选择国家或地区",
                    value: "world",
                    enumOptions: [{ title: "全球", value: "world" }, { title: "日本", value: "jp" }, { title: "韩国", value: "kr" }, { title: "美国", value: "us" }, { title: "英国", value: "gb" }, { title: "法国", value: "fr" }, { title: "德国", value: "de" }, { title: "澳大利亚", value: "au" }, { title: "俄罗斯", value: "ru" }, { title: "塞尔维亚", value: "rs" }, { title: "丹麦", value: "dk" }, { title: "阿根廷", value: "ar" }, { title: "奥地利", value: "at" }, { title: "比利时", value: "be" }, { title: "巴西", value: "br" }, { title: "保加利亚", value: "bg" }, { title: "加拿大", value: "ca" }, { title: "智利", value: "cl" }, { title: "克罗地亚", value: "hr" }, { title: "捷克", value: "cz" }, { title: "埃及", value: "eg" }, { title: "芬兰", value: "fi" }, { title: "希腊", value: "gr" }, { title: "匈牙利", value: "hu" }, { title: "印度", value: "in" }, { title: "爱尔兰", value: "ie" }, { title: "以色列", value: "il" }, { title: "意大利", value: "it" }, { title: "墨西哥", value: "mx" }, { title: "摩洛哥", value: "ma" }, { title: "荷兰", value: "nl" }, { title: "新西兰", value: "nz" }, { title: "挪威", value: "no" }, { title: "巴基斯坦", value: "pk" }, { title: "波兰", value: "pl" }, { title: "葡萄牙", value: "pt" }, { title: "罗马尼亚", value: "ro" }, { title: "斯洛伐克", value: "sk" }, { title: "西班牙", value: "es" }, { title: "瑞典", value: "se" }, { title: "瑞士", value: "ch" }, { title: "乌克兰", value: "ua" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    description: "热门视频页码",
                    value: "1"
                }
            ]
        },
        {
            id: "maxRating",
            title: "​🏆 最高评分",
            functionName: "getVideos", // 使用相同的getVideos函数
            cacheDuration: 600,
            params: [
                {
                    name: "pageType",
                    title: "区分页面类型",
                    description: "区分页面类型",
                    value: "tr", // 对应最高评分页面
                    type: "constant"
                },
                {
                    name: "p",
                    title: "出品类型",
                    type: "enumeration",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "专业", value: "professional" },
                        { title: "自制", value: "homemade" }
                    ]
                },
                {
                    name: "hd",
                    title: "分辨率",
                    description: "默认全部",
                    type: "enumeration",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "仅高清", value: "1" }
                    ]
                },
                {
                    name: "c",
                    title: "视频类型",
                    type: "enumeration",
                    description: "筛选视频类型",
                    value: "",
                    enumOptions: [{ "title": "全部", "value": "" }, { "title": "已认证素人", "value": "138" }, { "title": "已认证模特", "value": "139" }, { "title": "亚洲人", "value": "1" }, { "title": "已认证情侣", "value": "482" }, { "title": "60帧", "value": "105" }, { "title": "大学", "value": "79" }, { "title": "18-25岁", "value": "teen" }, { "title": "韩国人", "value": "103" }, { "title": "日本人", "value": "111" }, { "title": "校园", "value": "88" }, { "title": "欧洲人", "value": "55" }, { "title": "英国人", "value": "96" }, { "title": "法国人", "value": "94" }, { "title": "浪漫", "value": "522" }, { "title": "女性自慰", "value": "492" }, { "title": "女性高潮", "value": "502" }, { "title": "3P", "value": "65" }, { "title": "Cosplay", "value": "241" }, { "title": "Gaming", "value": "881" }, { "title": "Podcast", "value": "891" }, { "title": "上班时观赏", "value": "221" }, { "title": "乱交群欢", "value": "2" }, { "title": "交互式", "value": "108" }, { "title": "佩戴式阳具", "value": "542" }, { "title": "俄国人", "value": "99" }, { "title": "公众野战", "value": "24" }, { "title": "内射中出", "value": "15" }, { "title": "内嵌字幕", "value": "732" }, { "title": "劲爆重口味", "value": "21" }, { "title": "卡通", "value": "86" }, { "title": "印度人", "value": "101" }, { "title": "双性恋男", "value": "76" }, { "title": "双龙入洞", "value": "72" }, { "title": "口交", "value": "13" }, { "title": "古典派", "value": "43" }, { "title": "合集", "value": "57" }, { "title": "名人", "value": "12" }, { "title": "大号美女", "value": "6" }, { "title": "女同", "value": "27" }, { "title": "娇妻偷吃", "value": "242" }, { "title": "射精", "value": "16" }, { "title": "巨乳", "value": "8" }, { "title": "巨屌", "value": "7" }, { "title": "巴西人", "value": "102" }, { "title": "德国人", "value": "95" }, { "title": "性玩具", "value": "23" }, { "title": "恋物癖", "value": "18" }, { "title": "恋足", "value": "93" }, { "title": "意大利人", "value": "97" }, { "title": "手交", "value": "20" }, { "title": "手淫", "value": "22" }, { "title": "抽烟", "value": "91" }, { "title": "拉丁裔美女", "value": "26" }, { "title": "拳交", "value": "19" }, { "title": "指交", "value": "592" }, { "title": "按摩", "value": "78" }, { "title": "捆绑", "value": "10" }, { "title": "捷克人", "value": "100" }, { "title": "搞笑", "value": "32" }, { "title": "撒尿", "value": "211" }, { "title": "深发女", "value": "11" }, { "title": "滑稽模仿", "value": "201" }, { "title": "潮吹", "value": "69" }, { "title": "火辣保姆", "value": "89" }, { "title": "熟女", "value": "28" }, { "title": "爆菊", "value": "35" }, { "title": "片场直击", "value": "141" }, { "title": "独家", "value": "115" }, { "title": "男同", "value": "63" }, { "title": "男性自慰", "value": "92" }, { "title": "真人实拍", "value": "31" }, { "title": "第一视角", "value": "41" }, { "title": "粗暴性爱", "value": "67" }, { "title": "素人", "value": "3" }, { "title": "红毛", "value": "42" }, { "title": "纹身女", "value": "562" }, { "title": "继家庭幻想", "value": "444" }, { "title": "老少欢", "value": "181" }, { "title": "聚会", "value": "53" }, { "title": "肌肉男", "value": "512" }, { "title": "肥臀", "value": "4" }, { "title": "脱衣舞", "value": "33" }, { "title": "自述视频", "value": "231" }, { "title": "舔屄", "value": "131" }, { "title": "色情日漫", "value": "36" }, { "title": "色情明星", "value": "30" }, { "title": "视频激情", "value": "61" }, { "title": "角色扮演", "value": "81" }, { "title": "试镜", "value": "90" }, { "title": "贫乳", "value": "59" }, { "title": "跨性别", "value": "83" }, { "title": "跨种族", "value": "25" }, { "title": "轮交", "value": "80" }, { "title": "辣妈", "value": "29" }, { "title": "金发女", "value": "9" }, { "title": "阿拉伯人", "value": "98" }, { "title": "集体颜射", "value": "14" }, { "title": "音乐", "value": "121" }, { "title": "风情少女", "value": "5" }, { "title": "高清色情片", "value": "38" }, { "title": "黑人女", "value": "17" }
                    ]

                },
                {
                    name: "sort_by",
                    title: "时间范围",
                    type: "enumeration",
                    description: "选择统计时间范围",
                    value: "", // 默认值为空，对应每月统计
                    enumOptions: [
                        { title: "每月", value: "" },
                        { title: "每天", value: "t" },
                        { title: "每周", value: "w" },
                        { title: "每年", value: "y" },
                        { title: "迄今为止", value: "a" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    description: "最高评分视频页码",
                    value: "1"
                }
            ]
        },
        {
            id: "latestFeatured",
            title: "💎 最新精选",
            functionName: "getVideos",
            cacheDuration: 600,
            params: [
                {
                    name: "c",
                    title: "视频类型",
                    type: "enumeration",
                    value: "",
                    enumOptions: [{ "title": "全部", "value": "" }, { "title": "已认证素人", "value": "138" }, { "title": "已认证模特", "value": "139" }, { "title": "亚洲人", "value": "1" }, { "title": "已认证情侣", "value": "482" }, { "title": "60帧", "value": "105" }, { "title": "大学", "value": "79" }, { "title": "18-25岁", "value": "teen" }, { "title": "韩国人", "value": "103" }, { "title": "日本人", "value": "111" }, { "title": "校园", "value": "88" }, { "title": "欧洲人", "value": "55" }, { "title": "英国人", "value": "96" }, { "title": "法国人", "value": "94" }, { "title": "浪漫", "value": "522" }, { "title": "女性自慰", "value": "492" }, { "title": "女性高潮", "value": "502" }, { "title": "3P", "value": "65" }, { "title": "Cosplay", "value": "241" }, { "title": "Gaming", "value": "881" }, { "title": "Podcast", "value": "891" }, { "title": "上班时观赏", "value": "221" }, { "title": "乱交群欢", "value": "2" }, { "title": "交互式", "value": "108" }, { "title": "佩戴式阳具", "value": "542" }, { "title": "俄国人", "value": "99" }, { "title": "公众野战", "value": "24" }, { "title": "内射中出", "value": "15" }, { "title": "内嵌字幕", "value": "732" }, { "title": "劲爆重口味", "value": "21" }, { "title": "卡通", "value": "86" }, { "title": "印度人", "value": "101" }, { "title": "双性恋男", "value": "76" }, { "title": "双龙入洞", "value": "72" }, { "title": "口交", "value": "13" }, { "title": "古典派", "value": "43" }, { "title": "合集", "value": "57" }, { "title": "名人", "value": "12" }, { "title": "大号美女", "value": "6" }, { "title": "女同", "value": "27" }, { "title": "娇妻偷吃", "value": "242" }, { "title": "射精", "value": "16" }, { "title": "巨乳", "value": "8" }, { "title": "巨屌", "value": "7" }, { "title": "巴西人", "value": "102" }, { "title": "德国人", "value": "95" }, { "title": "性玩具", "value": "23" }, { "title": "恋物癖", "value": "18" }, { "title": "恋足", "value": "93" }, { "title": "意大利人", "value": "97" }, { "title": "手交", "value": "20" }, { "title": "手淫", "value": "22" }, { "title": "抽烟", "value": "91" }, { "title": "拉丁裔美女", "value": "26" }, { "title": "拳交", "value": "19" }, { "title": "指交", "value": "592" }, { "title": "按摩", "value": "78" }, { "title": "捆绑", "value": "10" }, { "title": "捷克人", "value": "100" }, { "title": "搞笑", "value": "32" }, { "title": "撒尿", "value": "211" }, { "title": "深发女", "value": "11" }, { "title": "滑稽模仿", "value": "201" }, { "title": "潮吹", "value": "69" }, { "title": "火辣保姆", "value": "89" }, { "title": "熟女", "value": "28" }, { "title": "爆菊", "value": "35" }, { "title": "片场直击", "value": "141" }, { "title": "独家", "value": "115" }, { "title": "男同", "value": "63" }, { "title": "男性自慰", "value": "92" }, { "title": "真人实拍", "value": "31" }, { "title": "第一视角", "value": "41" }, { "title": "粗暴性爱", "value": "67" }, { "title": "素人", "value": "3" }, { "title": "红毛", "value": "42" }, { "title": "纹身女", "value": "562" }, { "title": "继家庭幻想", "value": "444" }, { "title": "老少欢", "value": "181" }, { "title": "聚会", "value": "53" }, { "title": "肌肉男", "value": "512" }, { "title": "肥臀", "value": "4" }, { "title": "脱衣舞", "value": "33" }, { "title": "自述视频", "value": "231" }, { "title": "舔屄", "value": "131" }, { "title": "色情日漫", "value": "36" }, { "title": "色情明星", "value": "30" }, { "title": "视频激情", "value": "61" }, { "title": "角色扮演", "value": "81" }, { "title": "试镜", "value": "90" }, { "title": "贫乳", "value": "59" }, { "title": "跨性别", "value": "83" }, { "title": "跨种族", "value": "25" }, { "title": "轮交", "value": "80" }, { "title": "辣妈", "value": "29" }, { "title": "金发女", "value": "9" }, { "title": "阿拉伯人", "value": "98" }, { "title": "集体颜射", "value": "14" }, { "title": "音乐", "value": "121" }, { "title": "风情少女", "value": "5" }, { "title": "高清色情片", "value": "38" }, { "title": "黑人女", "value": "17" }
                    ]
                },
                {
                    name: "p",
                    title: "出品类型",
                    type: "enumeration",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "专业", value: "professional" },
                        { title: "自制", value: "homemade" }
                    ]
                },
                {
                    name: "hd",
                    title: "分辨率",
                    type: "enumeration",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "仅高清", value: "1" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    value: "1"
                }
            ]
        },
        {
            id: "newVideos",
            title: "​🆕 最新视频",
            functionName: "getVideos",
            cacheDuration: 600,
            params: [
                {
                    name: "pageType",
                    title: "页面类型",
                    value: "cm",
                    type: "constant"
                },
                {
                    name: "p",
                    title: "出品类型",
                    type: "enumeration",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "专业", value: "professional" },
                        { title: "自制", value: "homemade" }
                    ]
                },
                {
                    name: "hd",
                    title: "分辨率",
                    type: "enumeration",
                    value: "",
                    enumOptions: [
                        { title: "全部", value: "" },
                        { title: "仅高清", value: "1" }
                    ]
                },
                {
                    name: "c",
                    title: "视频类型",
                    type: "enumeration",
                    value: "",
                    enumOptions: [{ "title": "全部", "value": "" }, { "title": "已认证素人", "value": "138" }, { "title": "已认证模特", "value": "139" }, { "title": "亚洲人", "value": "1" }, { "title": "已认证情侣", "value": "482" }, { "title": "60帧", "value": "105" }, { "title": "大学", "value": "79" }, { "title": "18-25岁", "value": "teen" }, { "title": "韩国人", "value": "103" }, { "title": "日本人", "value": "111" }, { "title": "校园", "value": "88" }, { "title": "欧洲人", "value": "55" }, { "title": "英国人", "value": "96" }, { "title": "法国人", "value": "94" }, { "title": "浪漫", "value": "522" }, { "title": "女性自慰", "value": "492" }, { "title": "女性高潮", "value": "502" }, { "title": "3P", "value": "65" }, { "title": "Cosplay", "value": "241" }, { "title": "Gaming", "value": "881" }, { "title": "Podcast", "value": "891" }, { "title": "上班时观赏", "value": "221" }, { "title": "乱交群欢", "value": "2" }, { "title": "交互式", "value": "108" }, { "title": "佩戴式阳具", "value": "542" }, { "title": "俄国人", "value": "99" }, { "title": "公众野战", "value": "24" }, { "title": "内射中出", "value": "15" }, { "title": "内嵌字幕", "value": "732" }, { "title": "劲爆重口味", "value": "21" }, { "title": "卡通", "value": "86" }, { "title": "印度人", "value": "101" }, { "title": "双性恋男", "value": "76" }, { "title": "双龙入洞", "value": "72" }, { "title": "口交", "value": "13" }, { "title": "古典派", "value": "43" }, { "title": "合集", "value": "57" }, { "title": "名人", "value": "12" }, { "title": "大号美女", "value": "6" }, { "title": "女同", "value": "27" }, { "title": "娇妻偷吃", "value": "242" }, { "title": "射精", "value": "16" }, { "title": "巨乳", "value": "8" }, { "title": "巨屌", "value": "7" }, { "title": "巴西人", "value": "102" }, { "title": "德国人", "value": "95" }, { "title": "性玩具", "value": "23" }, { "title": "恋物癖", "value": "18" }, { "title": "恋足", "value": "93" }, { "title": "意大利人", "value": "97" }, { "title": "手交", "value": "20" }, { "title": "手淫", "value": "22" }, { "title": "抽烟", "value": "91" }, { "title": "拉丁裔美女", "value": "26" }, { "title": "拳交", "value": "19" }, { "title": "指交", "value": "592" }, { "title": "按摩", "value": "78" }, { "title": "捆绑", "value": "10" }, { "title": "捷克人", "value": "100" }, { "title": "搞笑", "value": "32" }, { "title": "撒尿", "value": "211" }, { "title": "深发女", "value": "11" }, { "title": "滑稽模仿", "value": "201" }, { "title": "潮吹", "value": "69" }, { "title": "火辣保姆", "value": "89" }, { "title": "熟女", "value": "28" }, { "title": "爆菊", "value": "35" }, { "title": "片场直击", "value": "141" }, { "title": "独家", "value": "115" }, { "title": "男同", "value": "63" }, { "title": "男性自慰", "value": "92" }, { "title": "真人实拍", "value": "31" }, { "title": "第一视角", "value": "41" }, { "title": "粗暴性爱", "value": "67" }, { "title": "素人", "value": "3" }, { "title": "红毛", "value": "42" }, { "title": "纹身女", "value": "562" }, { "title": "继家庭幻想", "value": "444" }, { "title": "老少欢", "value": "181" }, { "title": "聚会", "value": "53" }, { "title": "肌肉男", "value": "512" }, { "title": "肥臀", "value": "4" }, { "title": "脱衣舞", "value": "33" }, { "title": "自述视频", "value": "231" }, { "title": "舔屄", "value": "131" }, { "title": "色情日漫", "value": "36" }, { "title": "色情明星", "value": "30" }, { "title": "视频激情", "value": "61" }, { "title": "角色扮演", "value": "81" }, { "title": "试镜", "value": "90" }, { "title": "贫乳", "value": "59" }, { "title": "跨性别", "value": "83" }, { "title": "跨种族", "value": "25" }, { "title": "轮交", "value": "80" }, { "title": "辣妈", "value": "29" }, { "title": "金发女", "value": "9" }, { "title": "阿拉伯人", "value": "98" }, { "title": "集体颜射", "value": "14" }, { "title": "音乐", "value": "121" }, { "title": "风情少女", "value": "5" }, { "title": "高清色情片", "value": "38" }, { "title": "黑人女", "value": "17" }
                    ]
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page",
                    value: "1"
                }
            ]
        }

    ]
};

// 通用工具函数 - 减少代码冗余
const PH_BASE_URL = "https://cn.pornhub.com";
const COMMON_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/137.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
};
const DETAIL_HEADERS = {
    ...COMMON_HEADERS,
    "Referer": PH_BASE_URL + "/"
};
const DETAIL_PAGE_HEADERS = {
    ...COMMON_HEADERS,
    "Referer": PH_BASE_URL + "/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/137.0.0.0 Safari/537.36"
};

function createUrl(path) {
    if (!path) return PH_BASE_URL;
    return /^https?:\/\//i.test(path) ? path : PH_BASE_URL + (path.startsWith("/") ? path : "/" + path);
}

async function requestHtml(url, headers) {
    const response = await Widget.http.get(url, { headers: headers || COMMON_HEADERS });
    if (!response || !response.data) {
        throw new Error("页面加载失败");
    }
    return response.data;
}

function createDefaultHeaders(extraHeaders) {
    return Object.assign({}, COMMON_HEADERS, extraHeaders || {});
}

function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
}

function buildUrl(path, query) {
    const base = createUrl(path);
    if (!query) return base;
    const queryString = Object.keys(query)
        .filter(function (key) {
            return query[key] !== undefined && query[key] !== null && query[key] !== "";
        })
        .map(function (key) {
            return encodeURIComponent(key) + "=" + encodeURIComponent(String(query[key]));
        })
        .join("&");
    return queryString ? base + (base.indexOf("?") >= 0 ? "&" : "?") + queryString : base;
}

function buildSearchQuery(searchQuery) {
    return normalizeText(searchQuery).replace(/[\s\-]+/g, ' ');
}

function buildSortQuery(sortBy) {
    if (sortBy === 'new') return 'mr';
    if (sortBy === 'views') return 'mv';
    if (sortBy === 'rating') return 'tr';
    return '';
}

function createPageHeaders(referer) {
    return createDefaultHeaders({
        Referer: referer || PH_BASE_URL + "/"
    });
}

function getFallbackVideoItems($) {
    return $("a, li, div, article").filter(function () {
        const $node = $(this);
        return !!(
            /view_video\.php\?viewkey=/.test($node.attr('href') || '') ||
            $node.attr('data-video-vkey') ||
            $node.attr('data-id') ||
            $node.find("a[href*='viewkey=']").length
        );
    });
}

function getBestVideoItems($, selectors, label) {
    let $items = $();
    for (let i = 0; i < selectors.length; i++) {
        const $found = $(selectors[i]);
        if ($found.length) {
            $items = $found;
            break;
        }
    }
    if (!$items.length) {
        $items = getFallbackVideoItems($);
    }
    return $items;
}

async function requestJsonLikeHtml(url, headers) {
    return await requestHtml(url, createDefaultHeaders(headers));
}

// 将时间格式（如"7:34"）转换为秒数
function convertDurationToSeconds(duration) {
    if (!duration) return 0;
    var parts = duration.split(':').map(function (part) { return parseInt(part, 10); });
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    if (parts.length === 1 && !isNaN(parts[0])) return parts[0];
    return 0;
}

// 清理URL中的换行符和首尾空格
function trimUrl(url) {
    return url ? url.replace(/\r?\n|\r/g, "").trim() : "";
}

// 简单封面缓存：详情页拿到后回填列表页
const COVER_CACHE = {};
const DETAIL_COVER_CACHE = {};
const DETAIL_COVER_FAILED = {};
const DETAIL_COVER_FAIL_TTL = 10 * 60 * 1000;
const LIST_COVER_HYDRATE_LIMIT = 5;
const LIST_COVER_HYDRATE_CONCURRENCY = 3;

// 通用视频节点选择器
const VIDEO_ITEM_SELECTOR = [
    "a[href*='view_video.php?viewkey=']",
    "a[href*='/view_video.php?viewkey=']",
    "li.pcVideoListItem",
    "li.videoblock",
    "div.pcVideoListItem",
    "div.videoblock",
    "div.videoBox",
    "li[data-video-vkey]",
    "div[data-video-vkey]",
    "article[data-video-vkey]"
].join(", ");

function findVideoItems($) {
    return $(VIDEO_ITEM_SELECTOR);
}

function extractBackgroundImageUrl($element) {
    const style = $element.attr("style") || "";
    const match = style.match(/background-image\s*:\s*url\((['"]?)(.*?)\1\)/i);
    return match && match[2] ? trimUrl(match[2]) : "";
}

function normalizeMediaUrl(url) {
    url = trimUrl(url || "");
    if (!url) return "";
    if (url.startsWith("//")) return "https:" + url;
    return url;
}

function pickFirstValidUrl(values) {
    for (let i = 0; i < values.length; i++) {
        const url = normalizeMediaUrl(values[i]);
        if (url && !/^data:/i.test(url) && !/^blob:/i.test(url) && !/^(?:about:blank|javascript:|#)/i.test(url)) {
            return url;
        }
    }
    return "";
}

function looksLikePlaceholderUrl(url) {
    url = normalizeMediaUrl(url);
    if (!url) return true;
    return /(?:placeholder|spacer|loading|blank|default|sprite|gif;base64|data:image\/gif)/i.test(url) || url.length < 12;
}

function isValidCoverUrl(url) {
    url = normalizeMediaUrl(url);
    if (!url) return false;
    if (looksLikePlaceholderUrl(url)) return false;
    if (/^(?:javascript:|about:blank|#)/i.test(url)) return false;
    return true;
}

function splitSrcset(value) {
    return trimUrl(value || "")
        .split(",")
        .map(function (item) { return item.trim().split(/\s+/)[0]; })
        .filter(Boolean);
}

function pickBestFromSrcset(value) {
    const items = splitSrcset(value);
    return items.length ? items[items.length - 1] : "";
}

function extractScriptMediaUrl($, $element) {
    const scriptText = ($element.closest("html").find("script").map(function () {
        return $(this).html() || "";
    }).get().join("\n")) || "";
    const patterns = [
        /poster\s*[:=]\s*['"]([^'"]+)['"]/i,
        /thumbnailUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /thumbUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /thumb(?:nail)?\s*[:=]\s*['"]([^'"]+)['"]/i,
        /coverUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /imageUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /image\s*[:=]\s*['"]([^'"]+)['"]/i,
        /previewUrl\s*[:=]\s*['"]([^'"]+)['"]/i
    ];
    for (let i = 0; i < patterns.length; i++) {
        const match = scriptText.match(patterns[i]);
        if (match && match[1]) return normalizeMediaUrl(match[1]);
    }
    return "";
}

function scanScriptForMediaUrl($, $element) {
    return extractScriptMediaUrl($, $element);
}

function getPlayerInitializationText($, $element) {
    const $root = $element.closest('html');
    return $root.find('script').map(function () {
        return $(this).html() || '';
    }).get().join('\n');
}

function extractPageScriptMediaUrl($, $element) {
    const scriptText = getPlayerInitializationText($, $element);
    if (!scriptText) return '';
    const candidates = [
        /poster\s*[:=]\s*['"]([^'"]+)['"]/i,
        /thumbnailUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /thumbnail_url\s*[:=]\s*['"]([^'"]+)['"]/i,
        /posterUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /poster_url\s*[:=]\s*['"]([^'"]+)['"]/i,
        /imageUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /image_url\s*[:=]\s*['"]([^'"]+)['"]/i,
        /coverUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /previewUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /thumbUrl\s*[:=]\s*['"]([^'"]+)['"]/i
    ];
    for (let i = 0; i < candidates.length; i++) {
        const match = scriptText.match(candidates[i]);
        if (match && match[1]) {
            const url = normalizeMediaUrl(trimUrl(match[1]));
            if (url && !looksLikePlaceholderUrl(url)) return url;
        }
    }
    return '';
}

function tryParseJsonLike(value) {
    if (!value || typeof value !== 'string') return null;
    const text = value.trim();
    if (!text) return null;
    try {
        return JSON.parse(text);
    } catch (e) {
        try {
            const fixed = text.replace(/\bundefined\b/g, 'null').replace(/'/g, '"');
            return JSON.parse(fixed);
        } catch (e2) {
            return null;
        }
    }
}

function deepFindMediaUrl(value) {
    const queue = [value];
    const seen = new Set();
    while (queue.length) {
        const current = queue.shift();
        if (!current) continue;
        if (typeof current === 'string') {
            const url = normalizeMediaUrl(current);
            if (url && !looksLikePlaceholderUrl(url)) return url;
            continue;
        }
        if (typeof current !== 'object') continue;
        if (seen.has(current)) continue;
        seen.add(current);
        const highConfidenceKeys = ['poster', 'posterUrl', 'poster_url', 'thumbnailUrl', 'thumbnail_url', 'thumb', 'thumbUrl', 'thumb_url'];
        const extendedKeys = ['image', 'imageUrl', 'image_url', 'preview', 'previewUrl', 'url', 'src', 'content', 'cover', 'coverUrl', 'cover_url'];
        for (let i = 0; i < highConfidenceKeys.length; i++) {
            if (current[highConfidenceKeys[i]] !== undefined) queue.push(current[highConfidenceKeys[i]]);
        }
        for (let i = 0; i < extendedKeys.length; i++) {
            if (current[extendedKeys[i]] !== undefined) queue.push(current[extendedKeys[i]]);
        }
    }
    return '';
}

function extractMediaFromPlayerInitialization($, $element) {
    const scriptText = getPlayerInitializationText($, $element);
    if (!scriptText) return '';

    const directPatterns = [
        /"mediaDefinitions"\s*:\s*(\[[\s\S]+?\])/i,
        /var\s+flashvars_\d+\s*=\s*({[\s\S]+?});/i,
        /"playerData"\s*:\s*(\{[\s\S]+?\})/i,
        /"videoData"\s*:\s*(\{[\s\S]+?\})/i,
        /"player"\s*:\s*(\{[\s\S]+?\})/i,
        /"sources"\s*:\s*(\[[\s\S]+?\])/i,
        /"thumbs"\s*:\s*(\[[\s\S]+?\]|\{[\s\S]+?\})/i,
        /"poster"\s*:\s*("[^"]+"|\[[\s\S]+?\]|\{[\s\S]+?\})/i,
        /"thumbnailUrl"\s*:\s*("[^"]+"|\[[\s\S]+?\]|\{[\s\S]+?\})/i
    ];

    for (let i = 0; i < directPatterns.length; i++) {
        const match = scriptText.match(directPatterns[i]);
        if (!match || !match[1]) continue;
        const raw = match[1];
        const parsed = tryParseJsonLike(raw);
        const url = parsed ? deepFindMediaUrl(parsed) : normalizeMediaUrl(trimUrl(raw.replace(/^"|"$/g, '')));
        if (url && !looksLikePlaceholderUrl(url)) return url;
    }

    const fallbackPatterns = [
        /posterUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /poster_url\s*[:=]\s*['"]([^'"]+)['"]/i,
        /thumbnailUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /thumbnail_url\s*[:=]\s*['"]([^'"]+)['"]/i,
        /thumbUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /thumb(?:nail)?\s*[:=]\s*['"]([^'"]+)['"]/i,
        /imageUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
        /previewUrl\s*[:=]\s*['"]([^'"]+)['"]/i
    ];
    for (let i = 0; i < fallbackPatterns.length; i++) {
        const match = scriptText.match(fallbackPatterns[i]);
        if (match && match[1]) {
            const url = normalizeMediaUrl(trimUrl(match[1]));
            if (url && !looksLikePlaceholderUrl(url)) return url;
        }
    }

    const pageScriptUrl = extractPageScriptMediaUrl($, $element);
    if (pageScriptUrl) return pageScriptUrl;

    return '';
}
function extractScriptInjectedCover($, $element) {
    const scriptText = getPlayerInitializationText($, $element);
    if (!scriptText) return '';

    const patterns = [
        /"thumbnail"\s*:\s*\{[\s\S]*?"url"\s*:\s*"([^"]+)"/i,
        /"thumbnailUrl"\s*:\s*"([^"]+)"/i,
        /"posterUrl"\s*:\s*"([^"]+)"/i,
        /"poster"\s*:\s*"([^"]+)"/i,
        /"previewUrl"\s*:\s*"([^"]+)"/i,
        /"imageUrl"\s*:\s*"([^"]+)"/i,
        /data-(?:thumb|preview|poster|image)\s*=\s*["']([^"']+)["']/i,
        /cover(?:Url|Image)?\s*[:=]\s*["']([^"']+)["']/i
    ];

    for (let i = 0; i < patterns.length; i++) {
        const match = scriptText.match(patterns[i]);
        if (match && match[1]) {
            const url = normalizeMediaUrl(trimUrl(match[1]));
            if (isValidCoverUrl(url)) return url;
        }
    }

    return '';
}

const MEDIA_ATTRS = [
    "src",
    "data-src",
    "data-original",
    "data-lazy-src",
    "data-thumb",
    "data-mediumthumb",
    "data-image",
    "data-fullimg",
    "data-preview",
    "data-preview-image",
    "data-previewimage",
    "data-cover",
    "data-poster",
    "poster",
    "data-webm",
    "data-mediabook"
];

const MEDIA_CONTAINER_ATTRS = [
    "data-thumb",
    "data-src",
    "data-mediumthumb",
    "data-image",
    "data-original",
    "data-fullimg",
    "data-preview",
    "data-preview-image",
    "data-previewimage",
    "data-cover",
    "data-poster",
    "poster"
];

function collectMediaCandidates($, $element) {
    const candidates = [];
    const $targets = $element.find("img, source, video").addBack("img, source, video");

    $targets.each(function () {
        const $node = $(this);
        for (let i = 0; i < MEDIA_ATTRS.length; i++) {
            candidates.push($node.attr(MEDIA_ATTRS[i]));
        }
        candidates.push(
            pickBestFromSrcset($node.attr("srcset")),
            pickBestFromSrcset($node.attr("data-srcset"))
        );
    });

    for (let i = 0; i < MEDIA_CONTAINER_ATTRS.length; i++) {
        candidates.push($element.attr(MEDIA_CONTAINER_ATTRS[i]));
    }
    candidates.push(
        extractBackgroundImageUrl($element),
        extractBackgroundImageUrl($element.find("a, div, span").first())
    );

    return candidates;
}

function resolveMediaUrl($, $element) {
    const candidates = collectMediaCandidates($, $element);
    let url = pickFirstValidUrl(candidates);
    if (!isValidCoverUrl(url)) url = "";
    if (!url) url = extractScriptInjectedCover($, $element);
    if (!isValidCoverUrl(url)) url = extractScriptMediaUrl($, $element);
    if (!isValidCoverUrl(url)) url = extractPageScriptMediaUrl($, $element);
    if (!isValidCoverUrl(url)) url = extractMediaFromPlayerInitialization($, $element);
    return isValidCoverUrl(url) ? url : "";
}

function extractCoverUrl($, element) {
    return resolveMediaUrl($, $(element));
}

function extractListImageUrl($, element) {
    const $element = $(element);
    const direct = resolveMediaUrl($, $element);
    if (isValidCoverUrl(direct)) return direct;

    const $card = $element.closest('li, div, article');
    if ($card && $card.length) {
        const cardUrl = resolveMediaUrl($, $card);
        if (isValidCoverUrl(cardUrl)) return cardUrl;
    }

    const $linkedImage = $element.find("a[href*='viewkey='] img, a[href*='/view_video.php?viewkey='] img").first();
    if ($linkedImage.length) {
        const linkedUrl = resolveMediaUrl($, $linkedImage);
        if (isValidCoverUrl(linkedUrl)) return linkedUrl;
    }

    return direct;
}

// 从元素中提取viewkey - 减少重复代码
function extractViewkey($, element) {
    var $element = $(element);
    // 尝试多种可能的属性
    var viewkey = $element.attr('data-video-vkey') || $element.attr('data-id') || $element.attr('id');

    // 如果没有直接属性，尝试从链接中提取
    if (!viewkey) {
        var linkElement = $element.find('a[href*="viewkey="]');
        if (linkElement.length) {
            var href = linkElement.attr('href');
            var keyMatch = href.match(/viewkey=([^&]+)/);
            if (keyMatch && keyMatch[1]) {
                viewkey = keyMatch[1];
            }
        }
    }

    // 清理viewkey，移除可能的前缀
    return viewkey ? viewkey.replace(/^(video|vkey|v|vfavouriteVideo)_/, "") : null;
}

// 提取视频预览URL - 统一多源兜底
function extractPreviewUrl($, element, viewkey) {
    var $element = $(element);
    var candidates = [];
    var $targets = $element.find('img, source, video').addBack('img, source, video');

    $targets.each(function () {
        var $node = $(this);
        candidates.push(
            $node.attr('src'),
            $node.attr('data-src'),
            $node.attr('data-original'),
            $node.attr('data-lazy-src'),
            $node.attr('data-webm'),
            $node.attr('data-preview'),
            $node.attr('data-mediabook'),
            $node.attr('poster'),
            pickBestFromSrcset($node.attr('srcset')),
            pickBestFromSrcset($node.attr('data-srcset'))
        );
    });

    candidates.push(
        $element.attr('data-webm'),
        $element.attr('data-preview'),
        $element.attr('data-mediabook'),
        $element.attr('poster'),
        extractBackgroundImageUrl($element),
        extractBackgroundImageUrl($element.find('a, div, span').first())
    );

    var previewUrl = pickFirstValidUrl(candidates);
    if (looksLikePlaceholderUrl(previewUrl)) previewUrl = "";
    if (!previewUrl) previewUrl = scanScriptForMediaUrl($, $element);
    if (looksLikePlaceholderUrl(previewUrl)) return "";
    return previewUrl || "";
}

// 提取视频的播放量、收藏量和上传日期
function extractVideoStats($, element) {
    var $element = $(element);
    var views = 0;
    var favorites = 0;
    var uploadDate = "";

    // 提取播放量
    var viewsElement = $element.find('.views, .videoDetailsBlock .views, .videoViews');
    if (viewsElement.length) {
        var viewsText = viewsElement.text().trim();
        // 提取数字部分，处理如"1.5K"、"2.3M"等格式
        var viewsMatch = viewsText.match(/(\d+(?:\.\d+)?)\s*([KMB])?/i);
        if (viewsMatch) {
            var viewsNum = parseFloat(viewsMatch[1]);
            var unit = viewsMatch[2] ? viewsMatch[2].toUpperCase() : "";

            if (unit === 'K') viewsNum *= 1000;
            else if (unit === 'M') viewsNum *= 1000000;
            else if (unit === 'B') viewsNum *= 1000000000;

            views = Math.round(viewsNum);
        }
    }

    // 提取收藏量
    var favElement = $element.find('.favorites, .videoDetailsBlock .favorites, .favoritesCounter');
    if (favElement.length) {
        var favText = favElement.text().trim();
        // 提取数字部分，处理如"1.5K"、"2.3M"等格式
        var favMatch = favText.match(/(\d+(?:\.\d+)?)\s*([KMB])?/i);
        if (favMatch) {
            var favNum = parseFloat(favMatch[1]);
            var unit = favMatch[2] ? favMatch[2].toUpperCase() : "";

            if (unit === 'K') favNum *= 1000;
            else if (unit === 'M') favNum *= 1000000;
            else if (unit === 'B') favNum *= 1000000000;

            favorites = Math.round(favNum);
        }
    }

    // 提取上传日期
    var dateElement = $element.find('.added, .videoDetailsBlock .added, .uploadDate');
    if (dateElement.length) {
        uploadDate = dateElement.text().trim();
    }

    return { views: views, favorites: favorites, uploadDate: uploadDate };
}

// 从视频元素提取通用信息
function buildVideoItem($, element, viewkey, fallbackLink = "") {
    var $element = $(element);

    var title = $element.attr('title')
        || $element.find('.title a[title]').attr('title')
        || $element.find('.title a').text().trim()
        || $element.find('.title').text().trim()
        || $element.find('a[title]').attr('title')
        || $element.text().trim()
        || "未知标题";

    var link = $element.attr('href') || $element.find('.title a').attr('href') || $element.find("a[href*='viewkey=']").attr('href') || fallbackLink || '';
    if (link && !/^https?:\/\//.test(link)) {
        link = link.startsWith('/') ? `https://cn.pornhub.com${link}` : `https://cn.pornhub.com/${link}`;
    }
    if (!link) link = `https://cn.pornhub.com/view_video.php?viewkey=${viewkey}`;

    var cachedCover = COVER_CACHE[viewkey] || DETAIL_COVER_CACHE[viewkey] || "";
    var listCoverUrl = extractCoverUrl($, element);
    var detailCoverUrl = cachedCover || (viewkey ? DETAIL_COVER_CACHE[viewkey] : "") || "";
    var coverUrl = listCoverUrl || detailCoverUrl || "";
    var previewUrl = coverUrl || detailCoverUrl || extractPreviewUrl($, element, viewkey) || extractBackgroundImageUrl($element) || "";
    var durationText = $element.find('.duration, .videoDuration, [class*="duration"]').first().text().trim() || "未知时长";
    var duration = convertDurationToSeconds(durationText);
    var uploaderElement = $element.find('.usernameBadgesWrapper a, .usernameWrap a');
    var uploader = uploaderElement.length ? uploaderElement.text().trim() : "未知上传者";
    var stats = extractVideoStats($, element);
    var author = extractAuthor($, element);

    var videoData = {
        id: viewkey,
        type: "link",
        mediaType: "movie",
        title: title,
        coverUrl: coverUrl,
        previewUrl: previewUrl,
        duration: duration,
        durationText: durationText,
        uploader: uploader,
        link: link,
        description: author ? `作者：${author}` : "",
        views: stats.views,
        favorites: stats.favorites,
        uploadDate: stats.uploadDate
    };

    return videoData;
}

function extractVideoInfo($, element, viewkey) {
    return buildVideoItem($, element, viewkey);
}

function extractDetailCoverFromHtml(html, $root) {
    try {
        const root = $root || Widget.html.load(html || "");
        const htmlText = html || '';

        function pushFromValueQueue(queue, value) {
            if (value === undefined || value === null) return;
            if (Array.isArray(value)) {
                for (let i = 0; i < value.length; i++) queue.push(value[i]);
            } else {
                queue.push(value);
            }
        }

        function findUrlDeep(value) {
            const queue = [value];
            const seen = new Set();
            while (queue.length) {
                const current = queue.shift();
                if (!current) continue;
                if (typeof current === 'string') {
                    const url = normalizeMediaUrl(current);
                    if (url && !looksLikePlaceholderUrl(url)) return url;
                    continue;
                }
                if (typeof current !== 'object') continue;
                if (seen.has(current)) continue;
                seen.add(current);

                const keys = ['thumbnailUrl', 'thumbnail_url', 'thumbnail', 'poster', 'posterUrl', 'poster_url', 'image', 'imageUrl', 'image_url', 'imagePath', 'cover', 'coverUrl', 'cover_url', 'coverImage', 'preview', 'previewUrl', 'thumb', 'thumbUrl', 'thumb_url', 'url', 'src', 'content', 'large', 'medium', 'small'];
                for (let i = 0; i < keys.length; i++) {
                    if (current[keys[i]] !== undefined) pushFromValueQueue(queue, current[keys[i]]);
                }
            }
            return '';
        }

        const metaCandidates = [
            'meta[property="og:image:secure_url"]',
            'meta[property="og:image"]',
            'meta[name="twitter:image:src"]',
            'meta[name="twitter:image"]',
            'meta[property="twitter:image"]',
            'meta[property="twitter:image:src"]',
            'link[rel="image_src"]'
        ];
        for (let i = 0; i < metaCandidates.length; i++) {
            const node = root(metaCandidates[i]).first();
            const value = trimUrl(node.attr('content') || '');
            if (value && !looksLikePlaceholderUrl(value)) return normalizeMediaUrl(value);
        }

        const posterSelectors = [
            'meta[property="og:image:secure_url"]',
            'meta[property="og:image"]',
            'meta[name="twitter:image:src"]',
            'meta[name="twitter:image"]',
            'link[rel="image_src"]',
            'video[poster]',
            'video source',
            'img[data-mediumthumb]',
            'img[data-thumb]',
            'img[data-src]',
            'img[data-original]',
            'img[data-lazy-src]',
            'img[data-preview]',
            'img[data-fullimg]',
            'img[srcset]',
            'img[src]'
        ];
        for (let i = 0; i < posterSelectors.length; i++) {
            const node = root(posterSelectors[i]).first();
            if (!node.length) continue;
            const value = pickFirstValidUrl([
                node.attr('content'),
                node.attr('href'),
                node.attr('poster'),
                node.attr('data-mediumthumb'),
                node.attr('data-thumb'),
                node.attr('data-src'),
                node.attr('data-original'),
                node.attr('data-lazy-src'),
                node.attr('data-preview'),
                node.attr('data-fullimg'),
                node.attr('src'),
                pickBestFromSrcset(node.attr('srcset')),
                pickBestFromSrcset(node.attr('data-srcset'))
            ]);
            if (value && !looksLikePlaceholderUrl(value)) return value;
        }

        const scripts = root('script').map(function () { return root(this).html() || ''; }).get();
        const jsonLdScripts = root('script[type="application/ld+json"]').map(function () { return root(this).html() || ''; }).get();
        const scanText = [htmlText].concat(scripts, jsonLdScripts).join('\n');

        const pageScriptCover = extractPageScriptMediaUrl(root, root('html'));
        if (pageScriptCover) return pageScriptCover;

        const playerCover = extractMediaFromPlayerInitialization(root, root('html'));
        if (playerCover) return playerCover;

        const directPatterns = [
            /poster\s*[:=]\s*['"]([^'"]+)['"]/i,
            /posterUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
            /poster_url\s*[:=]\s*['"]([^'"]+)['"]/i,
            /thumbnailUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
            /thumbnail_url\s*[:=]\s*['"]([^'"]+)['"]/i,
            /thumbnail(?:Image|Path)?\s*[:=]\s*['"]([^'"]+)['"]/i,
            /thumbnail(?:Image|Path)?\s*[:=]\s*\{[\s\S]*?['"]url['"]\s*:\s*['"]([^'"]+)['"]/i,
            /thumb(?:nail)?Url\s*[:=]\s*['"]([^'"]+)['"]/i,
            /thumbUrl\s*[:=]\s*['"]([^'"]+)['"]/i,
            /thumb_url\s*[:=]\s*['"]([^'"]+)['"]/i,
            /image(?:Url|Path)?\s*[:=]\s*['"]([^'"]+)['"]/i,
            /image_url\s*[:=]\s*['"]([^'"]+)['"]/i,
            /cover(?:Url|Image)?\s*[:=]\s*['"]([^'"]+)['"]/i,
            /cover_url\s*[:=]\s*['"]([^'"]+)['"]/i,
            /coverImage\s*[:=]\s*['"]([^'"]+)['"]/i,
            /preview(?:Url)?\s*[:=]\s*['"]([^'"]+)['"]/i,
            /data-src\s*[:=]\s*['"]([^'"]+)['"]/i,
            /"thumbnailUrl"\s*:\s*(\[[\s\S]+?\]|"[^"]+"|\{[\s\S]+?\})/i,
            /"thumbnail"\s*:\s*(\[[\s\S]+?\]|"[^"]+"|\{[\s\S]+?\})/i,
            /"poster"\s*:\s*(\[[\s\S]+?\]|"[^"]+"|\{[\s\S]+?\})/i,
            /"image"\s*:\s*(\[[\s\S]+?\]|"[^"]+"|\{[\s\S]+?\})/i,
            /"cover"\s*:\s*(\[[\s\S]+?\]|"[^"]+"|\{[\s\S]+?\})/i,
            /"thumb"\s*:\s*(\[[\s\S]+?\]|"[^"]+"|\{[\s\S]+?\})/i,
            /"coverImage"\s*:\s*(\[[\s\S]+?\]|"[^"]+"|\{[\s\S]+?\})/i,
            /"posterUrl"\s*:\s*(\[[\s\S]+?\]|"[^"]+"|\{[\s\S]+?\})/i,
            /"imageUrl"\s*:\s*(\[[\s\S]+?\]|"[^"]+"|\{[\s\S]+?\})/i,
            /"thumbUrl"\s*:\s*(\[[\s\S]+?\]|"[^"]+"|\{[\s\S]+?\})/i,
            /"previewUrl"\s*:\s*(\[[\s\S]+?\]|"[^"]+"|\{[\s\S]+?\})/i
        ];
        for (let i = 0; i < directPatterns.length; i++) {
            const match = scanText.match(directPatterns[i]);
            if (!match || !match[1]) continue;
            const raw = match[1];
            if (/^\{[\s\S]*\}$/.test(raw) || /^\[[\s\S]*\]$/.test(raw)) {
                try {
                    const parsed = JSON.parse(raw);
                    const url = findUrlDeep(parsed);
                    if (url) return url;
                } catch (e) {}
            } else {
                const url = normalizeMediaUrl(trimUrl(raw));
                if (url && !looksLikePlaceholderUrl(url)) return url;
            }
        }

        const jsonScripts = jsonLdScripts.concat(scripts);
        for (let i = 0; i < jsonScripts.length; i++) {
            const body = jsonScripts[i];
            if (!body || !/[\{\[]/.test(body)) continue;
            try {
                const parsed = JSON.parse(body);
                const url = findUrlDeep(parsed);
                if (url) return url;
            } catch (e) {
                const relaxed = tryParseJsonLike(body);
                if (relaxed) {
                    const url = findUrlDeep(relaxed);
                    if (url) return url;
                }
            }
        }

        return '';
    } catch (e) {
        return '';
    }
}

function shouldRetryDetailCover(viewkey) {
    const failedAt = DETAIL_COVER_FAILED[viewkey];
    if (!failedAt) return true;
    return (Date.now() - failedAt) > DETAIL_COVER_FAIL_TTL;
}

function markDetailCoverFailed(viewkey) {
    DETAIL_COVER_FAILED[viewkey] = Date.now();
}

function fetchDetailCoverForViewkey(viewkey, retryCount = 1) {
    if (!viewkey) return Promise.resolve('');
    if (DETAIL_COVER_CACHE[viewkey]) return Promise.resolve(DETAIL_COVER_CACHE[viewkey]);
    if (!shouldRetryDetailCover(viewkey)) return Promise.resolve('');

    const url = `https://cn.pornhub.com/view_video.php?viewkey=${viewkey}`;
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/137.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Referer": "https://cn.pornhub.com/"
    };

    function requestOnce() {
        return Widget.http.get(url, { headers }).then(function (response) {
            const html = response && response.data ? response.data : '';
            const cover = html ? extractDetailCoverFromHtml(html, Widget.html.load(html)) : '';
            if (cover) {
                DETAIL_COVER_CACHE[viewkey] = cover;
                delete DETAIL_COVER_FAILED[viewkey];
                return cover;
            }
            return '';
        });
    }

    function failAndReturnEmpty() {
        markDetailCoverFailed(viewkey);
        return '';
    }

    return requestOnce().then(function (cover) {
        if (cover) return cover;
        if (retryCount > 0) {
            return requestOnce().catch(function () {
                return '';
            }).then(function (retryCover) {
                return retryCover || failAndReturnEmpty();
            });
        }
        return failAndReturnEmpty();
    }).catch(function () {
        if (retryCount > 0) {
            return requestOnce().catch(function () {
                return '';
            }).then(function (retryCover) {
                return retryCover || failAndReturnEmpty();
            });
        }
        return failAndReturnEmpty();
    });
}

async function hydrateMissingCovers(items, limit = LIST_COVER_HYDRATE_LIMIT, syncCount = 5) {
    const result = Array.isArray(items) ? items : [];
    const targets = [];
    for (let i = 0; i < result.length && targets.length < limit; i++) {
        const item = result[i];
        if (!item || item.coverUrl) continue;
        const viewkey = item.id || ((item.link || '').match(/viewkey=([^&]+)/) || [])[1];
        if (!viewkey || !shouldRetryDetailCover(viewkey)) continue;
        targets.push({ item, viewkey });
    }

    const syncTargets = targets.slice(0, Math.max(0, syncCount));
    const asyncTargets = targets.slice(syncTargets.length);

    if (syncTargets.length) {
        await Promise.all(syncTargets.map(async function (current) {
            const detailCover = await fetchDetailCoverForViewkey(current.viewkey);
            if (detailCover) {
                current.item.coverUrl = detailCover;
                if (!current.item.previewUrl) current.item.previewUrl = detailCover;
                COVER_CACHE[current.viewkey] = detailCover;
            }
        }));
    }

    if (asyncTargets.length) {
        (async function () {
            let cursor = 0;
            async function worker() {
                while (cursor < asyncTargets.length) {
                    const current = asyncTargets[cursor++];
                    const detailCover = await fetchDetailCoverForViewkey(current.viewkey);
                    if (detailCover) {
                        current.item.coverUrl = detailCover;
                        if (!current.item.previewUrl) current.item.previewUrl = detailCover;
                        COVER_CACHE[current.viewkey] = detailCover;
                    }
                }
            }
            const workers = [];
            const count = Math.min(LIST_COVER_HYDRATE_CONCURRENCY, asyncTargets.length);
            for (let i = 0; i < count; i++) workers.push(worker());
            await Promise.all(workers);
        })();
    }

    return result;
}

// 从HTML中提取m3u8链接
function extractM3u8FromHtml(html) {
    try {
        function normalizeVideoItems(items) {
            return (items || [])
                .filter(function (item) { return item && (item.videoUrl || item.url); })
                .map(function (item) {
                    return {
                        url: item.videoUrl || item.url || "",
                        quality: item.quality || item.resolution || item.label || "",
                        format: item.format || item.type || ""
                    };
                })
                .filter(function (item) { return !!item.url; });
        }

        function pickBestHls(items) {
            var hlsItems = items.filter(function (item) {
                return /hls|m3u8/i.test(item.format) || /\.m3u8(\?|$)/i.test(item.url);
            });
            if (!hlsItems.length) return null;
            hlsItems.sort(function (a, b) {
                return (parseInt(b.quality, 10) || 0) - (parseInt(a.quality, 10) || 0);
            });
            return {
                videoUrl: hlsItems[0].url,
                quality: hlsItems[0].quality ? String(hlsItems[0].quality).replace(/[^\d]/g, '') + 'p' : '',
                formats: hlsItems.map(function (item) {
                    return {
                        url: item.url,
                        format: item.quality ? String(item.quality).replace(/[^\d]/g, '') + 'p' : '',
                        ext: 'm3u8',
                        type: 'hls'
                    };
                })
            };
        }

        // 方法1: mediaDefinitions（兼容新旧结构）
        let match = html.match(/"mediaDefinitions"\s*:\s*(\[.+?\])/s);
        if (match) {
            try {
                let defs = JSON.parse(match[1].replace(/'/g, '"').replace(/,\s*]/g, ']'));
                let normalized = normalizeVideoItems(defs);
                let picked = pickBestHls(normalized);
                if (picked) return picked;
            } catch { }
        }

        // 方法2: flashvars / player setup 中的 mediaDefinitions
        match = html.match(/var\s+flashvars_\d+\s*=\s*({.+?});/s);
        if (match) {
            try {
                let flashvars = JSON.parse(match[1]);
                let normalized = normalizeVideoItems(flashvars.mediaDefinitions);
                let picked = pickBestHls(normalized);
                if (picked) return picked;
            } catch { }
        }

        // 方法3: 从页面脚本中直接提取 m3u8 / videoUrl
        var directUrlPatterns = [
            /https?:\/\/[^\"'\s]+\.m3u8(?:\?[^\"'\s]*)?/i,
            /videoUrl\s*[:=]\s*["']([^"']+\.m3u8(?:\?[^"']*)?)["']/i,
            /source\s*[:=]\s*["']([^"']+\.m3u8(?:\?[^"']*)?)["']/i
        ];
        for (var i = 0; i < directUrlPatterns.length; i++) {
            var directMatch = html.match(directUrlPatterns[i]);
            if (directMatch) {
                var url = directMatch[1] || directMatch[0];
                if (url) {
                    url = url.replace(/&amp;/g, '&');
                    return {
                        videoUrl: url,
                        quality: '',
                        formats: [{ url: url, format: '', ext: 'm3u8', type: 'hls' }]
                    };
                }
            }
        }

        // 方法4: 兜底提取 JSON 片段中的 sources
        match = html.match(/"sources"\s*:\s*(\[[\s\S]+?\])/i);
        if (match) {
            try {
                var sources = JSON.parse(match[1].replace(/'/g, '"').replace(/,\s*]/g, ']'));
                var normalizedSources = normalizeVideoItems(sources);
                var pickedSources = pickBestHls(normalizedSources);
                if (pickedSources) return pickedSources;
            } catch { }
        }

        return null;
    } catch (error) {
            return null;
    }
}



// 检测页面分页信息（用于getFavorites）
function detectPagination(htmlContent, requestedPage) {
    // 初始化页码
    var page = Math.max(1, Number(requestedPage) || 1);
    var maxPage = 1;

    // 检测分页控件是否存在
    var hasPagination = htmlContent.includes('class="pagination3 paginationGated"') ||
        htmlContent.includes('id="moreDataBtn"');

    if (hasPagination) {
        // 尝试从moreDataBtn的onclick参数中提取最大页码
        var btnMatch = htmlContent.match(/loadMoreData\('.*?',\s*'(\d+)',\s*'(\d+)'\)/);
        if (btnMatch && btnMatch.length >= 3) {
            maxPage = Math.max(parseInt(btnMatch[1]), parseInt(btnMatch[2]));
        } else {
            // 尝试从分页链接中提取最大页码
            var pageLinks = htmlContent.match(/href="[^"]*page=(\d+)/g) || [];
            var pageNumbers = [];
            for (var i = 0; i < pageLinks.length; i++) {
                var match = pageLinks[i].match(/page=(\d+)/);
                pageNumbers.push(match ? parseInt(match[1]) : 0);
            }
            if (pageNumbers.length > 0) {
                maxPage = Math.max.apply(null, pageNumbers.concat([1]));
            }
        }
    }

    // 限制请求的页码不超过最大页码
    page = Math.min(page, maxPage);


    return { page: page, maxPage: maxPage, hasPagination: hasPagination };
}

// 根据排序方式获取对应的URL参数
function getSortParam(sort_by) {
    switch (sort_by) {
        case 'views':
            return 'o=mv'; // 按播放量排序
        case 'rating':
            return 'o=tr'; // 按评分排序
        default:
            return ''; // 默认排序（最新发布）
    }
}

// 获取作者
function extractAuthor($, element) {
    let author = "";
    // 1. 优先 .usernameWrap a，无title属性也能取文本
    let authorA = $(element).find('.usernameWrap a');
    if (authorA.length) {
        author = authorA.attr('title') ? authorA.attr('title').trim() : authorA.text().trim();
    } else {
        // 2. 兼容 .usernameBadgesWrapper a[title]
        let authorA2 = $(element).find('.usernameBadgesWrapper a[title]');
        if (authorA2.length) {
            author = authorA2.attr('title')?.trim() || authorA2.text().trim();
        }
    }
    return author;
}

// 搜索功能主函数 
async function getSearchResults(params) {
    const searchQuery = params.search_query || '';
    const page = Math.max(1, Number(params.page) || 1);
    const sortBy = params.sort_by || "";
    const searchType = params.search_type || "no";

    const query = {
        search: buildSearchQuery(searchQuery)
    };
    const sortCode = buildSortQuery(sortBy);
    if (sortCode) query.o = sortCode;
    if (page > 1) query.page = page;

    const baseUrl = buildUrl('/video/search', query);

    const headers = createDefaultHeaders({
        "Referer": "https://cn.pornhub.com/"
    });

    try {
        const response = await Widget.http.get(baseUrl, { headers });

        if (response && response.data) {
            const $ = Widget.html.load(response.data);  // ✅ 正确加载页面
            if (!$) return [];
            let $list = findVideoItems($);
            if (!$list.length) {
                $list = $("a, li, div, article").filter(function () {
                    const $node = $(this);
                    return !!(
                        /view_video\.php\?viewkey=/.test($node.attr('href') || '') ||
                        $node.attr('data-video-vkey') ||
                        $node.attr('data-id') ||
                        $node.find("a[href*='viewkey=']").length
                    );
                });
            }

            if ($list.length > 0) {
                return parseSearchResults($, $list, searchQuery, searchType);
            } else {
                console.log("[getSearchResults] 未找到任何视频，返回空数组");
                return [];
            }
        } else {
            throw new Error("页面加载失败");
        }
    } catch (e) {
        console.error("[getSearchResults] 错误:", e);
        throw e;
    }
}

// 搜索功能解析函数
function parseSearchResults($, $list, searchQuery, searchType) {
    const result = [];
    const normalizedQuery = normalizeText(searchQuery).toLowerCase();
    console.log(`解析搜索结果，匹配总项数: ${$list.length}`);

    $list.each((i, el) => {
        const $item = $(el);

        // 提取视频 ID
        const vkey = $item.attr('data-video-vkey')
            || $item.attr('data-id')
            || $item.find("a[href*='viewkey=']").attr("href")?.match(/viewkey=([^&]+)/)?.[1]
            || ($item.attr('href') || '').match(/viewkey=([^&]+)/)?.[1];
        if (!vkey) {
            console.log("未找到 vkey, 跳过");
            return; // 如果没有找到视频ID，跳过该项
        }

        // 提取视频标题
        const title = $item.find(".title a").attr("title") ||
            $item.find(".title a").text() ||
            $item.find(".title").text().trim() ||
            $item.attr('title') ||
            $item.text().trim();

        // 使用 extractAuthor 函数提取作者名
        const author = extractAuthor($, $item);  // 提取作者名
        console.log(`提取到的标题: ${title}, 作者: ${author}`);

        // 格式化作者信息到 description
        const description = author ? `作者：${author}` : "";

        // 如果开启精准搜索，先进行筛选
        if (searchType === 'yes' && !filterExactSearchResults(title, author, normalizedQuery)) {
            return;
        }

        // 提取其他数据并添加到结果中
        let link = $item.find(".title a").attr("href") || $item.find("a[href*='viewkey=']").attr("href") || $item.attr('href') || "";
        if (link && !/^https?:\/\//.test(link)) {
            link = "https://cn.pornhub.com" + link;
        }

        const listCoverUrl = extractListImageUrl($, $item);
        const detailCoverUrl = vkey ? (COVER_CACHE[vkey] || DETAIL_COVER_CACHE[vkey] || "") : "";
        const coverUrl = listCoverUrl || detailCoverUrl || "";
        const previewUrl = coverUrl || detailCoverUrl || extractPreviewUrl($, $item, vkey) || extractBackgroundImageUrl($item) || "";
        const durationText = $item.find(".duration, .videoDuration, [class*='duration']").first().text().trim();

        const item = {
            id: vkey,
            type: "link",
            mediaType: "movie",
            title: title,
            description: description,
            coverUrl: coverUrl,
            previewUrl: previewUrl,
            durationText: durationText,
            link: link
        };
        result.push(item);
    });

    console.log(`解析到的视频数: ${result.length}`);
    return result;
}

// 精准搜索过滤函数：对视频标题和作者进行匹配
function filterExactSearchResults(title, author, searchQuery) {
    const query = normalizeText(searchQuery).toLowerCase();
    const titleText = normalizeText(title).toLowerCase();
    const authorText = normalizeText(author).toLowerCase();
    return titleText.includes(query) || authorText.includes(query);
}

function createListFallbackSelector($) {
    return $("a, li, div, article").filter(function () {
        const $node = $(this);
        return !!(
            /view_video\.php\?viewkey=/.test($node.attr('href') || '') ||
            $node.attr('data-video-vkey') ||
            $node.attr('data-id') ||
            $node.find("a[href*='viewkey=']").length
        );
    });
}

// 获取我的最爱列表视频
function getFavorites(params) {
    return new Promise(function (resolve, reject) {
        try {
            console.log("开始获取收藏列表: " + JSON.stringify(params));
            if (!params.username) {
                reject(new Error("请提供用户名"));
                return;
            }

            var baseUrl = buildUrl("/users/" + encodeURIComponent(params.username) + "/videos/favorites", {
                o: params.sort_by === 'views' ? 'mv' : params.sort_by === 'rating' ? 'tr' : ''
            });

            console.log("基础URL: " + baseUrl);

            Widget.http.get(baseUrl, {
                headers: createDefaultHeaders({
                    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                    "Referer": "https://cn.pornhub.com/"
                })
            }).then(function (firstPageResponse) {
                // 检查响应
                if (!firstPageResponse || !firstPageResponse.data) {
                    console.log("错误: 获取收藏列表失败，无响应或响应无数据");
                    reject(new Error("获取收藏列表失败，请检查网络连接或用户名是否正确"));
                    return;
                }

                // 检查是否有地区限制
                if (firstPageResponse.data.includes("As you may know, your elected officials") ||
                    firstPageResponse.data.includes("Trust and Safety measures")) {
                    console.log("错误: 检测到地区限制");
                    reject(new Error("无法访问Pornhub，可能存在地区限制"));
                    return;
                }

                // 检查是否是空收藏列表
                if (firstPageResponse.data.includes("没有收藏视频") ||
                    firstPageResponse.data.includes("No videos found") ||
                    firstPageResponse.data.includes("empty-list")) {
                    console.log("收藏列表为空");
                    resolve([]); // 返回空数组表示没有收藏视频
                    return;
                }

                // 检测分页信息
                var pagination = detectPagination(firstPageResponse.data, params.page);
                var page = pagination.page;

                // 构建最终URL
                var fullUrl = baseUrl;
                if (page > 1) {
                    fullUrl += (baseUrl.indexOf('?') >= 0 ? '&' : '?') + "page=" + page;
                }

                console.log("最终请求URL: " + fullUrl);

                // 如果不是第1页，需要重新请求
                var responsePromise;
                if (page > 1) {
                    responsePromise = Widget.http.get(fullUrl, {
                        headers: createDefaultHeaders({
                            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                            "Referer": "https://cn.pornhub.com/"
                        })
                    });
                } else {
                    responsePromise = Promise.resolve(firstPageResponse);
                }

                return responsePromise;
            }).then(function (response) {
                if (!response || !response.data) {
                    console.log("错误: 获取页面失败");
                    reject(new Error("获取收藏列表页面失败"));
                    return;
                }

                // 解析HTML
                var $ = Widget.html.load(response.data);

                // 提取视频列表
                var videos = [];
                var processedViewkeys = {}; // 用于去重

                // 统一使用通用视频选择器
                var videoItems = $("#videoFavoritesListSection").find(VIDEO_ITEM_SELECTOR);
                if (!videoItems.length) {
                    videoItems = findVideoItems($);
                }
                if (!videoItems.length) {
                    videoItems = createListFallbackSelector($);
                }

                console.log("找到 " + videoItems.length + " 个视频项");

                // 如果找不到任何视频项
                if (videoItems.length === 0) {
                    var errorMessage = "未找到任何收藏视频项。";
                    if (response.data.includes("登录") || response.data.includes("Login") ||
                        response.data.includes("sign in") || response.data.includes("注册")) {
                        errorMessage += " 这通常需要登录才能查看收藏列表。";
                    } else {
                        errorMessage += " 请确认用户名是否正确，或页面结构是否已变化。";
                    }
                    reject(new Error(errorMessage));
                    return;
                }

                // 处理每个视频项
                videoItems.each(function (index, element) {
                    try {
                        // 提取viewkey
                        var viewkey = extractViewkey($, element);
                        if (!viewkey) {
                            return; // 跳过无效项
                        }

                        // 检查是否已处理过该viewkey，避免重复添加
                        if (processedViewkeys[viewkey]) {
                            return;
                        }

                        // 提取视频信息
                        var videoInfo = extractVideoInfo($, element, viewkey);

                        const author = extractAuthor($, element);
                        videoInfo.description = author ? `作者：${author}` : "";

                        // 添加到结果数组
                        videos.push(videoInfo);

                        // 添加到已处理集合
                        processedViewkeys[viewkey] = true;

                        if (!videoInfo.coverUrl && viewkey && shouldRetryDetailCover(viewkey)) {
                            fetchDetailCoverForViewkey(viewkey).then(function (detailCover) {
                                if (detailCover) {
                                    videoInfo.coverUrl = detailCover;
                                    videoInfo.previewUrl = videoInfo.previewUrl || detailCover;
                                    COVER_CACHE[viewkey] = detailCover;
                                }
                            });
                        }

                    } catch (error) {
                        console.log("处理视频项时出错: " + error.message);
                    }
                });

                console.log("成功提取 " + videos.length + " 个收藏视频");

                resolve(videos);
            }).catch(function (error) {
                console.log("获取收藏列表失败: " + error.message);
                reject(error);
            });
        } catch (error) {
            console.log("获取收藏列表失败: " + error.message);
            reject(error);
        }
    });
}


function getArtistCatalog() {
    return [
        { title: 'HongKongDoll', value: 'HongKongDoll', type: 'model' },
        { title: '麻豆传媒', value: 'asiam', type: 'channels' },
        { title: '麻豆-LiRongRong', value: 'Li Rong Rong', type: 'pornstar' },
        { title: 'june liu', value: 'june liu', type: 'pornstar' },
        { title: 'Cabbage Sweety', value: 'Cabbage Sweety', type: 'model' },
        { title: 'Lindainlove', value: 'Lindainlove', type: 'model' },
        { title: 'SweetieYico', value: 'SweetieYico', type: 'model' },
        { title: 'wanrous', value: 'wanrous', type: 'model' },
        { title: '77bandage', value: '77bandage', type: 'model' },
        { title: 'youyou', value: 'youyou', type: 'model' },
        { title: 'manachanx', value: 'manachanx', type: 'model' },
        { title: 'Karesi ni Baretara Kaisan', value: 'Karesi ni Baretara Kaisan', type: 'model' },
        { title: 'k production film', value: 'k production film', type: 'model' },
        { title: '798DS', value: '798DS', type: 'model' },
        { title: 'aiwanxiongxiong', value: 'aiwanxiongxiong', type: 'model' },
        { title: 'andmlove', value: 'andmlove', type: 'model' },
        { title: 'ano ano chan', value: 'ano ano chan', type: 'model' },
        { title: 'bibi Fluffy', value: 'bibi Fluffy', type: 'model' },
        { title: 'CandyKissVip', value: 'CandyKissVip', type: 'model' },
        { title: 'Chinese Bunny', value: 'Chinese Bunny', type: 'model' },
        { title: 'DemiFairyTW', value: 'DemiFairyTW', type: 'model' },
        { title: 'Elle Lee', value: 'Elle Lee', type: 'model' },
        { title: 'Eve', value: 'Eve', type: 'model' },
        { title: 'fortunecutie', value: 'fortunecutie', type: 'model' },
        { title: 'LIs Evans', value: 'LIs Evans', type: 'model' },
        { title: 'loliiiiipop99', value: 'loliiiiipop99', type: 'model' },
        { title: 'Makissse', value: 'Makissse', type: 'model' },
        { title: 'nan12138', value: 'nan12138', type: 'model' },
        { title: 'Nana_taipei', value: 'Nana_taipei', type: 'model' },
        { title: 'Nuomibaby', value: 'nuomibaby', type: 'model' },
        { title: 'papaxmama', value: 'papaxmama', type: 'model' },
        { title: 'Qiobnxingcaiii', value: 'Qiobnxingcaiii', type: 'model' },
        { title: 'SakuraCandy', value: 'SakuraCandy', type: 'model' },
        { title: 'sskok16', value: 'sskok16', type: 'model' },
        { title: 'SSR Peach', value: 'SSR Peach', type: 'model' },
        { title: 'thelittlejuicer', value: 'thelittlejuicer', type: 'model' },
        { title: 'TLMS_SVJ', value: 'TLMS_SVJ', type: 'model' },
        { title: 'twtutu', value: 'twtutu', type: 'model' },
        { title: 'Vita Won', value: 'Vita Won', type: 'model' },
        { title: 'Yuqiao Chen', value: 'Yuqiao Chen', type: 'model' },
        { title: 'YuzuKitty', value: 'YuzuKitty', type: 'model' },
        { title: 'comatozze', value: 'comatozze', type: 'model' },
        { title: 'Sweetie Fox', value: 'sweetie-fox', type: 'model' },
        { title: 'Lina MiguRtt', value: 'linamigurtt', type: 'model' },
        { title: 'Diana Rider', value: 'diana-rider', type: 'model' },
        { title: 'Mirari Model', value: 'mirari-model', type: 'model' },
        { title: 'Sola Zola', value: 'solazola', type: 'model' },
        { title: 'Candy Love', value: 'candy-love', type: 'model' },
        { title: 'Anastangel', value: 'anastangel', type: 'model' },
        { title: 'HottiesTwo', value: 'hottiestwo', type: 'model' },
        { title: 'Shinaryen', value: 'shinaryen', type: 'model' },
        { title: 'Mila Muse', value: 'milamuse', type: 'model' },
        { title: 'Melody Marks', value: 'melody-marks', type: 'pornstar' },
        { title: 'Eva Elfie', value: 'eva-elfie', type: 'pornstar' }
    ];
}

function normalizeArtistUsername(username) {
    return normalizeText(username).replace(/\s+/g, '-').toLowerCase();
}

function getSortQueryForArtist(type, sortBy) {
    if (type === 'channels') {
        if (sortBy === 'views') return 'o=vi';
        if (sortBy === 'rating') return 'o=ra';
        return '';
    }
    if (sortBy === 'views') return 'o=mv';
    if (sortBy === 'rating') return 'o=tr';
    if (sortBy === 'new') return 'o=mr';
    return '';
}

function buildArtistUrl(type, username, params) {
    const page = Math.max(1, Number(params.page) || 1);
    const sortBy = params.sort_by || 'new';
    const formattedUsername = normalizeArtistUsername(username);
    const headers = createPageHeaders(PH_BASE_URL + '/');

    if (type === 'pornstar') {
        return {
            uploadUrl: buildUrl(`/pornstar/${encodeURIComponent(formattedUsername)}/videos/upload`, {
                o: 'mr',
                page: page > 1 ? page : ''
            }),
            homepageUrl: buildUrl(`/pornstar/${encodeURIComponent(formattedUsername)}`),
            headers: headers
        };
    }

    if (type === 'model') {
        return {
            url: buildUrl(`/model/${encodeURIComponent(formattedUsername)}/videos`, {
                o: getSortQueryForArtist(type, sortBy).replace('o=', '') || 'mr',
                page: page > 1 ? page : ''
            }),
            headers: headers
        };
    }

    if (type === 'channels') {
        const isDefault = sortBy === 'new' || sortBy === 'default' || !sortBy;
        return {
            url: isDefault && page === 1
                ? buildUrl(`/channels/${encodeURIComponent(formattedUsername)}`)
                : isDefault
                    ? buildUrl(`/channels/${encodeURIComponent(formattedUsername)}/videos`, { page })
                    : buildUrl(`/channels/${encodeURIComponent(formattedUsername)}/videos`, {
                        o: getSortQueryForArtist(type, sortBy).replace('o=', ''),
                        page: page > 1 ? page : ''
                    }),
            headers: headers
        };
    }

    throw new Error('不支持的艺人类型');
}

//功能分流
async function getUserUploads(params = {}) {
    const logo = params.logo;
    if (logo === 'yx') {
        const option = getArtistCatalog().find(function (opt) {
            return opt.value === params.username;
        });
        if (!option) throw new Error('优选艺人未选中或无效');
        return await doFetch(option.type, option.value, params);
    }

    if (logo === 'ss') {
        const userType = normalizeText(params.user_type || 'model').toLowerCase();
        const username = normalizeText(params.username);
        if (!username) throw new Error('请输入艺人名称');
        return await doFetch(userType, username, params);
    }

    throw new Error('未知入口，请检查logo参数');
}

// 公共 fetch 逻辑（类型分流解析）
async function doFetch(type, username, params) {
    const requestInfo = buildArtistUrl(type, username, params);

    if (type === 'pornstar') {
        console.log(`[doFetch] 尝试请求明星上传页: ${requestInfo.uploadUrl}`);
        const response = await Widget.http.get(requestInfo.uploadUrl, { headers: requestInfo.headers });
        console.log(`HTTP状态码: ${response.statusCode}`);

        if (response.statusCode === 200) {
            const $ = Widget.html.load(response.data);
            const $list = $('ul#moreData.full-row-thumbs.videos.row-5-thumbs');
            if ($list.length > 0 && $list.find(VIDEO_ITEM_SELECTOR).length > 0) {
                console.log('[doFetch] 上传页存在视频，返回并解析该页');
                return parsePornstarVideos(response.data);
            }
            console.log('[doFetch] 上传页存在但无视频内容，准备降级到主页解析');
        }

        const resp2 = await Widget.http.get(requestInfo.homepageUrl, { headers: requestInfo.headers });
        if (!resp2 || !resp2.data) throw new Error('明星主页无法获取');
        return parsePornstarHomePage(resp2.data);
    }

    console.log(`[doFetch] 尝试请求: ${requestInfo.url}`);
    const response = await Widget.http.get(requestInfo.url, { headers: requestInfo.headers });
    if (!response || !response.data) throw new Error('页面加载失败');

    if (type === 'model') return parseModelVideos(response.data);
    if (type === 'channels') return parseChannelVideos(response.data);
    throw new Error('不支持的艺人类型');
}


//解析Model视频页面
function parseModelVideos(html) {
    var $ = Widget.html.load(html);

    // 1. 只取第一个视频区块 section
    var $sections = $(".videoSection.clear-both");
    console.log("[日志] 页面 videoSection.clear-both 区块数量：", $sections.length);
    if (!$sections.length) {
        console.log("未找到视频区块 section");
        return [];
    }

    var $firstSection = $sections.first();

    // 2. 在这个 section 里找所有视频卡片
    var videoItems = $firstSection.find(VIDEO_ITEM_SELECTOR);
    console.log("[日志] 第一个 videoSection 下视频卡片数量：", videoItems.length);

    var videos = [];
    var processedViewkeys = {};
    videoItems.each(function (index, element) {
        try {
            var viewkey = extractViewkey($, element);
            if (!viewkey) return;
            if (processedViewkeys[viewkey]) return;
            var videoInfo = extractVideoInfo($, element, viewkey);
            videos.push(videoInfo);
            processedViewkeys[viewkey] = true;
        } catch (error) {
            console.log("处理视频项时出错: " + error.message);
        }
    });

    console.log("成功提取 " + videos.length + " 个艺人上传视频");
    return videos;
}

//解析Channel视频页面
function parseChannelVideos(html) {
    const $ = Widget.html.load(html);
    const result = [];
    const $ul = $('ul#moreData.videosGridWrapper, ul#showAllChanelVideos.videosGridWrapper');
    console.log("[parseChannelVideos] 命中的 ul 个数:", $ul.length);

    if (!$ul.length) throw new Error("未找到频道视频主区块");

    $ul.find(VIDEO_ITEM_SELECTOR).each(function () {
        const $item = $(this);
        let vkey = $item.attr('data-video-vkey') ||
            $item.attr('data-id') ||
            ($item.find("a[href*='viewkey=']").attr("href") || "").match(/viewkey=([^&]+)/)?.[1];
        if (!vkey) return;

        const link = $item.find(".title a").attr("href") || $item.find("a[href*='viewkey=']").attr("href") || "";
        const videoInfo = buildVideoItem($, $item, vkey, link);
        result.push(videoInfo);
    });

    if (result.length === 0) throw new Error("未提取到频道视频数据");
    return hydrateMissingCovers(result, Math.min(3, result.length), 3);
}

// Pornstar主页（有上传区）视频提取
function parsePornstarVideos(html) {
    const $ = Widget.html.load(html);
    const result = [];
    const $list = $("ul#moreData.full-row-thumbs.videos.row-5-thumbs");

    if (!$list.length) {
        console.log("[parsePornstarVideos] 没有找到明星上传视频列表 ul#moreData.full-row-thumbs.videos.row-5-thumbs");
        return [];
    }

    $list.find(VIDEO_ITEM_SELECTOR).each(function () {
        const $item = $(this);

        let vkey = $item.attr('data-video-vkey')
            || $item.attr('data-id')
            || ($item.find("a[href*='viewkey=']").attr("href") || "").match(/viewkey=([^&]+)/)?.[1];
        if (!vkey) return;

        const link = $item.find(".title a").attr("href") || $item.find("a[href*='viewkey=']").attr("href") || "";
        const videoInfo = buildVideoItem($, $item, vkey, link);
        videoInfo.description = "";
        result.push(videoInfo);
    });

    if (result.length === 0) {
        console.log("[parsePornstarVideos] 未提取到任何明星上传视频数据");
    }
    return result;
}

// Pornstar主页（无上传区）视频提取
function parsePornstarHomePage(html) {
    const $ = Widget.html.load(html);
    const result = [];
    $(".sectionWrapper .wrap.flexibleHeight").each(function () {
        const $item = $(this);

        let vkey = $item.find("a[href*='viewkey=']").attr("href")?.match(/viewkey=([^&]+)/)?.[1];
        if (!vkey) return;

        const title = $item.find(".title a").attr("title") ||
            $item.find(".title a").text() ||
            $item.find(".title").text().trim();

        let link = $item.find(".title a").attr("href") || $item.find("a[href*='viewkey=']").attr("href") || "";
        if (link && !/^https?:\/\//.test(link)) link = "https://cn.pornhub.com" + link;

        const videoInfo = buildVideoItem($, $item, vkey, link);
        result.push(videoInfo);
    });
    if (result.length === 0) throw new Error("未提取到主页视频数据");
    return result;
}





//处理cooike
function fixCookie(cookieStr) {
    let arr = cookieStr.split(";").map(s => s.trim()).filter(Boolean);
    // 只保留有效 key=value（且无 undefined/空值）
    let valid = arr.filter(s => s.includes("=") && !/^([^=]+)=\s*$/.test(s) && !/undefined/i.test(s));
    // user_session 放最前（有则优先，无也可）
    valid.sort((a, b) => {
        if (a.startsWith("user_session=")) return -1;
        if (b.startsWith("user_session=")) return 1;
        return 0;
    });
    return valid.join("; ");
}

//获取推荐视频列表
async function getRecommendedVideos(params = {}) {
    const rawCookie = params.cookie || "";
    const page = Math.max(1, Number(params.page) || 1);
    const sortBy = (params.sort_by || "").trim(); // ""(最相关) or "time"(最新)

    const cookie = fixCookie(rawCookie);

    // 构建 URL
    let url = `https://cn.pornhub.com/recommended`;
    const query = [];
    if (sortBy) query.push(`o=${encodeURIComponent(sortBy)}`);
    if (page > 1) query.push(`page=${page}`);
    if (query.length > 0) url += "?" + query.join("&");
    const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/137.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Referer": "https://cn.pornhub.com/",
        "Cookie": cookie
    };

    const response = await Widget.http.get(url, { headers });

    if (!response || !response.data) {
        throw new Error("推荐页面加载失败，请检查网络/代理/Cookie");
    }

    // 自动检测是否为已登录状态（核心逻辑）
    const html = response.data;
    const isLogged =
        html.includes('class="logged-in"') ||
        html.includes("var isLogged = 1") ||
        html.includes("'login_user': 'Yes'") ||
        html.includes('id="topProfileMenu"') || // 顶部用户菜单
        html.includes('/users/'); // 有用户专属链接
    if (!isLogged) {
        throw new Error("未登录或 Cookie 已失效，请重新获取 Cookie");
    }

    // 解析视频区块
    const $ = Widget.html.load(html);
    const result = [];
    let items = findVideoItems($);
    if (!items.length) {
        items = $("a, li, div, article").filter(function () {
            const $node = $(this);
            return !!(
                /view_video\.php\?viewkey=/.test($node.attr('href') || '') ||
                $node.attr('data-video-vkey') ||
                $node.attr('data-id') ||
                $node.find("a[href*='viewkey=']").length
            );
        });
    }
    items.each(function () {
        const $item = $(this);

        let vkey = $item.attr('data-video-vkey')
            || $item.attr('data-id')
            || ($item.find("a[href*='viewkey=']").attr("href") || "").match(/viewkey=([^&]+)/)?.[1];
        if (!vkey) return;

        const link = $item.find(".title a").attr("href") || $item.find("a[href*='viewkey=']").attr("href") || "";
        const videoInfo = buildVideoItem($, $item, vkey, link);
        result.push(videoInfo);
    });

    if (result.length === 0) {
        throw new Error("页面结构可能已变，未提取到推荐视频数据。");
    }
    return hydrateMissingCovers(result, Math.min(3, result.length), 3);
}

// 按分类获取视频列表
async function getVideos(originalParams = {}) {
    const params = { ...originalParams };
    const pageType = params.pageType || "";
    const c = params.c || "";
    const cc = params.country || "";
    const page = Math.max(1, Number(params.page) || 1);
    const hd = params.hd || "";
    const sort_by = params.sort_by || "";
    const p = params.p || "";
    const isTeen = c === "teen";
    const isLatestFeatured = !pageType || pageType === "latestFeatured";

    const query = { page };
    if (hd === "1") query.hd = "1";
    if (p) query.p = p;
    if (c && !isTeen) query.c = c;
    if (cc && cc !== "world") query.cc = cc;
    if (sort_by) query.t = sort_by;

    let url = "";
    if (pageType === "cm") {
        url = isTeen
            ? buildUrl("/categories/teen", Object.assign({ o: "cm" }, query))
            : buildUrl("/video", Object.assign({ o: "cm" }, query));
    } else if (pageType === "ht") {
        url = isTeen
            ? buildUrl("/categories/teen", Object.assign({ o: "ht" }, query))
            : buildUrl("/video", Object.assign({ o: "ht" }, query));
    } else if (pageType === "mv") {
        url = isTeen
            ? buildUrl("/categories/teen", Object.assign({ o: "mv" }, query))
            : buildUrl("/video", Object.assign({ o: "mv" }, query));
    } else if (pageType === "tr") {
        url = isTeen
            ? buildUrl("/categories/teen", Object.assign({ o: "tr" }, query))
            : buildUrl("/video", Object.assign({ o: "tr" }, query));
    } else if (isLatestFeatured) {
        url = isTeen
            ? buildUrl("/categories/teen", query)
            : buildUrl("/video", query);
    } else {
        url = buildUrl("/video", Object.assign({ o: pageType || "cm" }, query));
    }

    try {
        const response = await Widget.http.get(url, {
            headers: createPageHeaders(PH_BASE_URL + "/")
        });

        const htmlContent = response.data;
        const $ = Widget.html.load(htmlContent);

        const selectors = [
            "[data-video-vkey]",
            "li.pcVideoListItem",
            "li.videoblock",
            "div.pcVideoListItem",
            "div.videoblock",
            "div.videoBox",
            "article[data-video-vkey]",
            "a[href*='view_video.php?viewkey=']"
        ];
        const $items = getBestVideoItems($, selectors, "getVideos");

        const items = [];
        $items.each(function () {
            const $item = $(this);

            let vkey = $item.attr('data-video-vkey')
                || $item.attr('data-id')
                || ($item.attr('href') || "").match(/viewkey=([^&]+)/)?.[1]
                || ($item.find("a[href*='viewkey=']").attr("href") || "").match(/viewkey=([^&]+)/)?.[1];
            if (!vkey) return;

            const title = $item.attr('title')
                || $item.find(".title a[title]").attr("title")
                || $item.find(".title a").text().trim()
                || $item.find(".title").text().trim()
                || $item.text().trim()
                || "未知标题";

            let link = $item.attr('href') || $item.find(".title a").attr("href") || $item.find("a[href*='viewkey=']").attr("href") || "";
            if (link && !/^https?:\/\//.test(link)) {
                link = link.startsWith('/') ? `https://cn.pornhub.com${link}` : `https://cn.pornhub.com/${link}`;
            }

            const videoInfo = buildVideoItem($, $item, vkey, link);
            const authorName = extractAuthor($, $item);
            videoInfo.description = authorName ? `作者：${authorName}` : videoInfo.description;
            items.push(videoInfo);
        });

        if (items.length === 0) {
            const hasVideoHint = /viewkey=|data-video-vkey|pcVideoListItem|videoblock|videoBox/i.test(htmlContent);
            throw new Error(hasVideoHint ? "页面结构可能已变，候选元素存在但未提取到视频数据。" : "页面未返回视频列表内容，可能被重定向、登录失效或结构变更。");
        }

        await hydrateMissingCovers(items, LIST_COVER_HYDRATE_LIMIT, 5);
        return items;

    } catch (error) {
        console.error("获取视频失败:", error.message);
        throw new Error("获取视频失败: " + error.message);
    }
}

//按语言分类获取视频列表
async function getVideosByLanguage(originalParams = {}) {
    const params = { ...originalParams };
    const language = params.language || "chinese";
    const p = params.p || "";
    const hd = params.hd || "";
    const sort_by = params.sort_by || "";
    const page = Math.max(1, Number(params.page) || 1);

    let url = `https://cn.pornhub.com/language/${encodeURIComponent(language)}`;
    const qs = [];
    if (page > 1) qs.push(`page=${page}`);
    if (p) qs.push(`p=${encodeURIComponent(p)}`);
    if (hd === "1") qs.push(`hd=1`);
    if (sort_by) qs.push(`o=${encodeURIComponent(sort_by)}`);
    if (qs.length) url += `?${qs.join("&")}`;

    console.log("按语言筛选拼接URL:", url);

    try {
        const response = await Widget.http.get(url, {
            headers: createPageHeaders(PH_BASE_URL + "/")
        });

        const htmlContent = response.data || "";
        const $ = Widget.html.load(htmlContent);

        const selectors = [
            "ul.videos.underplayer-thumbs.fixedSizeThumbsVideosListing li[data-video-vkey]",
            "ul.videosGridWrapper li[data-video-vkey]",
            "li[data-video-vkey]",
            "a[href*='view_video.php?viewkey=']",
            VIDEO_ITEM_SELECTOR
        ];
        const $list = getBestVideoItems($, selectors, "parseLanguagePage");

        const items = [];
        $list.each(function () {
            const $item = $(this);
            const vkey = $item.attr('data-video-vkey')
                || $item.attr('data-id')
                || $item.attr('href')?.match(/viewkey=([^&]+)/)?.[1]
                || ($item.find("a[href*='viewkey=']").attr("href") || "").match(/viewkey=([^&]+)/)?.[1];
            if (!vkey) return;

            const title = $item.find(".title a[title]").attr("title")
                || $item.find(".title a").text().trim()
                || $item.find(".title").text().trim()
                || $item.find("a[title]").attr("title")
                || "未知标题";

            let link = $item.find(".title a").attr("href") || $item.find("a[href*='viewkey=']").attr("href") || $item.attr('href') || "";
            if (link && !/^https?:\/\//.test(link)) link = "https://cn.pornhub.com" + link;

            const listCoverUrl = extractListImageUrl($, $item);
            const detailCoverUrl = vkey ? (COVER_CACHE[vkey] || DETAIL_COVER_CACHE[vkey] || "") : "";
            const coverUrl = listCoverUrl || detailCoverUrl || "";
            const previewUrl = coverUrl || detailCoverUrl || extractPreviewUrl($, $item, vkey) || extractBackgroundImageUrl($item) || "";
            const durationText = $item.find(".duration, .videoDuration, [class*='duration']").first().text().trim();
            const authorName = extractAuthor($, $item);
            const description = authorName ? `作者：${authorName}` : "";

            const item = {
                id: vkey,
                type: "link",
                mediaType: "movie",
                title: title,
                coverUrl: coverUrl,
                previewUrl: previewUrl,
                durationText: durationText,
                link: link,
                description: description
            };
            items.push(item);

            if (!coverUrl && vkey) {
                fetchDetailCoverForViewkey(vkey).then(function (detailCover) {
                    if (detailCover) {
                        COVER_CACHE[vkey] = detailCover;
                        if (item && item.id === vkey) {
                            item.coverUrl = detailCover;
                            if (!item.previewUrl) item.previewUrl = detailCover;
                        }
                    }
                });
            }
        });

        if (items.length === 0) {
            const hasVideoHint = /viewkey=|data-video-vkey|videosGridWrapper|fixedSizeThumbsVideosListing|pcVideoListItem|videoblock|videoBox/i.test(htmlContent);
            throw new Error(hasVideoHint ? "语言页页面结构可能已变，候选元素存在但未提取到视频数据。" : "语言页未返回视频列表内容，可能被重定向、登录失效或结构变更。");
        }

        await hydrateMissingCovers(items, LIST_COVER_HYDRATE_LIMIT, 5);
        return items;

    } catch (error) {
        console.error("获取按语言筛选视频失败:", error.message);
        throw new Error("获取按语言筛选视频失败: " + error.message);
    }
}

// 推荐区块极速切片采集
function extractRecommendedVideos(htmlContent, maxCount = 10) {
    let relatedHtml = "";
    const blockStart = htmlContent.indexOf('<ul class="videos underplayer-thumbs fixedSizeThumbsVideosListing"');
    if (blockStart !== -1) {
        const blockEnd = htmlContent.indexOf('</ul>', blockStart);
        if (blockEnd !== -1) {
            relatedHtml = htmlContent.slice(blockStart, blockEnd + 5);
        }
    }
    const $ = Widget.html.load(relatedHtml || htmlContent);
    const $items = getBestVideoItems($, ["li[data-video-vkey]", "ul.videos.underplayer-thumbs.fixedSizeThumbsVideosListing li[data-video-vkey]"], "extractRecommendedVideos");

    const result = [];
    $items.slice(0, maxCount).each(function (i, element) {
        const $element = $(element);
        const vkey = $element.attr('data-video-vkey') || extractViewkey($, element);
        if (!vkey) return;
        const link = $element.find("a[href*='viewkey=']").attr("href") || `https://cn.pornhub.com/view_video.php?viewkey=${vkey}`;
        const videoInfo = buildVideoItem($, $element, vkey, link);
        result.push(videoInfo);
    });
    return result;
}


// 加载视频详情函数
async function loadDetail(link) {
    try {
        console.log(`开始加载视频详情: ${link}`);

        // 1. 提取 viewkey
        const viewkeyMatch = link.match(/viewkey=([^&]+)/);
        if (!viewkeyMatch || !viewkeyMatch[1]) {
            console.log(`错误: 无效的视频链接 ${link}`);
            throw new Error("无效的视频链接");
        }
        const viewkey = viewkeyMatch[1];

        // 2. 构建详情页链接并获取HTML
        const fullVideoUrl = `https://cn.pornhub.com/view_video.php?viewkey=${viewkey}`;
        const response = await Widget.http.get(fullVideoUrl, {
            headers: createPageHeaders(PH_BASE_URL + "/")
        });
        const htmlContent = response.data;
        const $root = Widget.html.load(htmlContent);

        // 3. 先补封面，再用详情HTML直接提取 m3u8
        let coverUrl = extractDetailCoverFromHtml(htmlContent, $root);
        if (coverUrl) {
            COVER_CACHE[viewkey] = coverUrl;
            DETAIL_COVER_CACHE[viewkey] = coverUrl;
        }
        const m3u8Data = extractM3u8FromHtml(htmlContent);

        if (!m3u8Data || !m3u8Data.videoUrl) {
            console.log(`错误: 无法获取视频播放链接`);
            throw new Error("无法获取视频播放链接");
        }

        // 4. 主视频作者
        const mainAuthorA = $root('.usernameWrap a').first();
        const mainAuthor = mainAuthorA.attr('title') || "";

        // 5. 推荐区块采集（极速切片，独立函数）
        const recommendedVideos = extractRecommendedVideos(htmlContent, 10);
        console.log("推荐区块采集数量:", recommendedVideos.length);

        // 6. 返回 ForwardWidget 兼容的详情对象
        const result = {
            id: viewkey,
            type: "detail",
            mediaType: "movie",
            videoUrl: m3u8Data.videoUrl,
            customHeaders: {
                "Referer": fullVideoUrl,
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
            },
            quality: m3u8Data.quality,
            title: "视频播放",
            coverUrl: coverUrl,
            duration: 0,
            formats: m3u8Data.formats,
            description: mainAuthor ? `作者：${mainAuthor}` : "",
            childItems: recommendedVideos
        };

        console.log(`视频详情加载成功: ${JSON.stringify({ id: result.id, quality: result.quality, recommendCount: recommendedVideos.length })}`);
        return result;
    } catch (error) {
        console.log(`loadDetail 执行失败: ${error.message}`);
        throw error;
    }
}


module.exports = {
    metadata: WidgetMetadata,
    getSearchResults: getSearchResults,
    getFavorites: getFavorites,
    getRecommendedVideos: getRecommendedVideos,
    getUserUploads: getUserUploads,
    getVideos: getVideos,
    loadDetail: loadDetail
};
