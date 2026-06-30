//Original Author:nibiru
const SORT_ENUM_OPTIONS = [
  { title: "\u6700\u8fd1\u66f4\u65b0", value: "post_date" },
  { title: "\u6700\u591a\u89c2\u770b", value: "video_viewed" },
  { title: "\u6700\u591a\u6536\u85cf", value: "most_favourited" },
];
const SORT_BELONGTO_VALUES = ["post_date", "video_viewed", "most_favourited"];
WidgetMetadata = {
  id: "jable_int",
  title: "Jable",
  description: "Jable分类浏览.全局搜索.标签.女优.预告.推荐.聚合",
  author: "nibiru｜MakkaPakka｜廿二日",
  site: "https://jable.tv",
  version: "2.7.4",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
  globalParams: [
    {
      name: "tpdb_token",
      title: "TPDB Token",
      type: "input",
      value: "",
      description: "ThePornDB API Token（请在此填写你自己的 token，用于获取全高清海报；不填则 TPDB 兜底源不生效）",
    },
  ],
  modules: [
    // \u641c\u7d22\u6a21\u5757
    {
      id: "search",
      title: "\u641c\u7d22",
      description: "\u641c\u7d22",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        {
          name: "keyword",
          title: "\u5173\u952e\u8bcd",
          type: "input",
          description: "\u5173\u952e\u8bcd",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: [
            { title: "\u6700\u9ad8\u76f8\u5173", value: "" },
            { title: "\u6700\u591a\u89c2\u770b", value: "video_viewed" },
            { title: "\u8fd1\u671f\u6700\u4f73", value: "post_date_and_popularity" },
            { title: "\u6700\u8fd1\u66f4\u65b0", value: "post_date" },
            { title: "\u6700\u591a\u6536\u85cf", value: "most_favourited" },
          ],
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
    // \u70ed\u95e8\u6a21\u5757
    {
      id: "hot",
      title: "\u70ed\u95e8",
      description: "\u70ed\u95e8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://jable.tv/hot/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: [
            { title: "\u4eca\u65e5\u70ed\u95e8", value: "video_viewed_today" },
            { title: "\u672c\u5468\u70ed\u95e8", value: "video_viewed_week" },
            { title: "\u672c\u6708\u70ed\u95e8", value: "video_viewed_month" },
            { title: "\u6240\u6709\u65f6\u95f4", value: "video_viewed" },
          ],
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
    // \u6700\u65b0\u6a21\u5757
    {
      id: "newRelease",
      title: "\u6700\u65b0",
      description: "\u6700\u65b0\u4e0a\u5e02\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://jable.tv/new-release/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: [
            { title: "\u6700\u65b0\u53d1\u5e03", value: "latest-updates" },
            { title: "\u6700\u591a\u89c2\u770b", value: "video_viewed" },
            { title: "\u6700\u591a\u6536\u85cf", value: "most_favourited" },
          ],
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },

    // \u6700\u8fd1\u66f4\u65b0\u6a21\u5757
    {
      id: "latest",
      title: "\u6700\u8fd1\u66f4\u65b0",
      description: "\u6700\u8fd1\u66f4\u65b0\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://jable.tv/latest-updates/?mode=async&function=get_block&block_id=list_videos_latest_videos_list",
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },

    // \u4e2d\u6587\u6a21\u5757
    {
      id: "chinese",
      title: "\u4e2d\u6587",
      description: "\u4e2d\u6587\u5b57\u5e55\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u5217\u8868\u5730\u5740",
          type: "constant",
          description: "\u5217\u8868\u5730\u5740",
          value: "https://jable.tv/categories/chinese-subtitle/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: SORT_ENUM_OPTIONS,
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
    // \u5973\u4f18\u6a21\u5757
    {
      id: "models",
      title: "\u5973\u4f18",
      description: "\u6309\u5973\u4f18\u5206\u7c7b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u9009\u62e9\u5973\u4f18",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: SORT_BELONGTO_VALUES,
            },
          enumOptions: [
            { 
              title: "\u4e09\u4e0a\u60a0\u4e9a", 
              value: "https://jable.tv/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u696a\u53ef\u601c", 
              value: "https://jable.tv/models/86b2f23f95cc485af79fe847c5b9de8d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5c0f\u91ce\u5915\u5b50", 
              value: "https://jable.tv/models/2958338aa4f78c0afb071e2b8a6b5f1b/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5927\u69fb\u54cd", 
              value: "https://jable.tv/models/hibiki-otsuki/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u85e4\u68ee\u91cc\u7a57", 
              value: "https://jable.tv/models/riho-fujimori/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "JULIA", 
              value: "https://jable.tv/models/julia/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u660e\u91cc\u4337", 
              value: "https://jable.tv/models/tsumugi-akari/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6843\u4e43\u6728\u9999\u5948", 
              value: "https://jable.tv/models/momonogi-kana/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6c34\u6237\u9999\u5948", 
              value: "https://jable.tv/models/kana-mito/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7be0\u7530\u3086\u3046", 
              value: "https://jable.tv/s1/models/shinoda-yuu/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u67ab\u53ef\u601c", 
              value: "https://jable.tv/models/kaede-karen/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5409\u6ca2\u660e\u6b69", 
              value: "https://jable.tv/models/akiho-yoshizawa/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7fbd\u6708\u5e0c", 
              value: "https://jable.tv/models/21e145d3f4d7c8c818fc7eae19342a7a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7f8e\u8c37\u6731\u91cc", 
              value: "https://jable.tv/s1/models/mitani-akari/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5c71\u5cb8\u9022\u82b1", 
              value: "https://jable.tv/models/yamagishi-aika/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4f50\u4f50\u6728\u660e\u5e0c", 
              value: "https://jable.tv/models/sasaki-aki/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u795e\u6728\u9e97", 
              value: "https://jable.tv/models/ef9b1ab9a21b58d6ee4d7d97ab883288/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e03\u6cfd\u7f8e\u4e9a", 
              value: "https://jable.tv/models/nanasawa-mia/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u702c\u6238\u74b0\u5948", 
              value: "https://jable.tv/models/1a71be5a068c6f9e00fac285b31019f9/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7027\u672c\u96eb\u8449", 
              value: "https://jable.tv/models/7ffb432871f53eda0b4d80be34fff86a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u3055\u304f\u3089\u308f\u304b\u306a", 
              value: "https://jable.tv/models/0b96db26c8b192b0a54e24d878380765/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5f69\u6708\u4e03\u7dd2", 
              value: "https://jable.tv/models/e82b22cd3275fd0e569147d82fa1999d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u9234\u4e43\u30a6\u30c8", 
              value: "https://jable.tv/models/559904d22cbf03091f790258aa4e9b8c/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e09\u7530\u771f\u9234", 
              value: "https://jable.tv/models/7749dd641e0426f55342972d920513a7/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e03\u30c4\u68ee\u308a\u308a", 
              value: "https://jable.tv/models/9ed214792a2144520430dd494c93f651/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e03\u5d8b\u821e", 
              value: "https://jable.tv/models/6ab2e738a33eafc3db27cab0b83cf5cd/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u516b\u639b\u3046\u307f", 
              value: "https://jable.tv/models/83397477054d35cd07e2c48685335a86/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u516b\u6728\u5948\u3005", 
              value: "https://jable.tv/models/3610067a1d725dab8ee8cd3ffe828850/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5bae\u4e0b\u73b2\u5948", 
              value: "https://jable.tv/models/b435825a4941964079157dd2fc0a8e5a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5c0f\u6e4a\u3088\u3064\u8449", 
              value: "https://jable.tv/models/ff8ce98f2419126e00a90bc1f3385824/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5c0f\u91ce\u516d\u82b1", 
              value: "https://jable.tv/models/0478c4db9858c4e6c60af7fbf828009a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5de5\u85e4\u3086\u3089", 
              value: "https://jable.tv/models/e7ba849893aa7ce8afcc3003a4075c20/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u672c\u5e84\u9234", 
              value: "https://jable.tv/models/honjou-suzu/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u685c\u7a7a\u3082\u3082", 
              value: "https://jable.tv/models/sakura-momo/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6953\u3075\u3046\u3042", 
              value: "https://jable.tv/models/f88e49c4c1adb0fd1bae71ac122d6b82/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6cb3\u5317\u5f69\u4f3d", 
              value: "https://jable.tv/models/saika-kawakita2/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u77e2\u57dc\u611b\u8309", 
              value: "https://jable.tv/models/0903b1921df6c616c29041be11c3d2e8/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u77f3\u5ddd\u6faa", 
              value: "https://jable.tv/models/a855133fa44ca5e7679cac0a0ab7d1cb/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7f8e\u30ce\u5d8b\u3081\u3050\u308a", 
              value: "https://jable.tv/models/d1ebb3d61ee367652e6b1f35b469f2b6/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u91ce\u3005\u6d66\u6696", 
              value: "https://jable.tv/models/6b0ce5c4944edce04ab48d4bb608fd4c/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u9752\u7a7a\u3072\u304b\u308a", 
              value: "https://jable.tv/models/4c7a2cfa27b343e3e07659650400f61d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u9999\u6f84\u308a\u3053", 
              value: "https://jable.tv/models/6c2e861e04b9327701a80ca77a088814/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u65b0\u3042\u308a\u306a", 
              value: "https://jable.tv/models/e763382dc86aa703456d964ca25d0e8b/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u672a\u6b69\u306a\u306a", 
              value: "https://jable.tv/models/c9535c2f157202cd0e934d62ef582e2e/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u51ea\u3072\u304b\u308b", 
              value: "https://jable.tv/models/91fca8d824e07075d09de0282f6e9076/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e09\u5bae\u3064\u3070\u304d", 
              value: "https://jable.tv/models/f0e279c00b2a7e1aca2ef4d31d611020/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u85cd\u82bd\u307f\u305a\u304d", 
              value: "https://jable.tv/models/679c69a5488daa35a5544749b75556c6/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u3064\u3070\u3055\u821e", 
              value: "https://jable.tv/models/0d7709a62cc199f923107c120d30893b/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u671d\u65e5\u308a\u304a", 
              value: "https://jable.tv/models/ad0935cfa1449ab126dde2b0c0929ad0/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u65e5\u4e0b\u90e8\u52a0\u5948", 
              value: "https://jable.tv/models/dfea76fd68bc52e0888a78e0fedce073/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5f13\u4e43\u308a\u3080", 
              value: "https://jable.tv/models/06c22ca98d8ec82963046ad17e0fad4a/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u590f\u5e0c\u307e\u308d\u3093", 
              value: "https://jable.tv/models/1c0f1b4475962e88b541f9f0db1584fe/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6c34\u5ddd\u30b9\u30df\u30ec", 
              value: "https://jable.tv/models/7415fde573b12a4e87e83ef33ea354d5/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5b9f\u6d5c\u307f\u304d", 
              value: "https://jable.tv/models/299c2d256b9c509f80302d261ea0b5a9/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5f25\u751f\u307f\u3065\u304d", 
              value: "https://jable.tv/s1/models/mizuki-yayoi/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5929\u5ddd\u305d\u3089", 
              value: "https://jable.tv/models/3e69d39a117c2d25a407dfd57e204e48/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u65b0\u540d\u3042\u307f\u3093", 
              value: "https://jable.tv/models/0dba31ccef2f1fca3563c56dbcf3fa7d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5c0f\u6cfd\u83dc\u7a57", 
              value: "https://jable.tv/models/2ec30dc8e35906a29fe5c8f5b97e6c89/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e09\u539f\u307b\u306e\u304b", 
              value: "https://jable.tv/models/mihara-honoka/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6dbc\u68ee\u308c\u3080", 
              value: "https://jable.tv/models/7cadf3e484f607dc7d0f1c0e7a83b007/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u68ee\u65e5\u5411\u5b50", 
              value: "https://jable.tv/models/1a7543f89b125421e489d98de472ebf4/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u91d1\u677e\u5b63\u6b69", 
              value: "https://jable.tv/models/48ace5552227a2a4f867af73efa18f2d/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }
          ],
          value: "https://jable.tv/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: SORT_ENUM_OPTIONS,
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },

    // \u8863\u7740\u6a21\u5757
    {
      id: "outfit",
      title: "\u8863\u7740",
      description: "\u6309\u8863\u7740\u5206\u7c7b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u9009\u62e9\u8863\u7740",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: SORT_BELONGTO_VALUES,
            },
          enumOptions: [
            { 
              title: "\u9ed1\u4e1d", 
              value: "https://jable.tv/tags/black-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u8089\u4e1d", 
              value: "https://jable.tv/tags/flesh-toned-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e1d\u889c", 
              value: "https://jable.tv/tags/pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u517d\u8033", 
              value: "https://jable.tv/tags/kemonomimi/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6e14\u7f51", 
              value: "https://jable.tv/tags/fishnets/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6c34\u7740", 
              value: "https://jable.tv/tags/swimsuit/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6821\u670d", 
              value: "https://jable.tv/tags/school-uniform/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u65d7\u888d", 
              value: "https://jable.tv/tags/cheongsam/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5a5a\u7eb1", 
              value: "https://jable.tv/tags/wedding-dress/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5973\u50d5", 
              value: "https://jable.tv/tags/maid/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u548c\u670d", 
              value: "https://jable.tv/tags/kimono/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u773c\u955c\u5a18", 
              value: "https://jable.tv/tags/glasses/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u8fc7\u819d\u889c", 
              value: "https://jable.tv/tags/knee-socks/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u8fd0\u52a8\u88c5", 
              value: "https://jable.tv/tags/sportswear/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5154\u5973\u90ce", 
              value: "https://jable.tv/tags/bunny-girl/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "Cosplay", 
              value: "https://jable.tv/tags/Cosplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }
          ],
          value: "https://jable.tv/tags/black-pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: SORT_ENUM_OPTIONS,
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
    // \u5267\u60c5\u6a21\u5757
    {
      id: "plot",
      title: "\u5267\u60c5",
      description: "\u6309\u5267\u60c5\u5206\u7c7b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u9009\u62e9\u5267\u60c5",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: SORT_BELONGTO_VALUES,
            },
          enumOptions: [
            { 
              title: "\u51fa\u8f68", 
              value: "https://jable.tv/tags/affair/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u9189\u7537", 
              value: "https://jable.tv/tags/ugly-man/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4eb2\u5c5e", 
              value: "https://jable.tv/tags/kinship/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7ae5\u8d1e", 
              value: "https://jable.tv/tags/virginity/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u590d\u4ec7", 
              value: "https://jable.tv/tags/avenge/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5de8\u6c49", 
              value: "https://jable.tv/tags/giant/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5a9a\u836f", 
              value: "https://jable.tv/tags/love-potion/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u50ac\u7720", 
              value: "https://jable.tv/tags/hypnosis/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5077\u62cd", 
              value: "https://jable.tv/tags/private-cam/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "NTR", 
              value: "https://jable.tv/tags/ntr/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5e74\u9f84\u5dee", 
              value: "https://jable.tv/tags/age-difference/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e0b\u96e8\u5929", 
              value: "https://jable.tv/tags/rainy-day/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u65f6\u95f4\u505c\u6b62", 
              value: "https://jable.tv/tags/time-stop/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }
          ],
          value: "https://jable.tv/tags/affair/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: SORT_ENUM_OPTIONS,
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
    // \u5730\u70b9\u6a21\u5757
    {
      id: "location",
      title: "\u5730\u70b9",
      description: "\u6309\u5730\u70b9\u5206\u7c7b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u9009\u62e9\u5730\u70b9",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: SORT_BELONGTO_VALUES,
            },
          enumOptions: [
            { 
              title: "\u7535\u8f66", 
              value: "https://jable.tv/tags/tram/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5904\u5973", 
              value: "https://jable.tv/tags/first-night/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u76d1\u72f1", 
              value: "https://jable.tv/tags/prison/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6e29\u6cc9", 
              value: "https://jable.tv/tags/hot-spring/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6cf3\u6c60", 
              value: "https://jable.tv/tags/swimming-pool/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6c7d\u8f66", 
              value: "https://jable.tv/tags/car/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5395\u6240", 
              value: "https://jable.tv/tags/toilet/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5b66\u6821", 
              value: "https://jable.tv/tags/school/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u9b54\u955c\u53f7", 
              value: "https://jable.tv/tags/magic-mirror/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6d17\u6d74\u573a", 
              value: "https://jable.tv/tags/bathing-place/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u56fe\u4e66\u9986", 
              value: "https://jable.tv/tags/library/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5065\u8eab\u623f", 
              value: "https://jable.tv/tags/gym-room/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4fbf\u5229\u5e97", 
              value: "https://jable.tv/tags/store/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }
          ],
          value: "https://jable.tv/tags/tram/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: SORT_ENUM_OPTIONS,
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
    // \u8eab\u6750\u6a21\u5757
    {
      id: "body",
      title: "\u8eab\u6750",
      description: "\u6309\u8eab\u6750\u5206\u7c7b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u9009\u62e9\u8eab\u6750",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: SORT_BELONGTO_VALUES,
            },
          enumOptions: [
            { 
              title: "\u957f\u8eab", 
              value: "https://jable.tv/tags/tall/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u8f6f\u4f53", 
              value: "https://jable.tv/tags/flexible-body/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u8d2b\u4e73", 
              value: "https://jable.tv/tags/small-tits/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7f8e\u817f", 
              value: "https://jable.tv/tags/beautiful-leg/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7f8e\u5c3b", 
              value: "https://jable.tv/tags/beautiful-butt/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7eb9\u8eab", 
              value: "https://jable.tv/tags/tattoo/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u77ed\u53d1", 
              value: "https://jable.tv/tags/short-hair/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u767d\u864e", 
              value: "https://jable.tv/tags/hairless-pussy/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u719f\u5973", 
              value: "https://jable.tv/tags/mature-woman/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5de8\u4e73", 
              value: "https://jable.tv/tags/big-tits/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5c11\u5973", 
              value: "https://jable.tv/tags/girl/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5a07\u5c0f", 
              value: "https://jable.tv/tags/dainty/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }
          ],
          value: "https://jable.tv/tags/tall/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: SORT_ENUM_OPTIONS,
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },    
    // \u89d2\u8272\u6a21\u5757
    {
      id: "role",
      title: "\u89d2\u8272",
      description: "\u6309\u89d2\u8272\u5206\u7c7b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u9009\u62e9\u89d2\u8272",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: SORT_BELONGTO_VALUES,
            },
          enumOptions: [
            { 
              title: "\u4eba\u59bb", 
              value: "https://jable.tv/tags/wife/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u533b\u751f", 
              value: "https://jable.tv/tags/doctor/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u62a4\u58eb", 
              value: "https://jable.tv/tags/nurse/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u8001\u5e08", 
              value: "https://jable.tv/tags/teacher/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7a7a\u59d0", 
              value: "https://jable.tv/tags/flight-attendant/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u9003\u72af", 
              value: "https://jable.tv/tags/fugitive/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u60c5\u4fa3", 
              value: "https://jable.tv/tags/couple/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e3b\u64ad", 
              value: "https://jable.tv/tags/female-anchor/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u98ce\u4fd7\u5a18", 
              value: "https://jable.tv/tags/club-hostess-and-sex-worker/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5bb6\u653f\u5987", 
              value: "https://jable.tv/tags/housewife/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u641c\u67e5\u5b98", 
              value: "https://jable.tv/tags/detective/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u672a\u4ea1\u4eba", 
              value: "https://jable.tv/tags/widow/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5bb6\u5ead\u6559\u5e08", 
              value: "https://jable.tv/tags/private-teacher/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7403\u961f\u7ecf\u7406", 
              value: "https://jable.tv/tags/team-manager/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }
          ],
          value: "https://jable.tv/tags/wife/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: SORT_ENUM_OPTIONS,
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
    // \u4ea4\u5408\u6a21\u5757
    {
      id: "acts",
      title: "\u4ea4\u5408",
      description: "\u6309\u4ea4\u5408\u5206\u7c7b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u9009\u62e9\u4ea4\u5408",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: SORT_BELONGTO_VALUES,
            },
          enumOptions: [
            { 
              title: "\u989c\u5c04", 
              value: "https://jable.tv/tags/facial/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u8db3\u4ea4", 
              value: "https://jable.tv/tags/footjob/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u75c9\u631b", 
              value: "https://jable.tv/tags/spasms/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6f6e\u5439", 
              value: "https://jable.tv/tags/squirting/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6df1\u5589", 
              value: "https://jable.tv/tags/deep-throat/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u63a5\u543b", 
              value: "https://jable.tv/tags/kiss/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u53e3\u7206", 
              value: "https://jable.tv/tags/cum-in-mouth/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u53e3\u4ea4", 
              value: "https://jable.tv/tags/blowjob/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e73\u4ea4", 
              value: "https://jable.tv/tags/tit-wank/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e2d\u51fa", 
              value: "https://jable.tv/tags/creampie/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }
          ],
          value: "https://jable.tv/tags/facial/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: SORT_ENUM_OPTIONS,
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
    // \u73a9\u6cd5\u6a21\u5757
    {
      id: "play",
      title: "\u73a9\u6cd5",
      description: "\u6309\u73a9\u6cd5\u5206\u7c7b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u9009\u62e9\u73a9\u6cd5",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: SORT_BELONGTO_VALUES,
            },
          enumOptions: [
            { 
              title: "\u9732\u51fa", 
              value: "https://jable.tv/tags/outdoor/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4fb5\u72af", 
              value: "https://jable.tv/tags/intrusion/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u8c03\u6559", 
              value: "https://jable.tv/tags/tune/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6346\u7ed1", 
              value: "https://jable.tv/tags/bondage/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u75f4\u6c49", 
              value: "https://jable.tv/tags/chikan/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u75f4\u5973", 
              value: "https://jable.tv/tags/chizyo/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7537M", 
              value: "https://jable.tv/tags/masochism-guy/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6ce5\u9189", 
              value: "https://jable.tv/tags/crapulence/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6ce1\u59ec", 
              value: "https://jable.tv/tags/soapland/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6bcd\u4e73", 
              value: "https://jable.tv/tags/breast-milk/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u653e\u5c3f", 
              value: "https://jable.tv/tags/piss/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u6309\u6469", 
              value: "https://jable.tv/tags/massage/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u591aP", 
              value: "https://jable.tv/tags/groupsex/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u77ac\u95f4\u63d2\u5165", 
              value: "https://jable.tv/tags/quickie/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u96c6\u56e2\u4fb5\u72af", 
              value: "https://jable.tv/tags/gang-intrusion/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }
          ],
          value: "https://jable.tv/tags/outdoor/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: SORT_ENUM_OPTIONS,
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },    
    // \u4e3b\u9898\u6a21\u5757
    {
      id: "theme",
      title: "\u4e3b\u9898",
      description: "\u6309\u4e3b\u9898\u5206\u7c7b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u9009\u62e9\u4e3b\u9898",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: SORT_BELONGTO_VALUES,
            },
          enumOptions: [
            { 
              title: "\u89d2\u8272\u5267\u60c5", 
              value: "https://jable.tv/categories/roleplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5236\u670d\u8bf1\u60d1", 
              value: "https://jable.tv/categories/uniform/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u76f4\u63a5\u5f00\u556a", 
              value: "https://jable.tv/categories/sex-only/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e1d\u889c\u7f8e\u817f", 
              value: "https://jable.tv/categories/pantyhose/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u4e3b\u5974\u8c03\u6559", 
              value: "https://jable.tv/categories/bdsm/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u591aP\u7fa4\u4ea4", 
              value: "https://jable.tv/categories/groupsex/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7537\u53cb\u89c6\u89d2", 
              value: "https://jable.tv/categories/pov/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u51cc\u8fb1\u5feb\u611f", 
              value: "https://jable.tv/categories/insult/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u76d7\u6444\u5077\u62cd", 
              value: "https://jable.tv/categories/private-cam/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u65e0\u7801\u89e3\u653e", 
              value: "https://jable.tv/categories/uncensored/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5973\u540c\u6b22\u6109", 
              value: "https://jable.tv/categories/lesbian/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }
          ],
          value: "https://jable.tv/categories/roleplay/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: SORT_ENUM_OPTIONS,
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
    // \u914d\u6d41\u6a21\u5757
    {
      id: "loadResource",
      title: "Jable \u64ad\u653e\u6e90",
      description: "\u901a\u8fc7\u756a\u53f7\u5339\u914d Jable \u64ad\u653e\u6e90",
      requiresWebView: false,
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 600,
      params: []
    },
    // \u6742\u9879\u6a21\u5757
    {
      id: "misc",
      title: "\u6742\u9879",
      description: "\u6309\u6742\u9879\u5206\u7c7b\u6d4f\u89c8\u5f71\u7247",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          title: "\u9009\u62e9\u6742\u9879",
          type: "enumeration",
          belongTo: {
            paramName: "sort_by",
            value: SORT_BELONGTO_VALUES,
            },
          enumOptions: [
            { 
              title: "\u5f55\u50cf", 
              value: "https://jable.tv/tags/video-recording/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u7efc\u827a", 
              value: "https://jable.tv/tags/variety-show/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u611f\u8c22\u796d", 
              value: "https://jable.tv/tags/thanksgiving/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u8282\u65e5\u4e3b\u9898", 
              value: "https://jable.tv/tags/festival/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u56db\u5c0f\u65f6\u4ee5\u4e0a", 
              value: "https://jable.tv/tags/more-than-4-hours/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            },
            { 
              title: "\u5904\u5973\u4f5c/\u9690\u9000\u4f5c", 
              value: "https://jable.tv/tags/debut-retires/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
            }
          ],
          value: "https://jable.tv/tags/video-recording/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
        },
        {
          name: "sort_by",
          title: "\u6392\u5e8f",
          type: "enumeration",
          description: "\u6392\u5e8f",
          enumOptions: SORT_ENUM_OPTIONS,
        },
        { name: "from", title: "\u9875\u7801", type: "page", description: "\u9875\u7801", value: "1" },
      ],
    },
  ],
  search: {
    title: "全局搜索",
    functionName: "searchGlobal",
    params: [
      { name: "keyword", title: "关键词", type: "input", description: "关键词", value: "" },
      { name: "from", title: "页码", type: "page", description: "页码", value: "1" },
    ],
  },
};


const BASE_URL = "https://jable.tv";

function normalizeUrl(href) {
  if (!href) return "";
  if (href.startsWith("http")) return href;
  if (href.startsWith("/")) return BASE_URL + href;
  return BASE_URL + "/" + href;
}

function safeText(str) {
  return (str || "").replace(/\s+/g, " ").trim();
}

// 拉取 Jable 页面 HTML，带自动重试：jable.tv 的 Cloudflare 会偶发 403/挑战页
// （用户表现为「模块偶发 403，刷新就好」），立刻重试 1~2 次通常即通过。
const JABLE_PAGE_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  Referer: "https://jable.tv/",
};
async function fetchJableHtml(url, attempts) {
  const n = Math.max(1, attempts || 3);
  let lastErr = null;
  // 列表/详情 HTML 禁用中间缓存：榜单(热门/最新)更新及时性靠这个 + URL 时间桶共同保证。
  const pageHeaders = Object.assign({}, JABLE_PAGE_HEADERS, { "Cache-Control": "no-cache", "Pragma": "no-cache" });
  for (let i = 0; i < n; i++) {
    try {
      const resp = await Widget.http.get(url, { headers: pageHeaders });
      const status = Number((resp && (resp.statusCode ?? resp.status)) || 200);
      const html = resp && resp.data;
      // 403/5xx 或太短的响应（CF 挑战页/空体）都视为失败重试
      if (status < 400 && typeof html === "string" && html.length > 500) return html;
      lastErr = new Error(`HTTP ${status}`);
    } catch (e) {
      lastErr = e;
    }
    if (i < n - 1) await new Promise((r) => setTimeout(r, 600 + 500 * i));
  }
  throw lastErr || new Error("无法获取有效的HTML内容");
}

async function search(params = {}) {
  saveTpdbToken(params);
  // 详情页点女优/分类时，App 用 params.peopleId/genreId 重开「owning list module」；若 owning 恰是
  // search(从搜索结果进的详情页即如此)，转发给 loadPage 加载该女优/分类作品——否则 keyword 为空会
  // 回到"请输入关键词开始搜索"提示卡(用户反馈点小野坂ゆいか 头像进作品列表显示空提示的根因)。
  if (params.peopleId || params.genreId) {
    return await loadPage(params);
  }
  const keyword = (params.keyword || "").trim();
  if (!keyword) {
    return [{
      id: "tip",
      type: "text",
      title: "请输入关键词开始搜索"
    }];
  }

  return await searchByKeyword(keyword, params);
}

async function searchGlobal(params = {}) {
  saveTpdbToken(params);
  // 同 search：详情页点女优/分类时转发给 loadPage，避免落到空关键词提示卡。
  if (params.peopleId || params.genreId) {
    return await loadPage(params);
  }
  const keyword = (params.keyword || "").trim();
  if (!keyword) {
    return [{
      id: "tip",
      type: "text",
      title: "请输入关键词开始全局搜索"
    }];
  }

  return await searchByKeyword(keyword, params);
}

async function searchByKeyword(keyword, params = {}) {
  const encodedKeyword = encodeURIComponent(keyword);
  const url = `https://jable.tv/search/${encodedKeyword}/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=${encodedKeyword}`;

  return await loadPage({ ...params, url });
}

async function loadPage(params = {}) {
  const sections = await loadPageSections(params);
  const items = sections.flatMap((section) => section.childItems);
  return items;
}

async function loadPageSections(params = {}) {
  saveTpdbToken(params);
  try {
    const jumpId = params.genreId || params.peopleId;
    let url = jumpId
      ? jumpId + (jumpId.includes("?") ? "" : "?mode=async&function=get_block&block_id=list_videos_common_videos_list")
      : params.url;
    if (!url) {
      throw new Error("\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a");
    }
    if (params["sort_by"]) {
      url += `&sort_by=${params.sort_by}`;
    }
    if (params["from"]) {
      url += `&from=${params.from}`;
    }
    // \u65f6\u6548\u6027\u699c\u5355(\u70ed\u95e8/\u6700\u65b0\u53d1\u5e03/\u6700\u65b0\u66f4\u65b0)\u7b2c 1 \u9875\u6ce8\u5165 60s \u65f6\u95f4\u6876,\u7834\u4e2d\u95f4\u5c42(Forward/CF \u8fb9\u7f18)\u6309 URL \u7f13\u5b58\u7684\u65e7 HTML,
    // \u4fdd\u8bc1\u66f4\u65b0\u53ca\u65f6;\u6876\u7c92\u5ea6\u5185\u4ecd\u547d\u4e2d\u7f13\u5b58(\u4e0d\u62d6\u6162);\u65b0\u7247\u53ea\u5728\u7b2c 1 \u9875,\u6df1\u7ffb\u9875(from>1)\u662f\u5386\u53f2\u5185\u5bb9\u65e0\u9700\u7834\u7f13\u5b58;
    // \u56fa\u5b9a\u5206\u7c7b/\u6f14\u5458/\u7cfb\u5217/\u641c\u7d22\u65e0\u65f6\u6548\u8bc9\u6c42\u4e0d\u7834\u7f13\u5b58(\u7701\u8bf7\u6c42\u3001\u964d CF \u98ce\u9669)\u3002
    const fromPage = parseInt(params["from"], 10) || 1;
    const timeSensitive = /\/(hot|new-release|latest-updates)\//.test(url);
    if (fromPage <= 1 && timeSensitive) {
      let bucket = 0;
      try { bucket = Math.floor(Date.now() / 1000 / 60); } catch (e) {}
      if (bucket) url += `&_=${bucket}`;
    }
    // \u5e26\u91cd\u8bd5\u62c9\u53d6\uff08jable CF \u5076\u53d1 403\uff0c\u91cd\u8bd5\u5373\u8fc7\uff09
    const htmlContent = await fetchJableHtml(url, 3);

    return parseHtml(htmlContent, params);
  } catch (error) {
    throw error;
  }
}

async function parseHtml(htmlContent, options = {}) {
  const $ = Widget.html.load(htmlContent);
  const sectionSelector = ".site-content .py-3,.pb-e-lg-40";
  const itemSelector = ".video-img-box";
  const coverSelector = "img";
  const durationSelector = ".absolute-bottom-right .label";
  const titleSelector = ".title a";

  let sections = [];
  const sectionElements = $(sectionSelector).toArray();

  for (const sectionElement of sectionElements) {
    const $sectionElement = $(sectionElement);
    const items = [];
    const sectionTitle = $sectionElement.find(".title-box .h3-md").first();
    const sectionTitleText = sectionTitle.text();
    const itemElements = $sectionElement.find(itemSelector).toArray();

    if (itemElements && itemElements.length > 0) {
      for (const itemElement of itemElements) {
        const $itemElement = $(itemElement);
        const titleId = $itemElement.find(titleSelector).first();
        const url = titleId.attr("href") || "";

        if (url && url.includes("jable.tv")) {
          const durationId = $itemElement.find(durationSelector).first();
          const coverId = $itemElement.find(coverSelector).first();
          const cover = coverId.attr("data-src") || coverId.attr("src") || "";
          const video = coverId.attr("data-preview");
          const title = titleId.text();
          const duration = durationId.text().trim();
          const dvdId = extractDvdId(url);

          const item = {
            id: url,
            type: "url",
            title: title,
            // 先以 Jable 自带封面兜底（一定有效），下方解析高清封面成功后再替换
            backdropPath: cover,
            posterPath: cover,
            previewUrl: video,
            link: url,
            mediaType: "movie",
            description: dvdId ? `番号: ${dvdId}` : "",
            releaseDate: duration,
            coverUrl: cover,
            image: cover,
            detailPoster: cover,
            playerType: "system",
            _dvdId: dvdId,
            _jableCover: cover,
          };
          items.push(item);
        }
      }
    }

    if (items.length > 0) {
      // 解析各项高清封面（列表页轻量模式 full:false：DMM 只试首选 cid + TPDB 一次请求，提速；
      // 缓存优先二次秒开）。竖/横分别多源择优 + 字节质量门控，hd.posterUrl 必为真高清竖版，
      // 绝不会是糊图或被裁切的横图。仅当 hd 完全无效才退回 Jable 原图。
      await mapWithConcurrency(items, 8, async (it) => {
        if (it._dvdId) {
          const hd = await resolveHdCover(it._dvdId, { full: false, jableCover: it._jableCover }).catch(() => null);
          if (hd && hd.valid) {
            const poster = hd.posterUrl || hd.backdropUrl;
            const backdrop = hd.backdropUrl || hd.posterUrl;
            // 实测(flux.inchmade 1.3.17)：列表海报墙竖位读的是 coverUrl/image,而非官方文档
            // 标称的 posterPath。故竖位四字段(posterPath/detailPoster/coverUrl/image)全填竖版,
            // 只 backdropPath 留横版(供横向列表/详情顶部用)。这样竖位永远是高清竖图。
            it.posterPath = poster;
            it.detailPoster = poster;
            it.coverUrl = poster;
            it.image = poster;
            it.backdropPath = backdrop;
          }
          // hd 无效：保留构建 item 时已设的 Jable 原图兜底（横图，极少数冷门番号）
        }
        delete it._dvdId;
        delete it._jableCover;
      });
      sections.push({
        title: sectionTitleText,
        childItems: items
      });
    }
  }

  return sections;
}

async function loadDetail(link) {
  // 带重试拉取（jable CF 偶发 403，重试即过）
  const htmlContent = await fetchJableHtml(link, 3);
  const $ = Widget.html.load(htmlContent);

  const match = htmlContent.match(/var\s+hlsUrl\s*=\s*['"](.*?)['"]/i);
  const playbackUrl = match && match[1] ? (match[1].startsWith("//") ? `https:${match[1]}` : match[1]) : "";

  if (!playbackUrl) {
    throw new Error("无法获取有效的播放地址，可能需要代理验证");
  }

  const dvdId = extractDvdId(link);
  const jableCover = $('meta[property="og:image"]').attr("content") || $('meta[name="twitter:image"]').attr("content") || "";

  // —— DOM 同步解析（标题/分类/女优基本信息），不发网络，先做好供后续两条网络链使用 ——
  const title = safeText($("section.video-info h4").first().text())
    || safeText($('meta[property="og:title"]').attr("content"))
    || "未知标题";

  const description = safeText($("h5.desc").first().text()) || undefined;

  const genreItems = [];
  $("h5.tags a.cat").each((_, el) => {
    const $a = $(el);
    const href = normalizeUrl($a.attr("href") || "");
    const text = safeText($a.text());
    if (!text || !href) return;
    genreItems.push({ id: href, title: text });
  });

  const tagItems = [];
  $("h5.tags a:not(.cat)").each((_, el) => {
    const $a = $(el);
    const href = normalizeUrl($a.attr("href") || "");
    if (!href.includes("jable.tv")) return;
    const text = safeText($a.text());
    if (!text || text === "•") return;
    tagItems.push({ id: href, title: text });
  });

  const allGenres = [...genreItems, ...tagItems];

  // 先收集女优基本信息（名字 + slug + 模特页链接），再统一解析真实头像。
  const modelInfos = [];
  const seenPeoples = new Set();
  $("div.models a.model").each((_, el) => {
    const $a = $(el);
    const modelHref = normalizeUrl($a.attr("href") || "");
    const $span = $a.find("span").first();
    const name = safeText(
      $span.attr("data-original-title")
      || $span.attr("data-originaltitle")
      || $span.attr("title")
      || $a.attr("data-original-title")
      || $a.find("span[data-original-title]").attr("data-original-title")
    );
    if (!name || seenPeoples.has(name)) return;
    seenPeoples.add(name);
    // slug：/models/yua-mikami/ → yua-mikami（用于推导 DMM actjpgs；纯 hash 形 slug 无效会被门控否掉）
    const slugMatch = String($a.attr("href") || "").match(/\/models\/([^/?#]+)/);
    const slug = slugMatch ? slugMatch[1] : "";
    modelInfos.push({ id: modelHref || name, name, slug, href: modelHref });
  });

  // —— 性能优化：原本「封面→剧照」与「TPDB→女优头像」两条慢网络链是串行执行的，
  //    而播放只需上面已拿到的 playbackUrl。这里改为两链并发，详情加载耗时从 sum 降到 max；
  //    功能完全不变（封面/剧照/头像照常全解析）。——
  const [coverChain, peoples] = await Promise.all([
    // 链A：高清封面（竖/横多源择优 + 质量门控 + 缓存）→ 剧照画廊（逐张并发验证）
    (async () => {
      let detailPosterCover = jableCover;
      let detailBackdropCover = jableCover;
      const hd = dvdId ? await resolveHdCover(dvdId, { full: true, jableCover }).catch(() => null) : null;
      if (hd && hd.valid) {
        detailPosterCover = hd.posterUrl || hd.backdropUrl || jableCover;
        detailBackdropCover = hd.backdropUrl || hd.posterUrl || jableCover;
      }
      const stills = await filterValidCoverUrls(buildGalleryFromCover(hd, dvdId));
      return { detailPosterCover, detailBackdropCover, stills };
    })(),
    // 链B：并发解析每个女优真实头像（gfriends → JavDB → DMM）
    (async () => {
      return await Promise.all(modelInfos.map(async (m, idx) => {
        const avatar = await resolveActressAvatar(m.slug, m.name).catch(() => "");
        return {
          id: m.id,
          title: m.name,
          avatar: avatar || buildInitialAvatar(m.name), // 都没有 → 姓名首字头像（不用默认灰图）
        };
      }));
    })(),
  ]);
  const detailPosterCover = coverChain.detailPosterCover;
  const detailBackdropCover = coverChain.detailBackdropCover;
  const stills = coverChain.stills;

  // 预告片：纯拼接地址（不访问外站，不阻塞）；封面直接用已验证的横版封面，杜绝 now_printing
  const trailerUrl = dvdId ? buildJavTrailersFallbackUrl(dvdId) : "";
  const trailers = [];
  if (trailerUrl) {
    const tc = detailBackdropCover || stills[0] || detailPosterCover || "";
    trailers.push({ coverUrl: tc, posterPath: tc, backdropPath: tc, image: tc, url: trailerUrl });
  }

  const relatedItems = [];
  const seenRelated = new Set([link]);
  $("div.video-img-box").each((_, el) => {
    if (relatedItems.length >= 12) return false;
    const $item = $(el);
    const $a = $item.find("div.img-box a").first();
    const recHref = $a.attr("href") || "";
    const recLink = normalizeUrl(recHref);
    if (!recLink || seenRelated.has(recLink) || !recLink.includes("jable.tv/videos/")) return;
    seenRelated.add(recLink);

    const $img = $item.find("img").first();
    const recCover = $img.attr("data-src") || "";
    const recTitle = safeText($item.find("h6.title a").first().text()) || safeText($img.attr("alt")) || "相关视频";
    const recDuration = safeText($item.find(".absolute-bottom-right .label").first().text()) || undefined;

    const $subTitle = $item.find("p.sub-title");
    const subNodes = [];
    $subTitle.contents().each((_, node) => {
      if (node.type === "text") {
        const t = node.data.replace(/\s+/g, "");
        if (t) subNodes.push(t);
      }
    });
    const recViews = subNodes[0] || undefined;

    const descParts = [];
    if (recDuration) descParts.push(`时长: ${recDuration}`);
    if (recViews)    descParts.push(`观看: ${recViews}`);

    const itemCover = recCover || detailPosterCover || jableCover;
    relatedItems.push({
      id: recLink,
      type: "url",
      title: recTitle,
      backdropPath: itemCover || undefined,
      posterPath: itemCover || undefined,
      durationText: recDuration,
      description: descParts.length ? descParts.join(" | ") : undefined,
      mediaType: "movie",
      link: recLink,
    });
  });

  const item = {
    id: link,
    type: "detail",
    title,
    description,
    videoUrl: playbackUrl,
    playerType: "ijk",
    customHeaders: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      "Referer": link,
      "Origin": "https://jable.tv"
    },
    // 字段语义(以官方 demo.js 回退链为准)：
    //   竖图位: posterPath → backdropPath → coverUrl
    //   横图位: backdropPath → coverUrl → posterPath
    //   详情页海报位: detailPoster 覆盖 posterPath(专用)
    // 故 posterPath/detailPoster 必须是竖版，backdropPath 是横版，coverUrl 作横图位兜底用横版。
    posterPath: detailPosterCover,      // 竖版海报
    detailPoster: detailPosterCover,    // 详情页海报位(专用,必须竖版!之前误填横版导致详情竖位变横图)
    backdropPath: detailBackdropCover,  // 横版大图
    coverUrl: detailBackdropCover,      // 通用兜底(横图位用),填横版
    image: detailBackdropCover,         // 非标准别名,保留横版
    backdropPaths: stills,
    genreItems: allGenres.length > 0 ? allGenres : undefined,
    peoples: peoples.length > 0 ? peoples : undefined,
    relatedItems,
    trailers: trailers,
    previewUrl: trailerUrl || ""
  };

  return item;
}

// ==================== HD Cover Generation, JavTrailers Gallery, and Trailer (adapted from MissAV 3.0) ====================

const JAVTRAILERS_URL_CACHE = {};
const JAVTRAILERS_URL_PROMISE_CACHE = {};
const JAVTRAILERS_FETCH_TIMEOUT_MS = 1200;
const JAVTRAILERS_MGSTAGE_PREFIXES = new Set(["ABF", "ABW", "JUFE", "MAAN", "PPT", "SIRO", "LUXU", "GANA", "ABP", "CHN"]);
const JAVTRAILERS_GALLERY_BASE_URL = "https://javtrailers.com";
const JAVTRAILERS_GALLERY_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  "Referer": "https://javtrailers.com/",
  "Connection": "keep-alive"
};

// 缺图占位识别：DMM/FANZA 对尚未上架封面的番号会 302 跳转到 now_printing 占位图，
// 真实封面则直接返回 200；MGStage 缺图返回 403。这里禁用自动重定向，凡 3xx/4xx、
// Location 指向 now_printing、或命中已知占位图字节数者，一律判为无效并回退站内封面。
const PLACEHOLDER_URL_RE = /now[_-]?printing|nowprinting|no[_-]?image|noimage/i;
const PLACEHOLDER_BYTE_SIZES = new Set([142, 154, 2732, 3424, 19378]);

// 探测封面图，返回其字节大小；占位(now_printing 302)、4xx、过小或命中已知占位字节数 → 0。
// 字节大小用于区分 aws ps 的高清版(命中≥250KB)与回落小图(≤16KB)。
async function probeCoverSize(url) {
  if (!url) return 0;
  try {
    // Referer 按图源选择：MGStage 要求自家 referer；fourhoi(MissAV CDN) 有防盗链，
    // 带 dmm referer 会 403、不带则放行；jable CDN 用自家 referer；其余默认 dmm。
    const referer = /mgstage/i.test(url) ? "https://www.mgstage.com/"
      : /fourhoi|missav/i.test(url) ? ""
      : /jable/i.test(url) ? "https://jable.tv/"
      : "https://www.dmm.co.jp/";
    const reqHeaders = {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    };
    if (referer) reqHeaders["Referer"] = referer;
    const resp = await Widget.http.get(url, {
      allow_redirects: false,
      timeout: 8000,
      headers: reqHeaders,
    });
    if (!resp) return 0;

    // 状态码：3xx（缺图重定向到 now_printing）或 4xx/5xx（不存在/被拒）→ 无效
    const status = Number(resp.statusCode ?? resp.status ?? resp.code ?? 0);
    if (status >= 300) return 0;

    // 最终地址指向 now_printing → 无效（兼容框架仍自动跟随重定向的情形）
    const headers = resp.headers || {};
    const location =
      headers.location || headers.Location || headers["content-location"] ||
      resp.url || resp.finalUrl || resp.responseURL || "";
    if (PLACEHOLDER_URL_RE.test(String(location))) return 0;

    // 响应体大小
    const data = resp.data;
    if (!data) return 0;
    let size = 0;
    if (typeof data === "string") size = data.length;
    else if (typeof data.byteLength === "number") size = data.byteLength;
    else if (typeof data.length === "number") size = data.length;
    if (PLACEHOLDER_BYTE_SIZES.has(size)) return 0; // 命中已知占位图字节数（框架忽略 allow_redirects 时的兜底）
    if (size < 1500) return 0; // 过小内容（重定向 HTML / 损坏图）
    return size;
  } catch (e) {
    // 非 2xx（含 302/403/404）抛异常或网络错误 → 视为无效
    return 0;
  }
}

// 验证封面 URL 是否有效（非占位 / 非缺失）
async function verifyCoverUrl(url) {
  return (await probeCoverSize(url)) > 0;
}

// 并发验证一批封面 URL，返回其中验证通过的（保持原顺序）。用于过滤剧照画廊里的占位图。
async function filterValidCoverUrls(urls) {
  const list = (urls || []).filter(Boolean);
  if (list.length === 0) return [];
  const results = await Promise.all(list.map((u) => verifyCoverUrl(u).catch(() => false)));
  return list.filter((_, i) => results[i]);
}

// ==================== 封面解析：前缀补全 + 多候选 + 验证 + 缓存 ====================
// 很多"占位"番号其实 DMM 上有真图，只是 contentId 缺了厂牌数字前缀（如 milk00291→h_1240milk00291）。
// 厂牌表命中不了的，用下方通用前缀轮询兜底；验证只打轻量的 ps 小图（DMM 同作品 ps/pl 同存同缺）。
const DMM_GENERIC_PREFIXES = ["", "1", "h_086", "118", "h_1240", "h_1156", "h_346", "55", "5", "h_237", "h_730", "h_565"];

// DMM 高清 CDN：aws 镜像存的是厂商上传的「原始分辨率母版」——有 2K 母版的番号能拿到
// pl 2184×1467 / ps 1032×1467（无 2K 母版时与 pics 同图 800×53x，aws 兜底也不吃亏）。
// digital 路径：pics_dig/digital/video/<cid>；mono 路径在 aws 上要去掉 /adult/（MDCX 社区验证）：
// pics_dig/mono/movie/<cid>（带 /adult/ 会 404）。例：1start285 在 pics mono 只有 800×537，
// aws mono 却有 2184×1467 横版 + 1032×1467 原生竖版。
const AWS_DMM_BASE = "https://awsimgsrc.dmm.co.jp/pics_dig/digital/video";
const AWS_DMM_MONO_BASE = "https://awsimgsrc.dmm.co.jp/pics_dig/mono/movie";
// aws ps 竖版：命中高清≥250KB、回落小图≤16KB，取 40KB 阈值判定是否为高清竖版。
const HD_MIN_BYTES = 40000;
// 横版背景门控：清晰横版(如 TPDB 800×535≈180KB、DMM pl 2K)远大于糊图(147×200≈8KB)，取 30KB 阈值。
const HD_BACKDROP_MIN_BYTES = 30000;

// 番号 → 高清封面结果缓存（永久；番号对应的 DMM cid 是固定的）。解决重复探测导致的卡顿。
// v3：图源升级到 aws 高清 CDN；v4：接入 TPDB 兜底；
// v5：质量门控重构；v6：横版也加清晰度门控(糊横版改用清晰竖版填)，修复 TPDB 147×200 糊背景；
// v7：修正 numMap 错误前缀(S1/IP/MOODYZ 系实为裸 cid) + JUFE 改走 DMM；
// v8：新增无码/平台系源(fourhoi 横版 + TPDB /scenes 竖版)；
// v9：内置 TPDB token 兜底 + DMM 横版解耦(ps糊也取高清pl) + fourhoi 横版兜底 +
// Photon 裁切竖版(杜绝横版填充竖版)，竖横全高清重解析，升版淘汰旧缓存。
// v10：根治「竖向变横向糊图」——TPDB 请求加重试且区分网络失败/无收录(失败不缓存)；
// 降级结果绝不固化缓存(仅竖真高清+横高清才缓存)；从 TPDB hit.image 反解 DMM 真实 cid+路径
// (含 mono/movie/adult 路径，解决 NAMH 类新厂牌)；末路横版经 Photon 裁竖图、全源皆无用
// jable 封面裁竖图兜底(竖版永不空缺/永是竖图)；剧照画廊跟随 cid 真实路径。升版淘汰旧缓存。
// v11：根治「竖版=横版裁切+水印+糊」——实测 TPDB posters.full 是整张横版封套压进 800×1200
// 的 thumbor 智能裁切(常含厂牌水印+upscale 放大糊化，SSIS/STARS/FSDSS/IPZZ/SONE/START 系全中招，
// NAMH-049 因源图过小放大成超糊)，且被 v10 误判为"完整成功态"永久缓存。v11 竖版主力改为
// 「DMM 高清封套右半正面裁切」(Photon 多子域轮换)，TPDB 合成图降为兜底且不再固化缓存；
// 反解扩展 pics.r18.com/javdatabase.com 形态(TPDB 约一半收录存的是这两家镜像地址，v10 只认
// dmm.co.jp 致反解失败错过高清直连)；新增 DMM mono 直探(NAMH/START 系无补零 cid，TPDB 不可用
// 也能直命中)。升版强制淘汰已固化的水印糊图缓存。
// v12：横竖分辨率拉满——aws CDN 存的是厂商原始母版，mono 路径在 aws 上须去 /adult/
// (pics_dig/mono/movie/<cid>，MDCX 社区验证)：mono 番号由此拿到 2K 横版+1032×1467 原生竖版
// (如 START-285 从 800×537 升到 2184×1467)。注：部分番号(老 S1/FALENO 等)厂商只发布过
// 800px 母版，全网(DMM/TPDB/javdatabase/MissAV)同源同图，800 即物理上限。升版重解析。
// v13：修复 START-023 这类前导零番号：DMM digital 猜 1start00023 会落 2732B 占位，真实高清在
// mono 的 1start023 与 fourhoi 的 start-023；列表轻量模式也要试 mono，fourhoi 保留原始补零 slug。
// v14：去隐私化——移除内置 TPDB token(改由用户 globalParams 自填，不填则 TPDB 源跳过)；
// 新增 netflav 作为无 token 的 cid 发现主力源(API 直存 DMM 官方图地址，反解 cid+路径比 TPDB
// 更准：START-285 的 v 后缀 cid、NAMH 的 mono 前缀都能拿到)。netflav 命中后直连 DMM 高清 +
// 封套裁切竖版，效果等同原 TPDB；TPDB 降为「用户填 token 时」的补充源。升版淘汰旧缓存。
const COVER_CACHE_PREFIX = "jable_cover_v14:";

// ==================== TPDB（ThePornDB）高清海报兜底 ====================
// DMM/MGStage 都缺图时，用 TPDB API 取高清海报（覆盖率高、含合成 800×1200 竖版海报）。
// Token 经 globalParams 注入到 list 类函数的 params，但 loadDetail 拿不到 globalParams，
// 故在 list 函数里把 token 落到 storage，detail/封面解析再读出来（storage 桥接）。
const TPDB_TOKEN_KEY = "jable_tpdb_token";
// TPDB token：由用户在 globalParams 设置中填写自己的 token（无内置默认值，避免泄露/共享额度问题）。
// 未填写时 TPDB 兜底源不生效，封面回落到 DMM/MGStage/Jable 原图。
const BUILTIN_TPDB_TOKEN = "";

function saveTpdbToken(params) {
  try {
    const token = String((params && params.tpdb_token) || "").trim();
    if (token) Widget.storage.set(TPDB_TOKEN_KEY, token);
  } catch (e) {}
}

function getTpdbToken() {
  try {
    const raw = Widget.storage.get(TPDB_TOKEN_KEY);
    const t = raw ? String(raw).trim() : "";
    return t || BUILTIN_TPDB_TOKEN;
  } catch (e) { return BUILTIN_TPDB_TOKEN; }
}

// ==================== 无码/平台系番号识别（FC2/HEYZO/Carib/1Pondo/10musume/东京热）====================
// 这些番号 DMM/MGStage/TPDB-jav 三源都没有。横版走 MissAV 图片 CDN(fourhoi.com，
// 实测直连稳定且连发不限速；HEYZO 官方 CDN 限速极狠不可用)；竖版走 TPDB /scenes 端点
// (HEYZO/Carib/1Pondo/10musume 有 800×1200 合成竖版；FC2/东京热 两端点均无收录)。
// 返回 { slugs: fourhoi slug 候选, tpdbQ: TPDB scenes 查询串("" 表示不查) } 或 null(非无码形态)。
function parseUncensoredId(dvdId) {
  const c = cleanDvdId(dvdId).toUpperCase();
  let m = c.match(/^FC2(?:-?PPV)?-?(\d{5,8})$/);
  if (m) return { slugs: [`fc2-ppv-${m[1]}`], tpdbQ: "" }; // FC2 在 TPDB 无收录，不浪费请求
  m = c.match(/^HEYZO-?0*(\d{1,4})$/);
  if (m) {
    const p4 = m[1].padStart(4, "0");
    // fourhoi slug 实测新番不补零(heyzo-2553)、老番补零；TPDB external_id 恒补零(heyzo-0119)
    const slugs = m[1] === p4 ? [`heyzo-${m[1]}`] : [`heyzo-${m[1]}`, `heyzo-${p4}`];
    return { slugs, tpdbQ: `heyzo-${p4}` };
  }
  m = c.match(/^(\d{6})[-_](\d{2,3})$/); // 日期型：Carib(MMDDYY-NNN)/1Pondo(MMDDYY_NNN)/10musume(MMDDYY_NN)
  if (m) return { slugs: [`${m[1]}-${m[2]}`, `${m[1]}_${m[2]}`], tpdbQ: `${m[1]}-${m[2]}` };
  m = c.match(/^([NK])-?(\d{3,4})$/); // 东京热 n/k 系列
  if (m) return { slugs: [`${m[1].toLowerCase()}${m[2].padStart(4, "0")}`], tpdbQ: "" };
  return null;
}

// 带重试的 TPDB GET：返回 { ok, list }。ok=false 表示网络层失败(超时/抛错/非2xx)，
// 调用方据此「不缓存」，留待下次重试；ok=true 表示请求成功(list 可能为空=确实无收录，可缓存)。
// 这是「竖向变横向」糊图 bug 的根治点：并发拥塞下 TPDB 偶发失败，旧代码把失败当「无收录」
// 缓存成 null，导致竖版海报永久丢失、回退糊横图。区分两者后，失败永不固化。
const TPDB_REQ_HEADERS_BASE = {
  "Accept": "application/json",
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
};
async function tpdbGetList(url, token, attempts = 3) {
  for (let i = 0; i < attempts; i++) {
    try {
      const resp = await Widget.http.get(url, {
        timeout: 8000,
        headers: { "Authorization": `Bearer ${token}`, ...TPDB_REQ_HEADERS_BASE },
      });
      const status = Number((resp && (resp.statusCode ?? resp.status)) || 200);
      if (status >= 400) { if (i < attempts - 1) continue; return { ok: false, list: [] }; }
      let body = resp && resp.data;
      if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = null; } }
      const list = (body && body.data) || [];
      return { ok: true, list: Array.isArray(list) ? list : [] };
    } catch (e) {
      // 网络层失败：重试；重试耗尽则报告 ok:false（调用方不缓存）
      if (i < attempts - 1) continue;
      return { ok: false, list: [] };
    }
  }
  return { ok: false, list: [] };
}

// 调 TPDB jav 端点，按 external_id 精确匹配番号，返回整条匹配记录（封面 + 女优都复用它）。
// 带内存缓存，同番号的封面/头像解析只发一次网络请求。
// 缓存策略：仅在「请求成功」(无论是否命中)时缓存；网络失败不缓存，下次重试。
const TPDB_HIT_CACHE = {};
async function fetchTpdbHit(dvdId) {
  const token = getTpdbToken();
  if (!token || !dvdId) return null;
  if (Object.prototype.hasOwnProperty.call(TPDB_HIT_CACHE, dvdId)) return TPDB_HIT_CACHE[dvdId];
  let hit = null;
  let everOk = false; // 是否至少有一次请求成功返回（决定能否缓存）
  const normId = (s) => String(s || "").toLowerCase().replace(/[\s_-]+/g, "");
  // 无码平台番号不在 /jav 端点，直接分流：HEYZO/Carib 系走 /scenes，FC2/东京热两端点皆无(跳过)
  const unc = parseUncensoredId(dvdId);
  if (!unc) {
    const r = await tpdbGetList(`https://api.theporndb.net/jav?q=${encodeURIComponent(dvdId)}`, token);
    if (r.ok) {
      everOk = true;
      // 只收 external_id 精确匹配(分隔符归一)。绝不退首条模糊结果——
      // TPDB 没收录该番号时首条是另一部片，会给冷门番号配上完全错误的封面。
      const want = normId(dvdId);
      hit = r.list.find((it) => normId(it.external_id) === want) || null;
    }
  }
  // /scenes 端点（HEYZO/Carib/1Pondo/10musume 收录在这里）。
  // scenes 搜索模糊度高(搜 112421-001 会带回 112321-001)，只收 external_id 精确匹配，避免错图。
  if (!hit && unc && unc.tpdbQ) {
    const r2 = await tpdbGetList(`https://api.theporndb.net/scenes?q=${encodeURIComponent(unc.tpdbQ)}`, token);
    if (r2.ok) {
      everOk = true;
      const want2 = normId(unc.tpdbQ);
      hit = r2.list.find((it) => normId(it.external_id) === want2) || null;
    }
  }
  // 关键：只有「请求成功过」才缓存结果（含命中与确认无收录）；全部网络失败则不缓存，下次重试。
  if (everOk) TPDB_HIT_CACHE[dvdId] = hit;
  return hit;
}

// 解析高清海报（封面）。返回纯净分字段 { verticalUrl, horizontalUrl, cid, maker:"tpdb" } 或 null。
// verticalUrl 是 thumb 合成的 800×1200，永远清晰；horizontalUrl 是 cdn background，
// 部分番号只有 147×200 糊图（TPDB 直存了 DMM 小图），需调用方 probe 门控后决定是否采用。
// 从 TPDB hit.image 反解 DMM 真实 cid + 路径段。TPDB 直存了官方图地址，
// 据此可拿到「正确的 cid 前缀」与「正确路径」(digital/video 或 mono/movie/adult)，
// 免去插件盲猜前缀。例：
//   sone-097 → cid=sone00097, path=digital/video
//   namh-049 → cid=1namh049,  path=mono/movie/adult（盲猜法到不了的 mono 厂牌+无补零 cid）
//   nact-104 → cid=h_237nact00104, path=digital/video（带 h_237 前缀）
// 实测 TPDB 约一半收录的 image 并非 dmm.co.jp 而是 pics.r18.com（路径同构）或
// javdatabase.com 封面镜像（/covers/full/<cid前2位>/<cid>pl.webp，只含 cid 不含路径段），
// v10 只认 dmm.co.jp 导致这些番号反解失败、错过 DMM 高清直连——v11 三种形态都解。
// 返回 { cid, path }（javdatabase 形态 path 为 ""，由调用方双路径轮询）或 null。
function parseDmmFromTpdbImage(imageUrl) {
  const u = String(imageUrl || "");
  // 形态 1：DMM 官方 .../<path>/<cid>/<cid>ps|pl.jpg
  let m = u.match(/dmm\.co\.jp\/(?:pics_dig\/)?((?:digital\/video|mono\/movie\/adult|mono\/movie|digital\/[a-z0-9]+))\/([^/]+)\/[^/]+\.jpg/i);
  if (m) return { path: m[1], cid: String(m[2]).toLowerCase() };
  // 形态 2：r18 镜像（路径与 DMM 同构）
  m = u.match(/r18\.com\/((?:digital\/video|mono\/movie\/adult|mono\/movie))\/([^/]+)\/[^/]+\.jpe?g/i);
  if (m) return { path: m[1], cid: String(m[2]).toLowerCase() };
  // 形态 3：javdatabase 封面镜像（可反解 cid，但 URL 不含路径段 → path 留空双路径轮询）
  m = u.match(/javdatabase\.com\/covers\/(?:full|thumb)\/[^/]+\/([a-z0-9_]+?)p[sl]\.(?:webp|jpe?g)/i);
  if (m) return { path: "", cid: String(m[1]).toLowerCase() };
  return null;
}

async function fetchTpdbCover(dvdId) {
  // 无 token 时跳过（netflav 已承担 cid 发现 + 兜底角色；用户填了 token 时 TPDB 作为补充源）
  if (!getTpdbToken()) return null;
  const hit = await fetchTpdbHit(dvdId);
  if (!hit) return null;
  const posters = hit.posters || {};
  const background = hit.background || {};
  // verticalUrl = 真竖版海报(800×1200 thumb 合成，必清晰、保证比例不裁切)；不掺横图
  const verticalUrl = posters.full || posters.large || hit.poster || "";
  // horizontalUrl = 横版背景(可能糊，交由调用方门控)；不要 hit.image(常是 dmm 147×200 糊图)
  const horizontalUrl = background.full || background.large || "";
  // 反解 DMM 真实地址：用于让调用方直连 DMM 高清横版/竖版（比 TPDB 合成图更优、且能定位 mono 路径）
  const dmm = parseDmmFromTpdbImage(hit.image);
  if (!verticalUrl && !horizontalUrl && !dmm) return null;
  return {
    verticalUrl,
    horizontalUrl,
    cid: (dmm && dmm.cid) || String(hit.sku || hit.external_id || "").toLowerCase(),
    dmmCid: dmm ? dmm.cid : "",
    dmmPath: dmm ? dmm.path : "",
    maker: "tpdb",
  };
}

// ==================== netflav cid 发现（无 token，替代 TPDB 反解 DMM cid 的角色）====================
// netflav 有免 token、免 Cloudflare 的 JSON 搜索接口 advanceSearchVideo，按番号搜到的有码作品
// 其 preview/preview_hp 字段直存 DMM 官方图地址(含真实 cid + digital/mono 路径)，
// 比 TPDB 反解更直接可靠：START-285→1start00285v(带v后缀，numMap 盲探不到)、NAMH-049→1namh00049
// 等 DMM 前缀表覆盖不到的 cid 都能拿到。无码/平台系(HEYZO/FC2/Carib)返回的是 7mmtv 等非 DMM CDN，
// 不适用——这类仍走 fourhoi 分支，故本函数仅在「有码番号(parts 存在)」时调用。
const NETFLAV_SEARCH_URL = "https://netflav.com/api98/video/advanceSearchVideo";
const NETFLAV_HIT_CACHE = {}; // 会话级：区分「无收录(null)」与「网络失败(无 key)」，对齐 TPDB_HIT_CACHE
let NETFLAV_FAIL_STREAK = 0;
function netflavUsable() { return NETFLAV_FAIL_STREAK < 3; } // 连续失败则本会话跳过

// 规范化番号用于与 netflav code 字段比对：去连字符、去空格、统一小写（SSIS-859/SSIS859/ssis-859 同一）
function normalizeCodeForMatch(code) {
  return String(code || "").replace(/[\s\-_]/g, "").toLowerCase();
}

async function fetchNetflavCover(dvdId) {
  if (!dvdId || !netflavUsable()) return null;
  if (Object.prototype.hasOwnProperty.call(NETFLAV_HIT_CACHE, dvdId)) return NETFLAV_HIT_CACHE[dvdId];
  let result = null;
  try {
    const url = `${NETFLAV_SEARCH_URL}?type=title&page=1&keyword=${encodeURIComponent(dvdId)}`;
    const resp = await Widget.http.get(url, {
      timeout: 9000,
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json",
        "Referer": "https://netflav.com/",
      },
    });
    const status = Number((resp && (resp.statusCode ?? resp.status)) || 200);
    let body = resp && resp.data;
    if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = null; } }
    if (status >= 400 || !body) throw new Error(`HTTP ${status}`);
    NETFLAV_FAIL_STREAK = 0; // 正常响应，重置熔断
    const docs = (body.result && body.result.docs) || [];
    const wantNorm = normalizeCodeForMatch(dvdId);
    // 精确匹配 code 字段（HEYZO 模糊搜索会返回相邻番号，必须比对，不能取首条）
    const hit = docs.find((d) => d && normalizeCodeForMatch(d.code) === wantNorm) || null;
    if (hit) {
      const imgUrl = hit.preview_hp || hit.preview || "";
      // 复用现有 DMM URL 反解器：从 pics.dmm.co.jp/.../<cid>/<cid>pl.jpg 拿 cid+path
      const dmm = parseDmmFromTpdbImage(imgUrl);
      // previewImagesUrl 形如 .../ssis00859jp-~~10~~.jpg（~~N~~ 是上限占位），可反解出剧照画廊真实上限
      const gallery = hit.previewImagesUrl || "";
      if (dmm || imgUrl) {
        result = {
          dmmCid: dmm ? dmm.cid : "",
          dmmPath: dmm ? dmm.path : "",
          backdropUrl: imgUrl,           // netflav 给的横版 pl（DMM 官方封套，可作裁切原料）
          galleryTemplate: gallery,      // 剧照画廊模板（含真实张数上限，比逐张猜 jp-1..10 更准）
          maker: "netflav",
        };
      }
    }
  } catch (e) {
    NETFLAV_FAIL_STREAK++; // 网络/CF 失败累计，触发熔断
    return null; // 网络失败不落缓存，留待重试
  }
  NETFLAV_HIT_CACHE[dvdId] = result; // 命中或确认无收录(null)都缓存
  return result;
}

// 由反解出的 DMM cid+path 生成各 CDN 的横/竖版候选，一律 aws 优先（aws 存原始母版，
// 2K 命中时横竖都超清；无 2K 时与 pics 同图）。mono 的 aws 路径必须去掉 /adult/。
// path 为空（javdatabase 形态反解不出路径段）时，digital/mono 双路径全列，门控自然择真。
function buildDmmUrlsFromCidPath(cid, path, kind) {
  if (!cid) return [];
  const suffix = kind === "poster" ? "ps" : "pl";
  const paths = path ? [path] : ["digital/video", "mono/movie/adult"];
  const urls = [];
  for (const p of paths) {
    if (/mono/.test(p)) {
      urls.push(`${AWS_DMM_MONO_BASE}/${cid}/${cid}${suffix}.jpg`);
      urls.push(`https://pics.dmm.co.jp/mono/movie/adult/${cid}/${cid}${suffix}.jpg`);
    } else {
      urls.push(`${AWS_DMM_BASE}/${cid}/${cid}${suffix}.jpg`);
      urls.push(`https://pics.dmm.co.jp/${p}/${cid}/${cid}${suffix}.jpg`);
    }
  }
  return urls;
}

// 从命中的 DMM 图 URL 反提取路径段（统一归一为 digital/video 或 mono/movie/adult，剧照画廊用；
// aws mono 形态是 pics_dig/mono/movie/ 无 /adult/，归一回 mono/movie/adult）
function pathOfDmmUrl(url) {
  const m = String(url || "").match(/dmm\.co\.jp\/(?:pics_dig\/)?(digital\/video|mono\/movie(?:\/adult)?)\//i);
  if (!m) return "";
  return /^mono/i.test(m[1]) ? "mono/movie/adult" : "digital/video";
}

// ==================== 女优头像解析（gfriends → JavDB → DMM → 首字兜底）====================
// DMM 女优头像 CDN：pics.dmm.co.jp/mono/actjpgs/<罗马音>.jpg（125×125 真头像 >4KB；
// 缺图回 now_printing 占位 90×122=2732B，已在 PLACEHOLDER_BYTE_SIZES）。
const DMM_ACTRESS_BASE = "https://pics.dmm.co.jp/mono/actjpgs";
const AVATAR_MIN_BYTES = 4000; // 真头像 >4KB；占位 2732B
// v4：接入 gfriends 社区头像库(76k+ 张 500×500、按日文名索引)——TPDB(英文名)/DMM(罗马音 slug)
// 都无能为力的日文名/hash-slug 女优由它兜底，升版让此前落到 Jable 小图/首字占位的女优重解析；
// v5/v6：根治「张冠李戴/老照片」——gfriends 厂商目录升序遍历，删 TPDB 位置序配对和
// slug 推导名搜索；TPDB performer 数据已从头像链移除。
// v7：头像链去掉 Jable data-bg/模特页头像。Jable /models/<slug>.jpg 清晰度和覆盖价值低，
// 且会在未探测时挡住 JavDB/DMM 兜底；旧缓存升版丢弃。
const AVATAR_CACHE_PREFIX = "jable_avatar_v7:";

// ==================== gfriends 社区头像库（公共上游仓库，实时更新）====================
// https://github.com/gfriends/gfriends：51 个厂商目录、7.6 万张 500×500 高清头像，文件名即日文名。
// 直接使用公共上游仓库（实时更新+补全），jsdelivr CDN 作图片源（快且稳定）。
// 索引 Filetree.json ~4.6MB：懒加载、会话级内存缓存、失败不固化。
const GFRIENDS_RAW_BASE = "https://cdn.jsdelivr.net/gh/gfriends/gfriends@master/Content";
const GFRIENDS_TREE_URLS = [
  "https://cdn.jsdelivr.net/gh/gfriends/gfriends@master/Filetree.json",
  "https://fastly.jsdelivr.net/gh/gfriends/gfriends@master/Filetree.json",
];
let GFRIENDS_TREE_PROMISE = null;
function loadGfriendsTree() {
  if (!GFRIENDS_TREE_PROMISE) {
    GFRIENDS_TREE_PROMISE = (async () => {
      for (const u of GFRIENDS_TREE_URLS) {
        try {
          const resp = await Widget.http.get(u, {
            timeout: 20000,
            headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" },
          });
          let body = resp && resp.data;
          if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = null; } }
          const content = body && body.Content;
          if (content && typeof content === "object") return content;
        } catch (e) {}
      }
      return null;
    })().then((t) => { if (!t) GFRIENDS_TREE_PROMISE = null; return t; });
  }
  return GFRIENDS_TREE_PROMISE;
}

// 二级索引：Filetree.json 长期未更新(图片已入库但索引未重生成)，直接读公共仓库实时文件树补全新女优。
const GFRIENDS_GH_TREE_URL = "https://api.github.com/repos/gfriends/gfriends/git/trees/master?recursive=1";
let GFRIENDS_GH_TREE_PROMISE = null;
function loadGfriendsTreeFromGitHub() {
  if (!GFRIENDS_GH_TREE_PROMISE) {
    GFRIENDS_GH_TREE_PROMISE = (async () => {
      try {
        const resp = await Widget.http.get(GFRIENDS_GH_TREE_URL, {
          timeout: 60000,
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
            "Accept": "application/vnd.github+json",
          },
        });
        let body = resp && resp.data;
        if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = null; } }
        const arr = body && body.tree;
        if (!Array.isArray(arr)) return null;
        const content = {};
        for (const t of arr) {
          if (!t || t.type !== "blob") continue;
          const m = String(t.path || "").match(/^Content\/([^/]+)\/(.+\.(?:jpe?g|png|webp))$/i);
          if (!m) continue;
          (content[m[1]] || (content[m[1]] = {}))[m[2]] = m[2];
        }
        return Object.keys(content).length ? content : null;
      } catch (e) { return null; }
    })().then((t) => { if (!t) GFRIENDS_GH_TREE_PROMISE = null; return t; });
  }
  return GFRIENDS_GH_TREE_PROMISE;
}

// 异体字差异双向展开
const KANJI_VARIANT_PAIRS = [["緖", "緒"], ["亜", "亞"], ["高", "髙"], ["崎", "﨑"], ["濱", "濵"], ["恵", "惠"], ["辺", "邊"], ["蔵", "藏"], ["真", "眞"]];
function nameVariants(name) {
  const out = new Set();
  const push = (s) => { const t = String(s || "").trim(); if (t) { out.add(t); out.add(t.replace(/\s+/g, "")); } };
  push(name);
  // gfriends Filetree 的别名键大小写不一致（如 Miru→miru.jpg），加入小写变体确保命中
  const lower = String(name || "").toLowerCase();
  if (lower !== name) push(lower);
  for (const [a, b] of KANJI_VARIANT_PAIRS) {
    for (const s of [...out]) { push(s.split(a).join(b)); push(s.split(b).join(a)); }
  }
  return [...out];
}

// gfriends 按日文名查头像。厂商目录升序遍历：0-*精选最优，z-DMM(AI放大老图)排最后。
async function fetchGfriendsAvatar(name) {
  const n = String(name || "").trim();
  if (!n) return "";
  const keys = nameVariants(n).map((v) => `${v}.jpg`);
  const hit1 = await lookupGfriendsInTree(await loadGfriendsTree().catch(() => null), keys);
  if (hit1) return hit1;
  return await lookupGfriendsInTree(await loadGfriendsTreeFromGitHub().catch(() => null), keys);
}

// 在一棵 Content 树（{厂商: {文件名:...}}）里按 keys 查头像 URL。
// 厂商目录升序遍历：0-Hand-Storage(精选)最优、1~9 厂商官网图次之、z-DMM 垫底。
async function lookupGfriendsInTree(tree, keys) {
  if (!tree) return "";
  for (const comp of Object.keys(tree).sort()) {
    const files = tree[comp];
    if (!files || typeof files !== "object") continue;
    for (const k of keys) {
      const v = files[k];
      if (!v) continue;
      const file = String(v).split("?")[0];
      const raw = `${GFRIENDS_RAW_BASE}/${encodeURIComponent(comp)}/${encodeURIComponent(file)}`;
      const mirror = `https://wsrv.nl/?url=${encodeURIComponent(raw.replace(/^https:\/\//, ""))}&w=500&h=500&fit=cover`;
      const hit = await firstActressAvatarUrl([raw, mirror]);
      if (hit) return hit;
    }
  }
  return "";
}

// 常见罗马音转写差异：DMM 多用训令式(tu/si/ti/hu)，Jable slug 多用平文式(tsu/shi/chi/fu)。
function romajiVariants(seg) {
  const v = new Set([seg]);
  v.add(seg.replace(/tsu/g, "tu").replace(/shi/g, "si").replace(/chi/g, "ti").replace(/fu/g, "hu"));
  v.add(seg.replace(/ou/g, "o").replace(/uu/g, "u")); // 长音简写
  return [...v].filter(Boolean);
}

// 由 Jable model slug(名-姓，如 yua-mikami)推导 DMM actjpgs 候选(姓_名/名_姓 + 罗马音变体)。
function buildDmmActressCandidates(slug) {
  const s = String(slug || "").toLowerCase().replace(/[^a-z-]/g, "");
  if (!s) return [];
  const out = [];
  const seen = new Set();
  const push = (id) => { if (id && !seen.has(id)) { seen.add(id); out.push(`${DMM_ACTRESS_BASE}/${id}.jpg`); } };
  const parts = s.split("-").filter(Boolean);
  if (parts.length >= 2) {
    const first = parts[0], last = parts.slice(1).join("");
    // 姓_名(DMM 主流) 与 名_姓 两种顺序，各套罗马音变体
    for (const a of romajiVariants(last)) for (const b of romajiVariants(first)) push(`${a}_${b}`);
    for (const a of romajiVariants(first)) for (const b of romajiVariants(last)) push(`${a}_${b}`);
  } else {
    for (const a of romajiVariants(s)) push(a); // 单名(如 julia)
  }
  return out;
}

// 姓名首字头像（无真实头像时的兜底，替代默认灰图）。样式对齐 App 暗色 UI：
// 深灰圆底(#3a3a3c)+白色常规字重（与站内分类标签胶囊观感一致），不再用蓝灰粗体。
function buildInitialAvatar(name) {
  const n = String(name || "").trim();
  const ch = n ? [...n][0] : "?"; // 取首个字符（兼容多字节）
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(ch)}&size=256&background=3a3a3c&color=ffffff&font-size=0.45&rounded=true`;
}

// 头像专用门控：probe 字节 ≥AVATAR_MIN_BYTES 才算真头像（占位 2732B 被否）。
async function firstActressAvatarUrl(urls) {
  const list = (urls || []).filter(Boolean);
  if (!list.length) return "";
  const sizes = await Promise.all(list.map((u) => probeCoverSize(u).catch(() => 0)));
  for (let i = 0; i < list.length; i++) if ((sizes[i] || 0) >= AVATAR_MIN_BYTES) return list[i];
  return "";
}

// ==================== JavDB 按女优日文名搜索头像（身份安全兜底）====================
// 浏览器实测：javdb.com/search?q=<名>&f=actor 的演员卡片结构为
//   <div class="box actor-box"><a href="/actors/<slug>" title="<名>">
//       <figure class="image"><img class="avatar" src="https://c0.jdbstatic.com/avatars/<slug前2位小写>/<slug>.jpg"></figure>
//       <strong><名></strong></a></div>
// 用日文名精确匹配 title/strong（避免拿错人），命中即取其 avatar(100×100，比 gfriends 500×500 小，
// 故排在 gfriends/同站源之后)。javdb 走 Cloudflare，可能被墙——超时短、连失多次熔断、失败不固化。
const JAVDB_AVATAR_CACHE = {};
let JAVDB_FAIL_STREAK = 0;
function javdbUsable() { return JAVDB_FAIL_STREAK < 3; } // 连续 3 次失败(CF/被墙)则本会话跳过，避免拖慢
async function fetchJavdbAvatar(name) {
  const n = String(name || "").trim();
  if (!n || !javdbUsable()) return "";
  if (Object.prototype.hasOwnProperty.call(JAVDB_AVATAR_CACHE, n)) return JAVDB_AVATAR_CACHE[n];
  let avatar = "";
  try {
    const url = `https://javdb.com/search?q=${encodeURIComponent(n)}&f=actor`;
    const resp = await Widget.http.get(url, {
      timeout: 9000,
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-TW,zh;q=0.9,ja;q=0.8,en;q=0.7",
        "Referer": "https://javdb.com/",
      },
    });
    const status = Number((resp && (resp.statusCode ?? resp.status)) || 200);
    const html = resp && resp.data;
    if (status >= 400 || typeof html !== "string" || html.length < 500) throw new Error(`HTTP ${status}`);
    JAVDB_FAIL_STREAK = 0; // 拿到正常页面：CF 没拦，重置熔断计数
    const $ = Widget.html.load(html);
    const wantSet = new Set(nameVariants(n)); // 含异体字归一，双向匹配
    const norm = (s) => String(s || "").replace(/\s+/g, "").trim();
    const cands = [];
    $(".actor-box a[href^='/actors/'], a.box[href^='/actors/']").each((_, el) => {
      const $a = $(el);
      const slug = (($a.attr("href") || "").match(/\/actors\/([A-Za-z0-9]+)$/) || [])[1] || "";
      if (!slug) return; // 跳过 /actors/censored 等分类链接
      const title = norm($a.attr("title") || $a.find("strong").first().text());
      const img = $a.find("img").attr("src") || $a.find("img").attr("data-src") || "";
      cands.push({ slug, title, img });
    });
    // 优先：日文名精确匹配的卡片；其次：构造 CDN 地址（slug 前 2 位小写目录）
    let pick = cands.find((c) => wantSet.has(c.title) || [...wantSet].some((w) => norm(w) === c.title));
    if (!pick && cands.length === 1) pick = cands[0]; // 仅一个结果时可信
    if (pick) {
      const built = pick.slug ? `https://c0.jdbstatic.com/avatars/${pick.slug.slice(0, 2).toLowerCase()}/${pick.slug}.jpg` : "";
      avatar = await firstActressAvatarUrl([pick.img, built]);
    }
  } catch (e) {
    JAVDB_FAIL_STREAK++; // 网络/CF 失败累计，触发熔断
    avatar = "";
  }
  if (avatar) JAVDB_AVATAR_CACHE[n] = avatar; // 仅缓存命中；空结果不固化，留待重试
  return avatar;
}

// 解析单个女优头像（v7：只使用明确有增益的外部头像源）：
//   1) gfriends 社区头像库（按日文名键控索引，构造上人就是对的；目录升序=精选/官网图优先；
//      Filetree.json 滞后时自动回落到 GitHub 实时文件树，补上彩月七緒等新增女优）
//   2) JavDB 按日文名搜索（日文名精确匹配，身份安全；补 gfriends Content 都没有的女优，100×100）
//   3) DMM actjpgs（125×125 老照片，同名可能撞前辈 —— 最后兜底）
//   4) 都没有 → 返回空，由上层用「姓名首字」占位（深灰底白字样式）。
// 带缓存(按 slug；无 slug 用 name)。头像链路不再使用 TPDB，避免脏 performer 数据覆盖正确头像。
async function resolveActressAvatar(slug, name) {
  const cacheKey = AVATAR_CACHE_PREFIX + (slug || name || "");
  if (slug || name) {
    try { const c = Widget.storage.get(cacheKey); if (c) return c; } catch (e) {}
  }

  let avatar = "";
  // 1) gfriends（日文名直查，500×500 精选/官网图）
  if (!avatar && name) avatar = await fetchGfriendsAvatar(name).catch(() => "");

  // 2) JavDB 按日文名搜索（身份安全：日文名精确匹配；补 gfriends Content 都没有的女优）
  if (!avatar && name) avatar = await fetchJavdbAvatar(name).catch(() => "");

  // 3) DMM actjpgs（slug 推导，老照片兜底）
  if (!avatar && slug) avatar = await firstActressAvatarUrl(buildDmmActressCandidates(slug));

  // 只缓存「拿到真头像」的结果；空结果不缓存，留待下次(数据补全/网络恢复)重试。
  if (avatar && (slug || name)) { try { Widget.storage.set(cacheKey, avatar); } catch (e) {} }
  return avatar;
}
function getCachedCover(dvdId) {
  if (!dvdId) return null;
  try {
    const raw = Widget.storage.get(COVER_CACHE_PREFIX + dvdId);
    if (!raw) return null;
    return typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch (e) { return null; }
}
function setCachedCover(dvdId, data) {
  if (!dvdId) return;
  try { Widget.storage.set(COVER_CACHE_PREFIX + dvdId, JSON.stringify(data)); } catch (e) {}
}

// 生成 DMM contentId 候选。full=false（列表页）只返回首选 1 个；full=true（详情页）补通用前缀轮询。
function buildDmmContentIdCandidates(parts, full) {
  if (!parts) return [];
  const plain = parts.plainCode;
  const out = [];
  const seen = new Set();
  const push = (cid) => { if (cid && !seen.has(cid)) { seen.add(cid); out.push(cid); } };
  push(parts.code);   // parseJavCodeParts 里 numMap 推导的首选 cid
  if (!full) return out.slice(0, 1);
  push(plain);
  for (const p of DMM_GENERIC_PREFIXES) push(`${p}${plain}`);
  return out;
}

function buildDmmMonoContentIdCandidates(parts, full) {
  if (!parts) return [];
  const p = parts.prefixLower;
  const out = [];
  const seen = new Set();
  const push = (cid) => { if (cid && !seen.has(cid)) { seen.add(cid); out.push(cid); } };
  push(`1${p}${parts.number3}`);
  push(`${p}${parts.number3}`);
  if (full) {
    push(`1${p}${parts.number5}`);
    push(`${p}${parts.number5}`);
  }
  return out;
}

function buildFourhoiCoverSlugs(parts, unc) {
  if (unc) return unc.slugs || [];
  if (!parts) return [];
  const nRaw = String(parts.number || "");
  const nInt = String(parseInt(nRaw, 10));
  const out = [];
  const seen = new Set();
  const push = (slug) => { if (slug && !seen.has(slug)) { seen.add(slug); out.push(slug); } };
  push(`${parts.prefixLower}-${nRaw.padStart(3, "0")}`);
  if (nInt && nInt !== "NaN") push(`${parts.prefixLower}-${nInt}`);
  return out;
}

// 验证一组 DMM cid（只验轻量 ps 小图），返回首个有效 cid（保持优先级顺序）
async function firstValidDmmCid(cids) {
  const list = (cids || []).filter(Boolean);
  if (!list.length) return "";
  const psUrls = list.map((cid) => `https://pics.dmm.co.jp/digital/video/${cid}/${cid}ps.jpg`);
  const results = await Promise.all(psUrls.map((u) => verifyCoverUrl(u).catch(() => false)));
  const i = results.findIndex(Boolean);
  return i >= 0 ? list[i] : "";
}

// 验证一组 URL，返回首个有效（保持优先级顺序）
async function firstValidUrl(urls) {
  const list = (urls || []).filter(Boolean);
  if (!list.length) return "";
  const results = await Promise.all(list.map((u) => verifyCoverUrl(u).catch(() => false)));
  const i = results.findIndex(Boolean);
  return i >= 0 ? list[i] : "";
}

// 质量门控：对一组 URL 并发 probe 真实字节，返回首个达到 minBytes 的 { url, size }。
// 用于杜绝"糊图"——DMM 占位/缩略糊图字节都很小(如 90×122≈2.7KB)，真高清竖版 >40KB。
async function firstHdUrl(urls, minBytes) {
  const list = (urls || []).filter(Boolean);
  if (!list.length) return null;
  const sizes = await Promise.all(list.map((u) => probeCoverSize(u).catch(() => 0)));
  // 优先返回第一个达高清阈值的；都不达标则返回第一个"有效但不够清"的(>0)，作降级信息
  let best = null;
  for (let i = 0; i < list.length; i++) {
    const sz = sizes[i] || 0;
    if (sz >= minBytes) return { url: list[i], size: sz, hd: true };
    if (sz > 0 && !best) best = { url: list[i], size: sz, hd: false };
  }
  return best;
}

// ==================== Photon 竖版裁切（v11 起为竖版主力来源）====================
// Jetpack Photon 公共图片代理，i0~i3 四个等价子域轮换（实测单子域连发会 429 限流，换子域即恢复）。
// mode="jacket"：DMM 封套双联横图(左封底/右封面) → crop=52,0,48,100 裁右 48%(正面竖版封面)，
//   实测 ssis00859/1namh049(mono)/h_237nact00104(2K) 输出 600×900 干净无水印、构图即官方竖版海报；
// mode="frame"：16:9 视频帧(jable 封面/无码 cover-n) → 仅 resize=600,900(Photon 居中裁切到 2:3)。
const PHOTON_HOSTS = ["i0.wp.com", "i1.wp.com", "i2.wp.com", "i3.wp.com"];
// Photon 健康度：连续 4 次探测失败视为当前网络不可达(如被墙)，本会话跳过 Photon（避免每项 8s 超时拖垮列表）
let PHOTON_FAIL_STREAK = 0;
function photonUsable() { return PHOTON_FAIL_STREAK < 4; }
function notePhotonProbe(ok) { PHOTON_FAIL_STREAK = ok ? 0 : PHOTON_FAIL_STREAK + 1; }
function photonHostFor(url, salt) {
  let h = 0; const s = String(url || "");
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) & 0x7fffffff;
  return PHOTON_HOSTS[(h + (salt || 0)) % PHOTON_HOSTS.length];
}
function photonCropVertical(horizontalUrl, mode, salt) {
  const u = String(horizontalUrl || "").replace(/^https?:\/\//, "");
  if (!u) return "";
  const params = mode === "frame" ? "resize=600,900" : "crop=52,0,48,100&resize=600,900";
  return `https://${photonHostFor(u, salt)}/${u}?${params}`;
}
// 跨子域逐个探测 Photon 裁切结果，返回首个达高清阈值的 URL（裁切自高清封套时实测 100~120KB）。
async function firstHdPhotonCrop(srcUrl, mode, attempts) {
  if (!srcUrl || !photonUsable()) return "";
  const n = Math.max(1, attempts || 1);
  for (let i = 0; i < n; i++) {
    if (!photonUsable()) break;
    const u = photonCropVertical(srcUrl, mode, i);
    const sz = await probeCoverSize(u).catch(() => 0);
    if (sz >= HD_MIN_BYTES) { notePhotonProbe(true); return u; }
    notePhotonProbe(false);
  }
  return "";
}

// 在 DMM cid 候选里找"竖版 aws ps 真达高清"的那个，返回 { cid, posterUrl, size }。
// 关键修复：直接对 aws ps 探测真实字节(而非只看 pics ps 是否存在)，跳过糊图前缀，
// 命中真正高清的 cid(如 nacr 的 h_237 前缀而非裸 cid)。
async function firstHdDmmCid(cids) {
  const list = (cids || []).filter(Boolean);
  if (!list.length) return null;
  const psUrls = list.map((cid) => `${AWS_DMM_BASE}/${cid}/${cid}ps.jpg`);
  const sizes = await Promise.all(psUrls.map((u) => probeCoverSize(u).catch(() => 0)));
  let fallback = null;
  for (let i = 0; i < list.length; i++) {
    const sz = sizes[i] || 0;
    if (sz >= HD_MIN_BYTES) return { cid: list[i], posterUrl: psUrls[i], size: sz, hd: true };
    if (sz > 0 && !fallback) fallback = { cid: list[i], posterUrl: psUrls[i], size: sz, hd: false };
  }
  return fallback; // 没有达高清阈值的，返回首个存在的(可能是小图)或 null
}

// 核心：解析番号的高清封面（v14）。竖版 poster 与横版 backdrop 分别多源择优 + 字节质量门控：
//   横版优先级：DMM aws pl(2K/800×53x) → MGStage pb → netflav 反解 DMM 直连 → DMM mono 直探
//               → netflav/TPDB background → fourhoi 封套镜像 → jable 原图。
//   竖版优先级（必须真竖图，按「构图+清晰度」降序）：
//     ① 官方真竖图：DMM aws ps 验真高清(少数番号) / MGStage pf
//     ② 封套正面裁切：Photon 裁高清封套右半 600×900（构图即官方竖版海报、无水印——v11 主力，
//        实测完胜 TPDB 合成图）
//     ③ TPDB 800×1200 合成图（实为整张横版封套的智能裁切，常带厂牌水印+upscale 放大；
//        v10 误当主力导致「竖版=横版+水印+糊」，v11 降为 Photon 不可用时的兜底；仅用户填 token 时启用）
//     ④ 清晰横版 Photon 裁竖（封套裁右半/帧图居中）→ jable 封面居中裁竖（末路，竖位永是竖图）
// opts.full：列表页传 false(只试首选 cid/单次裁切探测，提速)；详情页传 true(完整轮询)。
// 缓存(v14)：仅「竖版为①或②（构图+清晰度双达标）且横版高清」才永久缓存；TPDB 合成图、
// 末路裁切等降级态一律不缓存，留待下次重试升级成更优解。
// 返回 { posterUrl, backdropUrl, cid, dmmPath, maker, valid, posterHd }
async function resolveHdCover(dvdId, opts = {}) {
  const empty = { posterUrl: "", backdropUrl: "", cid: "", maker: "", valid: false, posterHd: false };
  if (!dvdId) return empty;
  const full = !!opts.full;

  // 1) 缓存优先：命中即用，避免重复探测（提速关键，二次秒开）
  const cached = getCachedCover(dvdId);
  if (cached) return cached;

  // 无码/平台系番号（FC2/HEYZO/Carib/1Pondo/10musume/东京热）走专属分支；
  // 其余走 DMM/MGStage 厂牌解析（parseJavCodeParts 对 FC2/日期型番号会误析或返回 null）。
  const unc = parseUncensoredId(dvdId);
  const parts = unc ? null : parseJavCodeParts(dvdId);
  if (!unc && !parts) return empty;

  let poster = "";        // 竖版海报 URL
  let posterHd = false;   // 竖版是否达标
  let posterKind = "";    // "real"=官方真竖图 | "crop"=封套正面裁切 | "tpdb"=TPDB合成 | "last"=末路裁切
  let backdrop = "";      // 横版背景 URL
  let backdropHd = false; // 横版是否清晰
  let cid = "";
  let maker = "";
  let dmmPath = "digital/video"; // DMM cid 所属路径(剧照画廊用)；mono 命中时被改写
  // jacketUrl：已验证高清的「DMM 封套双联横图」（右半即官方竖版封面），竖版裁切的最佳原料。
  // DMM pl / fourhoi 有码镜像 / TPDB background 都是这种封套图；无码 cover-n、jable 封面是帧图，不算。
  let jacketUrl = "";

  const rule = parts ? MGSTAGE_COVER_RULES[parts.prefix] : null;

  // ---- 源 A：按番号形态选直连源 ----
  if (unc) {
    // 无码/平台系：MissAV 图片 CDN(fourhoi) 横版 cover-n（16:9 帧图，非封套）。
    // 竖版由下方 TPDB /scenes 或帧图居中裁切补。
    const fh = await firstHdUrl(unc.slugs.map((s) => `https://fourhoi.com/${s}/cover-n.jpg`), HD_BACKDROP_MIN_BYTES);
    if (fh && fh.hd) { backdrop = fh.url; backdropHd = true; maker = "missav"; }
  } else if (rule) {
    // MGStage：竖版 pf(422×600 官方真竖版) / 横版 pb(840×566)
    const mg = buildMgstageCoverCandidatesFromParts(parts, rule);
    const pf = await firstHdUrl(full ? mg.posterCandidates : mg.posterCandidates.slice(0, 1), HD_MIN_BYTES);
    if (pf && pf.hd) { poster = pf.url; posterHd = true; posterKind = "real"; maker = "mgstage"; }
    const pb = await firstHdUrl(full ? mg.backdropCandidates : mg.backdropCandidates.slice(0, 1), HD_BACKDROP_MIN_BYTES);
    if (pb && pb.hd) { backdrop = pb.url; backdropHd = true; if (!maker) maker = "mgstage"; }
    cid = `${parts.prefixLower}-${String(parseInt(parts.number, 10))}`;
  } else {
    // DMM digital：ps 与 pl 独立探测——绝大多数番号 ps 只有 147×200 糊图，真竖版靠 pl 封套裁切。
    // 列表页只试首选 cid(提速)，详情页轮询前缀补全。
    const dmmCids = buildDmmContentIdCandidates(parts, full);
    const hdCid = await firstHdDmmCid(dmmCids);
    if (hdCid && hdCid.cid) {
      cid = hdCid.cid;
      if (hdCid.hd) { poster = hdCid.posterUrl; posterHd = true; posterKind = "real"; maker = "dmm"; } // ps 真高清竖版(少数番号)
    }
    // 横版 pl：优先用 ps 命中的 cid，否则在候选里轮询找 pl 达高清的(aws 可达 2184×1468)
    const plCids = cid ? [cid] : dmmCids;
    const pl = await firstHdUrl(plCids.map((c) => `${AWS_DMM_BASE}/${c}/${c}pl.jpg`), HD_BACKDROP_MIN_BYTES);
    if (pl && pl.hd) {
      backdrop = pl.url; backdropHd = true; jacketUrl = pl.url; if (!maker) maker = "dmm";
      if (!cid) { const m = pl.url.match(/\/video\/([^/]+)\//); if (m) cid = m[1]; }
    }
  }

  // ---- ② 封套正面裁切（提前到 TPDB/netflav 之前：DMM 封套已到手时无需外部源，省请求又快）----
  if (!posterHd && jacketUrl) {
    const u = await firstHdPhotonCrop(jacketUrl, "jacket", full ? 2 : 1);
    if (u) { poster = u; posterHd = true; posterKind = "crop"; }
  }

  // ---- 源 B'：netflav（无 token cid 发现主力）。API 直存 DMM 官方图地址，反解出真实 cid+路径
  //      后直连 DMM 高清——这正是原 TPDB 最值钱的作用，且更准（START-285 的 v 后缀 cid 都能拿到）。
  //      仅有码番号(parts 存在)调用：无码/平台系 netflav 返回非 DMM CDN，不适用（走 fourhoi）。----
  let netflavHadHit = false;   // netflav 是否成功命中（区分「无收录」与「网络失败」，决定缓存）
  if (parts && (!posterHd || !backdropHd)) {
    const nf = await fetchNetflavCover(dvdId).catch(() => null);
    if (nf) {
      netflavHadHit = true;
      // B'-1) 反解 DMM 直连（aws 超清优先、pics 兜底；path 为空时双路径轮询）
      if (nf.dmmCid) {
        if (!backdropHd) {
          const pl = await firstHdUrl(buildDmmUrlsFromCidPath(nf.dmmCid, nf.dmmPath, "backdrop"), HD_BACKDROP_MIN_BYTES);
          if (pl && pl.hd) {
            backdrop = pl.url; backdropHd = true; jacketUrl = pl.url; if (!maker) maker = "dmm";
            if (!cid) { cid = nf.dmmCid; dmmPath = pathOfDmmUrl(pl.url) || nf.dmmPath || "digital/video"; }
          }
        }
        if (!posterHd) {
          const ps = await firstHdUrl(buildDmmUrlsFromCidPath(nf.dmmCid, nf.dmmPath, "poster"), HD_MIN_BYTES);
          if (ps && ps.hd) {
            poster = ps.url; posterHd = true; posterKind = "real"; if (!maker) maker = "dmm";
            if (!cid) { cid = nf.dmmCid; dmmPath = pathOfDmmUrl(ps.url) || nf.dmmPath || "digital/video"; }
          }
        }
      }
      // B'-2) 横版兜底：netflav 自带的 preview(DMM 官方 pl 封套) probe ≥30KB 才采用，并作裁切原料
      if (!backdropHd && nf.backdropUrl) {
        if ((await probeCoverSize(nf.backdropUrl).catch(() => 0)) >= HD_BACKDROP_MIN_BYTES) {
          backdrop = nf.backdropUrl; backdropHd = true;
          if (!jacketUrl) jacketUrl = nf.backdropUrl;
          if (!maker) maker = "netflav";
        }
      }
      // B'-3) 拿到封套后再补一刀正面裁切（netflav 的 pl 是 DMM 官方封套，右半即官方竖版）
      if (!posterHd && jacketUrl) {
        const u = await firstHdPhotonCrop(jacketUrl, "jacket", full ? 2 : 1);
        if (u) { poster = u; posterHd = true; posterKind = "crop"; }
      }
    }
  }

  // ---- 源 B：TPDB（用户填了 token 时作为补充源；无 token 则 fetchTpdbCover 直接返回 null 跳过）。
  //      给合成竖版兜底，更重要的是反解 DMM 真实 cid+路径(直连比合成图更优) ----
  let tpdbHadHit = false;     // TPDB 是否成功命中（区分「无收录」与「网络失败」，决定缓存）
  let tpdbVertical = "";      // TPDB 合成竖版：仅记录，降级为 ③ 兜底
  if (!posterHd || !backdropHd) {
    const tpdb = await fetchTpdbCover(dvdId).catch(() => null);
    if (tpdb) {
      tpdbHadHit = true;
      tpdbVertical = tpdb.verticalUrl || "";
      // B-1) 反解 DMM 直连（aws 超清优先、pics 兜底；r18/javdatabase 形态反解不出路径段时双路径轮询）
      if (tpdb.dmmCid) {
        if (!backdropHd) {
          const pl = await firstHdUrl(buildDmmUrlsFromCidPath(tpdb.dmmCid, tpdb.dmmPath, "backdrop"), HD_BACKDROP_MIN_BYTES);
          if (pl && pl.hd) {
            backdrop = pl.url; backdropHd = true; jacketUrl = pl.url; if (!maker) maker = "dmm";
            if (!cid) { cid = tpdb.dmmCid; dmmPath = pathOfDmmUrl(pl.url) || tpdb.dmmPath || "digital/video"; }
          }
        }
        if (!posterHd) {
          const ps = await firstHdUrl(buildDmmUrlsFromCidPath(tpdb.dmmCid, tpdb.dmmPath, "poster"), HD_MIN_BYTES);
          if (ps && ps.hd) {
            poster = ps.url; posterHd = true; posterKind = "real"; if (!maker) maker = "dmm";
            if (!cid) { cid = tpdb.dmmCid; dmmPath = pathOfDmmUrl(ps.url) || tpdb.dmmPath || "digital/video"; }
          }
        }
      }
      // B-2) 横版：TPDB background(即整张封套图) probe ≥30KB 才采用；有码时可作封套裁切原料
      if (!backdropHd && tpdb.horizontalUrl) {
        if ((await probeCoverSize(tpdb.horizontalUrl).catch(() => 0)) >= HD_BACKDROP_MIN_BYTES) {
          backdrop = tpdb.horizontalUrl; backdropHd = true;
          if (!unc && !jacketUrl) jacketUrl = tpdb.horizontalUrl;
          if (!maker) maker = "tpdb";
        }
      }
    }
  }

  // ---- 源 A2：DMM mono 直探（TPDB 不可用/无收录时兜 mono 厂牌）----
  // mono 系 cid 常无补零(NAMH-049→1namh049、START-285→1start285)，盲猜 digital 路径永远探不到。
  // aws mono(去 /adult/)优先——存原始母版，2K 命中横竖都超清；pics mono 兜底。
  if (parts && !backdropHd) {
    const monoCands = buildDmmMonoContentIdCandidates(parts, full);
    const monoUrls = [];
    for (const c of monoCands) {
      monoUrls.push(`${AWS_DMM_MONO_BASE}/${c}/${c}pl.jpg`);
      if (full) monoUrls.push(`https://pics.dmm.co.jp/mono/movie/adult/${c}/${c}pl.jpg`);
    }
    const mono = await firstHdUrl(monoUrls, HD_BACKDROP_MIN_BYTES);
    if (mono && mono.hd) {
      backdrop = mono.url; backdropHd = true; jacketUrl = mono.url; if (!maker) maker = "dmm";
      const m = mono.url.match(/\/mono\/movie\/(?:adult\/)?([^/]+)\//);
      if (m && !cid) { cid = m[1]; dmmPath = "mono/movie/adult"; }
      // mono 命中后补探 aws ps：2K 母版番号有 1032×1467 原生竖版（如 START-285），比裁切更优
      if (!posterHd && m) {
        const ps = await firstHdUrl([`${AWS_DMM_MONO_BASE}/${m[1]}/${m[1]}ps.jpg`], HD_MIN_BYTES);
        if (ps && ps.hd) { poster = ps.url; posterHd = true; posterKind = "real"; }
      }
    }
  }

  // ---- 源 C：fourhoi（MissAV CDN，用户端必达、免 token）----
  // 有码番号的 cover-n 即 DMM 封套镜像(实测 800×538 同图)：既兜横版，
  // 也是 DMM 两 CDN 都不可达时的封套裁切原料。
  if (!backdropHd || (!unc && !jacketUrl && !posterHd)) {
    const m = backdrop.match(/fourhoi\.com\/([^/]+)\/cover/);
    if (!m) {
      const slugs = buildFourhoiCoverSlugs(parts, unc);
      if (slugs.length) {
        const fh = await firstHdUrl(slugs.map((slug) => `https://fourhoi.com/${slug}/cover-n.jpg`), HD_BACKDROP_MIN_BYTES);
        if (fh && fh.hd) {
          if (!backdropHd) { backdrop = fh.url; backdropHd = true; if (!maker) maker = "missav"; }
          if (!unc && !jacketUrl) jacketUrl = fh.url;
        }
      }
    }
  }

  // ---- 竖版装配（用户硬要求：竖版必须存在、必须竖图、必须高清）----
  // ② 补刀：TPDB/A2/C 阶段新拿到封套的，再试一次正面裁切
  if (!posterHd && jacketUrl) {
    const u = await firstHdPhotonCrop(jacketUrl, "jacket", full ? 2 : 1);
    if (u) { poster = u; posterHd = true; posterKind = "crop"; }
  }
  // ③ TPDB 合成竖版兜底（800×1200 竖图但构图差/可能带水印；Photon 不可用时保证竖位仍是高清竖图）
  if (!posterHd && tpdbVertical) {
    poster = tpdbVertical; posterHd = true; posterKind = "tpdb"; if (!maker) maker = "tpdb";
  }
  const jableCover = String(opts.jableCover || "");
  // ④ 有清晰横版无竖版 → Photon 裁竖（封套裁右半、帧图居中裁），绝不横图原样填竖位
  if (!posterHd && backdropHd && backdrop) {
    poster = photonCropVertical(backdrop, backdrop === jacketUrl ? "jacket" : "frame");
    posterHd = !!poster; posterKind = "last"; if (!maker) maker = "crop";
  }
  // 横版缺清晰图但有清晰竖版 → 横位比例必须是横图！优先用 jableCover(16:9 原站封面,比例正确),
  // 实在没横图源才退用竖版填横位(标记降级,下方绝不缓存固化,留待重试拿到真 pl)。
  // 修复 SONE-385/290/666 等「pl 偶发探测失败 → 竖版被塞进横位变形 + 错误结果被永久缓存」。
  let backdropIsVerticalFallback = false;
  if (!backdropHd && posterHd && poster) {
    if (jableCover) { backdrop = jableCover; backdropHd = true; }
    else { backdrop = poster; backdropHd = true; backdropIsVerticalFallback = true; }
  }

  // 绝境兜底：DMM/TPDB/fourhoi 全源皆无（如 START-678 这类全网无收录的番号）。
  // 横位直接用 Jable 自带封面；竖位经 Photon 居中裁成竖图（jable 封面是 16:9 视频帧）。
  // 这是「禁止竖版空缺/禁止横图原样填竖」的最后保障。
  if (!poster && !backdrop && jableCover) {
    backdrop = jableCover;
    poster = photonCropVertical(jableCover, "frame");
    posterKind = "last";
    if (!maker) maker = "jable";
  }

  const valid = !!(poster || backdrop);
  const res = { posterUrl: poster, backdropUrl: backdrop, cid, dmmPath, maker: valid ? maker : "", valid, posterHd };

  // 缓存固化策略（v11）：仅「竖版为官方真竖图(real)或封套正面裁切(crop)且横版高清」才永久缓存。
  // TPDB 合成图(tpdb)/末路裁切(last)等降级态一律不缓存——留待下次重试升级成更优解，
  // 并发抖动/代理临时不可用产生的次优图绝不会被固化。
  // 例外：TPDB 确认「无收录」(请求成功但无精确匹配)的冷门番号，full 模式且拿到非 jable 真图源
  // 时可缓存，避免每次详情页重复穷尽轮询；jable 末路兜底不缓存（等番号上架图源后自动升级）。
  // backdropIsVerticalFallback：横位是竖版兜底(比例错、且说明 pl 探测本次失败)，属降级态绝不固化，
  // 否则 SONE-385 等会把「竖图填横位」永久缓存，刷新也无法重试拿回真横版 pl。
  const fullSuccess = valid && backdropHd && posterHd && !backdropIsVerticalFallback
    && (posterKind === "real" || posterKind === "crop");
  // 两个外部 cid 发现源(netflav/TPDB)都确认「无收录」时，才认为该番号真没有高清图源，
  // 可缓存极限兜底；任一源未查或网络失败则不缓存，留待重试升级。
  const sourceConfirmedMissing = full && valid && maker !== "jable"
    && !netflavHadHit && !tpdbHadHit
    && (await isNetflavConfirmedMissing(dvdId)) && (await isTpdbConfirmedMissing(dvdId));
  if (fullSuccess || sourceConfirmedMissing) setCachedCover(dvdId, res);
  return res;
}

// netflav 是否「确认无收录」(请求成功但无精确匹配)。读 NETFLAV_HIT_CACHE：
// 有 key 说明请求成功过(命中或确认空)，值为 null 即确认无收录。
async function isNetflavConfirmedMissing(dvdId) {
  try {
    if (Object.prototype.hasOwnProperty.call(NETFLAV_HIT_CACHE, dvdId)) {
      return NETFLAV_HIT_CACHE[dvdId] === null;
    }
  } catch (e) {}
  return false;
}

// 该番号在 TPDB 是否「确认无收录」(请求成功但无精确匹配)。用于区分降级是因「源真没有」
// 还是「网络抖动」——前者可缓存极限兜底，后者绝不缓存留待重试。读 TPDB_HIT_CACHE：
// 有该 key 即说明请求成功过(命中或确认空)，值为 null 即确认无收录。
async function isTpdbConfirmedMissing(dvdId) {
  try {
    if (Object.prototype.hasOwnProperty.call(TPDB_HIT_CACHE, dvdId)) {
      return TPDB_HIT_CACHE[dvdId] === null;
    }
  } catch (e) {}
  return false;
}

// 用解析结果构建剧照画廊 URL（DMM jp-N / MGStage cap_e），供详情页逐张验证过滤
function buildGalleryFromCover(hd, dvdId) {
  if (!hd || !hd.valid) return [];
  if (hd.maker === "dmm" && hd.cid) {
    // 剧照走 DMM CDN jp-N（800×600，存在即可直连）。路径跟随 cid 实际所属路径
    // (digital/video 或反解出的 mono/movie/adult)，写死 digital 会让 mono 番号剧照 404。
    // CDN 选择：mono 路径 aws 镜像常 404 → 用 pics；digital 路径 aws 有超清 → 用 aws。
    // (二选一避免同图 aws+pics 重复出现)
    const path = hd.dmmPath || "digital/video";
    const isMono = /mono/.test(path);
    const base = isMono
      ? `https://pics.dmm.co.jp/${path}/${hd.cid}/${hd.cid}`
      : `${AWS_DMM_BASE}/${hd.cid}/${hd.cid}`;
    const urls = [];
    for (let i = 1; i <= 10; i++) urls.push(`${base}jp-${i}.jpg`);
    return urls;
  }
  if (hd.maker === "mgstage") {
    // 剧照目录跟随厂牌规则的 maker(shirouto/nanpatv/luxutv/...)，不能写死 prestige
    const parts = parseJavCodeParts(dvdId);
    const rule = parts && MGSTAGE_COVER_RULES[parts.prefix];
    if (parts && rule && rule.maker) {
      const prefix = parts.prefixLower;
      const number = String(parseInt(parts.number, 10));
      const urls = [];
      for (let i = 1; i <= 10; i++) {
        urls.push(`https://image.mgstage.com/images/${rule.maker}/${prefix}/${number}/cap_e_${i}_${prefix}-${number}.jpg`);
      }
      return urls;
    }
    return buildMgstageGalleryFromDvdId(dvdId, 10);
  }
  return [];
}

// 分批并发执行（避免列表页一次性发起过多请求被限流）。每批 limit 个并发，批间串行。
async function mapWithConcurrency(arr, limit, fn) {
  const out = [];
  for (let i = 0; i < arr.length; i += limit) {
    const batch = arr.slice(i, i + limit);
    out.push(...(await Promise.all(batch.map(fn))));
  }
  return out;
}

function buildCoverUrlsFromVideoId(videoIdOrTitle) {
  const candidates = buildCoverCandidatesFromVideoId(videoIdOrTitle);
  return {
    posterUrl: candidates.posterCandidates[0] || "",
    backdropUrl: candidates.backdropCandidates[0] || "",
    posterCandidates: candidates.posterCandidates,
    backdropCandidates: candidates.backdropCandidates,
  };
}

// 实测：JUFE 是 DMM(Fitch)厂牌而非 MGStage —— jufe00617 在 aws CDN 有 ps 349KB/pl 971KB
// 超清直连，误归 MGStage 会 403 导致只能拿 TPDB 竖版(横版被糊图门控否掉)。
// 素人系(Jable 上量大、DMM/TPDB 均无)实测直连：SIRO→shirouto、259LUXU→luxutv、
// 200GANA→nanpatv、300MIUM/300MAAN/300NTK→prestigepremium，竖横版+cap_e 剧照齐全。
const MGSTAGE_COVER_RULES = {
  ABF: { maker: "prestige" }, ABW: { maker: "prestige" }, ABP: { maker: "prestige" },
  CHN: { maker: "prestige" }, PPT: { maker: "prestige" }, "390JAC": { maker: "jackson" },
  SIRO: { maker: "shirouto" }, "259LUXU": { maker: "luxutv" }, "200GANA": { maker: "nanpatv" },
  "300MIUM": { maker: "prestigepremium" }, "300MAAN": { maker: "prestigepremium" }, "300NTK": { maker: "prestigepremium" }
};

function parseJavCodeParts(title) {
  const raw = String(title || "").toUpperCase();
  const match = raw.match(/\b([A-Z0-9]+)-?(\d{2,5})\b/);
  if (!match) return null;
  const prefix = match[1];
  const prefixLower = prefix.toLowerCase();
  const number5 = match[2].padStart(5, "0");
  const numMap = {
    WSA: "2",
    FSDSS: "1", FCDSS: "1", FNS: "1", FTHTD: "1",
    FALENO: "1", FGAN: "1", FSNF: "1", FLAV: "1",
    ABP: "118", CHN: "118",
    STARS: "1", STAR: "1", START: "1",
    SODS: "1",
    REBD: "h_346", REBDB: "h_346", GSHRB: "h_346",
    // 实测(直探 aws CDN)：仅 MILK/DLDSS/SDNT/NACT 需数字/厂牌前缀；
    // S1(SSIS/SSNI/SNIS/OFJE/SIVR)、IdeaPocket(IPX/IPZZ/IPZ/IPVR)、
    // MOODYZ系(MIDV/MIDE/MIAA/MIAB/MIMK/MIDA/CAWD/KAWD/MIFD/MIDD)、
    // WAAA/MEYD/WANZ/YUJ/SAME/SONE 均为裸 cid，勿再加前缀(加了反而 404 导致整厂牌 DMM 直连失败)。
    MILK: "h_1240", DLDSS: "1", SDNT: "1", NACT: "h_237"
  };
  return {
    prefix, prefixLower,
    number: match[2],
    number3: match[2].padStart(3, "0"),
    number5,
    code: `${numMap[prefix] || ""}${prefixLower}${number5}`,
    plainCode: `${prefixLower}${number5}`
  };
}

function buildMgstageCoverCandidatesFromParts(parts, rule) {
  if (!parts || !rule || !rule.maker) return { posterCandidates: [], backdropCandidates: [] };
  const prefixLower = parts.prefixLower;
  const number = String(parseInt(parts.number, 10));
  if (!prefixLower || !number || number === "NaN") return { posterCandidates: [], backdropCandidates: [] };
  const dvdDash = `${prefixLower}-${number}`;
  const base = `https://image.mgstage.com/images/${rule.maker}/${prefixLower}/${number}`;
  return {
    posterCandidates: compactUniqueUrls([`${base}/pf_e_${dvdDash}.jpg`, `${base}/pf_o1_${dvdDash}.jpg`]),
    backdropCandidates: compactUniqueUrls([`${base}/pb_e_${dvdDash}.jpg`])
  };
}

function buildDmmCoverCandidatesFromParts(parts) {
  if (!parts) return { posterCandidates: [], backdropCandidates: [] };
  const contentId = String(parts.code || "").toLowerCase().trim();
  if (!contentId) return { posterCandidates: [], backdropCandidates: [] };
  const awsBase = `https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/${contentId}`;
  const picsBase = `https://pics.dmm.co.jp/digital/video/${contentId}`;
  return {
    posterCandidates: compactUniqueUrls([`${awsBase}/${contentId}ps.jpg`, `${picsBase}/${contentId}ps.jpg`]),
    backdropCandidates: compactUniqueUrls([`${awsBase}/${contentId}pl.jpg`, `${picsBase}/${contentId}pl.jpg`])
  };
}

function buildCoverCandidatesFromVideoId(videoIdOrTitle) {
  const parts = parseJavCodeParts(videoIdOrTitle);
  if (!parts) return { posterCandidates: [], backdropCandidates: [] };
  const rule = MGSTAGE_COVER_RULES[parts.prefix];
  if (rule) return buildMgstageCoverCandidatesFromParts(parts, rule);
  return buildDmmCoverCandidatesFromParts(parts);
}

function compactUniqueUrls(urls) {
  const seen = new Set();
  return (urls || []).filter(u => { const c = String(u || "").trim(); if (!c || seen.has(c)) return false; seen.add(c); return true; });
}

// ---- Trailer URL functions ----

function buildJavTrailersFallbackUrl(title) {
  const parts = parseJavCodeParts(title);
  if (!parts) return "";
  const first = parts.code[0];
  const folder = parts.code.slice(0, 3);
  return `https://media.javtrailers.com/hlsvideo/freepv/${first}/${folder}/${parts.code}/playlist.m3u8`;
}

function isJavTrailersMgstageTitle(title) {
  const parts = parseJavCodeParts(title);
  return !!parts && JAVTRAILERS_MGSTAGE_PREFIXES.has(parts.prefix);
}

function shouldFetchJavTrailersPage(title) {
  const parts = parseJavCodeParts(title);
  if (!parts) return false;
  return isJavTrailersMgstageTitle(title) || parts.prefix.includes("VR");
}

function buildJavTrailersPageIds(title) {
  const parts = parseJavCodeParts(title);
  if (!parts) return [];
  const ids = [];
  if (JAVTRAILERS_MGSTAGE_PREFIXES.has(parts.prefix)) ids.push(`118${parts.prefixLower}${parts.number5}`);
  ids.push(parts.code);
  return ids.filter((id, i, a) => id && a.indexOf(id) === i);
}

function extractJavTrailersMediaUrl(html) {
  if (!html || html.includes("Just a moment")) return "";
  const source = String(html);
  const m = source.match(/https:\/\/media\.javtrailers\.com\/[^"'\\\s<]+?(?:\.m3u8|\.mp4)/g);
  if (m && m.length > 0) return m[0];
  const ms = source.match(/https:\/\/sample\.mgstage\.com\/[^"'\\\s<]+?\.mp4/g);
  if (ms && ms.length > 0) return ms[0];
  const d = source.match(/https:\/\/cc3001\.dmm\.co\.jp\/[^"'\\\s<]+?(?:\.m3u8|\.mp4)/g);
  return d && d.length > 0 ? d[0] : "";
}

function fetchJavTrailersPageUrl(pageId) {
  return Widget.http.get(`https://javtrailers.com/video/${pageId}`, { headers: JAVTRAILERS_GALLERY_HEADERS })
    .then(res => extractJavTrailersMediaUrl(res.data))
    .catch(() => "");
}

async function buildJavTrailersUrl(title) {
  const parts = parseJavCodeParts(title);
  if (!parts) return "";
  if (JAVTRAILERS_URL_CACHE[parts.code] !== undefined) return JAVTRAILERS_URL_CACHE[parts.code];
  const fallbackUrl = buildJavTrailersFallbackUrl(title);
  const isMgstage = isJavTrailersMgstageTitle(title);
  if (!shouldFetchJavTrailersPage(title)) { JAVTRAILERS_URL_CACHE[parts.code] = fallbackUrl; return fallbackUrl; }
  if (!JAVTRAILERS_URL_PROMISE_CACHE[parts.code]) {
    const pageIds = buildJavTrailersPageIds(title);
    JAVTRAILERS_URL_PROMISE_CACHE[parts.code] = Promise.all(pageIds.map(id => fetchJavTrailersPageUrl(id)))
      .then(urls => urls.find(Boolean) || (isMgstage ? "" : fallbackUrl))
      .then(url => { if (url || !isMgstage) JAVTRAILERS_URL_CACHE[parts.code] = url; return url; });
  }
  try {
    if (isMgstage) return await JAVTRAILERS_URL_PROMISE_CACHE[parts.code];
    return await Promise.race([JAVTRAILERS_URL_PROMISE_CACHE[parts.code], new Promise(r => setTimeout(() => r(fallbackUrl), JAVTRAILERS_FETCH_TIMEOUT_MS))]);
  } catch (e) { return isMgstage ? "" : fallbackUrl; }
}

function buildTrailerCoverUrl(title) {
  const parts = parseJavCodeParts(title);
  if (!parts) return "";
  const mgPrefixes = new Set(["ABF", "ABW", "JUFE", "SQTE"]);
  if (mgPrefixes.has(parts.prefix)) {
    return `https://image.mgstage.com/images/prestige/${parts.prefixLower}/${parts.number3}/pb_e_${parts.prefixLower}-${parts.number3}.jpg`;
  }
  return `https://pics.dmm.co.jp/digital/video/${parts.code}/${parts.code}pl.jpg`;
}

// ---- JavTrailers Gallery functions ----

function resolveJavTrailersUrl(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${JAVTRAILERS_GALLERY_BASE_URL}${path.startsWith("/") ? path : "/" + path}`;
}

function normalizeText(text) { return (text || "").replace(/\s+/g, " ").trim(); }

function cleanDvdId(raw) {
  return normalizeText(raw)
    .replace(/-UNCENSORED-LEAK$/i, "").replace(/-CHINESE-SUBTITLE$/i, "")
    .replace(/_UNCENSORED_LEAK$/i, "").replace(/_CHINESE_SUBTITLE$/i, "")
    .replace(/\s+/g, "").trim();
}

function normalizeDvdIdForSearch(dvdId) {
  const clean = cleanDvdId(dvdId).toUpperCase();
  const m = clean.match(/^([A-Z]+)[-_ ]*0*(\d+)$/);
  if (m) return `${m[1].toLowerCase()}-${parseInt(m[2], 10)}`;
  return clean.replace(/_/g, "-").replace(/\s+/g, "-").toLowerCase();
}

function normalizeDvdIdForCompare(dvdId) {
  const clean = cleanDvdId(dvdId).toUpperCase();
  const m = clean.match(/([A-Z]+)[-_ ]*0*(\d+)/);
  if (m) return `${m[1]}${parseInt(m[2], 10)}`;
  return clean.replace(/[^A-Z0-9]/g, "");
}

function buildDmmContentIdFromDvdId(dvdId) {
  const clean = cleanDvdId(dvdId).toLowerCase();
  const m = clean.match(/^([a-z]+)[-_ ]*0*(\d+)$/i);
  if (!m) return clean.replace(/[^a-z0-9]/gi, "");
  return `${m[1].toLowerCase()}${String(parseInt(m[2], 10)).padStart(5, "0")}`;
}

function buildDmmGallery(contentId, count) {
  count = count || 10;
  const id = String(contentId || "").toLowerCase().trim();
  if (!id) return [];
  return Array.from({ length: count }, (_, i) => `https://pics.dmm.co.jp/digital/video/${id}/${id}jp-${i + 1}.jpg`);
}

function buildMgstageGalleryFromDvdId(dvdId, count) {
  count = count || 10;
  const clean = cleanDvdId(dvdId).toLowerCase();
  const m = clean.match(/^([a-z]+)[-_ ]*0*(\d+)$/i);
  if (!m) return [];
  const prefix = m[1].toLowerCase();
  const number = String(parseInt(m[2], 10));
  const dvdDash = `${prefix}-${number}`;
  return Array.from({ length: count }, (_, i) => `https://image.mgstage.com/images/prestige/${prefix}/${number}/cap_e_${i + 1}_${dvdDash}.jpg`);
}

function buildMgstageGalleryFromHtmlOrDvdId(html, dvdId, count) {
  count = count || 10;
  const raw = String(html || "").replace(/\\\//g, "/").replace(/&amp;/g, "&").replace(/\\u002F/g, "/");
  const seen = new Set();
  const urls = [];
  const pushUrl = url => { const c = normalizeImageUrl(url); if (c && !seen.has(c)) { seen.add(c); urls.push(c); } };
  const cm = raw.match(/https?:\/\/image\.mgstage\.com\/images\/([^"'\s<>]+?)\/([a-z]+)\/(\d+)\/pf_o\d+_([a-z]+-\d+)\.(?:jpg|jpeg|webp|png)/i);
  if (cm) {
    for (let i = 1; i <= count; i++) pushUrl(`https://image.mgstage.com/images/${cm[1]}/${cm[2].toLowerCase()}/${cm[3]}/cap_e_${i}_${cm[4].toLowerCase()}.jpg`);
    return urls;
  }
  return buildMgstageGalleryFromDvdId(dvdId, count);
}

function extractCompareIdsFromText(text) {
  const raw = String(text || "");
  const ids = [], seen = new Set();
  const patterns = [
    { re: /([a-z]{2,12})[-_\s\/]*0*(\d{2,6})/gi, prefixIdx: 1, numIdx: 2 },
    { re: /(\d+)([a-z]{2,12})0*(\d{2,6})/gi, prefixIdx: 2, numIdx: 3 },
  ];
  for (const { re, prefixIdx, numIdx } of patterns) {
    let m; while ((m = re.exec(raw)) !== null) {
      const prefix = m[prefixIdx] || "", num = m[numIdx] || "";
      if (!prefix || !num) continue;
      const id = `${prefix.toUpperCase()}${parseInt(num, 10)}`;
      if (!seen.has(id)) { seen.add(id); ids.push(id); }
    }
  }
  return ids;
}

function imageUrlMatchesDvd(url, dvdId, contentId) {
  const target = normalizeDvdIdForCompare(dvdId);
  const cc = normalizeDvdIdForCompare(contentId);
  const candidates = extractCompareIdsFromText(url);
  if (!target && !cc) return true;
  return candidates.some(c => c === target || c === cc || target.includes(c) || c.includes(target) || cc.includes(c) || c.includes(cc));
}

function normalizeImageUrl(url) {
  if (!url) return "";
  let clean = String(url).replace(/\\\//g, "/").replace(/&amp;/g, "&").trim();
  if (!clean || clean.startsWith("data:")) return "";
  if (clean.startsWith("//")) clean = "https:" + clean;
  return resolveJavTrailersUrl(clean);
}

function sortGalleryUrls(urls) {
  return (urls || []).sort((a, b) => {
    const i = u => { const p = [/jp-(\d+)\./i, /cap_e_(\d+)_/i, /cap_e_(\d+)\./i, /cap_(\d+)_/i, /-(\d+)\.(?:jpg|jpeg|webp|png)/i]; for (const r of p) { const m = u.match(r); if (m) return parseInt(m[1], 10); } return 9999; };
    return i(a) - i(b);
  });
}

function extractGalleryImagesFromSwiper($, dvdId, contentId) {
  const urls = [], seen = new Set();
  const pushUrl = url => { const c = normalizeImageUrl(url); if (c && !seen.has(c) && imageUrlMatchesDvd(c, dvdId, contentId)) { seen.add(c); urls.push(c); } };
  $(".swiper-wrapper .swiper-slide.image-container img, .swiper-wrapper .swiper-slide img").each((_, el) => {
    const $img = $(el);
    pushUrl($img.attr("src") || ""); pushUrl($img.attr("data-src") || ""); pushUrl($img.attr("data-original") || ""); pushUrl($img.attr("data-lazy") || "");
  });
  return sortGalleryUrls(urls);
}

function extractGalleryImagesFromRawHtml(html, dvdId, contentId) {
  const raw = String(html || "").replace(/\\\//g, "/").replace(/&amp;/g, "&").replace(/\\u002F/g, "/");
  const urls = [], seen = new Set();
  const pushUrl = url => { const c = normalizeImageUrl(url); if (c && !seen.has(c) && imageUrlMatchesDvd(c, dvdId, contentId)) { seen.add(c); urls.push(c); } };
  [/https?:\/\/pics\.dmm\.co\.jp\/digital\/video\/[^"'\s<>]+?\/[^"'\s<>]+?jp-\d+\.(?:jpg|jpeg|webp|png)/gi,
   /https?:\/\/image\.mgstage\.com\/images\/[^"'\s<>]+?\/cap_e_\d+_[^"'\s<>]+?\.(?:jpg|jpeg|webp|png)/gi,
   /https?:\/\/image\.mgstage\.com\/images\/[^"'\s<>]+?\/pf_o\d+_[^"'\s<>]+?\.(?:jpg|jpeg|webp|png)/gi,
   /src=["']([^"']*cap_e_\d+_[^"']+\.(?:jpg|jpeg|webp|png))["']/gi,
   /src=["']([^"']*pf_o\d+_[^"']+\.(?:jpg|jpeg|webp|png))["']/gi,
   /src=["']([^"']*jp-\d+\.(?:jpg|jpeg|webp|png))["']/gi].forEach(pat => { let m; while ((m = pat.exec(raw)) !== null) pushUrl(m[1] || m[0]); });
  return sortGalleryUrls(urls);
}

function isMgstageCoverOnlyImage(url) { return /image\.mgstage\.com\/images\/.+?\/pf_o\d+_/i.test(String(url || "")); }

function isLikelyDmmContentId(contentId) { return /^(?:\d+)?[a-z]+0\d{4,5}$/i.test(String(contentId || "").toLowerCase().trim()); }

function isDmmSourceHtml(html) { const r = String(html || "").toLowerCase(); return r.includes("pics.dmm.co.jp") || r.includes("al.fanza.co.jp") || r.includes("fanza"); }

function isMgstageSourceHtml(html) { const r = String(html || "").toLowerCase(); return r.includes("image.mgstage.com") || r.includes("mgstage.nihonjav.com") || r.includes("mgstage"); }

function extractDmmGalleryFromHtml(html, contentId, dvdId) {
  const $ = Widget.html.load(html);
  const swiper = extractGalleryImagesFromSwiper($, dvdId, contentId);
  if (swiper.length) return swiper;
  const raw = extractGalleryImagesFromRawHtml(html, dvdId, contentId);
  const isMg = isMgstageSourceHtml(html);
  const hasReal = raw.some(u => !isMgstageCoverOnlyImage(u) && (/cap_e_\d+_/i.test(u) || /jp-\d+\./i.test(u)));
  if (raw.length && (!isMg || hasReal)) return raw;
  const finalId = String(contentId || "").toLowerCase().trim();
  if (isDmmSourceHtml(html) && isLikelyDmmContentId(finalId)) return buildDmmGallery(finalId, 10);
  if (isMg) return buildMgstageGalleryFromHtmlOrDvdId(html, dvdId, 10);
  return [];
}

function buildDmmBackdropFromContentId(contentId) {
  const id = String(contentId || "").toLowerCase().trim();
  return id ? `https://pics.dmm.co.jp/digital/video/${id}/${id}pl.jpg` : "";
}

function buildMgstageBackdropFromDvdId(dvdId, maker) {
  maker = maker || "prestige";
  const clean = cleanDvdId(dvdId).toLowerCase();
  const m = clean.match(/^([a-z]+)[-_ ]*0*(\d+)$/i);
  if (!m) return "";
  return `https://image.mgstage.com/images/${maker}/${m[1].toLowerCase()}/${String(parseInt(m[2], 10))}/pb_e_${m[1].toLowerCase()}-${String(parseInt(m[2], 10))}.jpg`;
}

function extractJavTrailersBackdropPath($, html, contentId, dvdId) {
  const raw = String(html || "").replace(/\\\//g, "/").replace(/&amp;/g, "&");
  const mg = raw.match(/https?:\/\/image\.mgstage\.com\/images\/[^"'\s<>]+?\/pb_e_[^"'\s<>]+?\.(?:jpg|jpeg|webp|png)/i);
  if (mg) return normalizeImageUrl(mg[0]);
  const d = raw.match(/https?:\/\/pics\.dmm\.co\.jp\/digital\/video\/[^"'\s<>]+?\/[^"'\s<>]+?pl\.(?:jpg|jpeg|webp|png)/i);
  if (d) return normalizeImageUrl(d[0]);
  const pf = raw.match(/https?:\/\/image\.mgstage\.com\/images\/([^"'\s<>]+?)\/([a-z]+)\/(\d+)\/pf_o\d+_([a-z]+-\d+)\.(?:jpg|jpeg|webp|png)/i);
  if (pf) return `https://image.mgstage.com/images/${pf[1]}/${pf[2].toLowerCase()}/${pf[3]}/pb_e_${pf[4].toLowerCase()}.jpg`;
  const dvd = cleanDvdId(dvdId).toLowerCase().match(/^([a-z]+)[-_ ]*0*(\d+)$/i);
  if (dvd && dvd[1].toLowerCase() === "abf") { const b = buildMgstageBackdropFromDvdId(dvdId, "prestige"); if (b) return b; }
  const finalId = String(contentId || "").toLowerCase().trim();
  if (isLikelyDmmContentId(finalId)) return buildDmmBackdropFromContentId(finalId);
  return "";
}

function scoreJavTrailersSearchResult($, $a, targetCompareId) {
  const href = resolveJavTrailersUrl($a.attr("href") || "");
  const slug = href.split("/").filter(Boolean).pop() || "";
  const candidates = [normalizeText($a.text()), normalizeText($a.closest("div,li,article,section").text()), slug];
  let bestScore = 0;
  candidates.forEach(c => { const compare = normalizeDvdIdForCompare(c); if (compare === targetCompareId) bestScore = Math.max(bestScore, 100); });
  if (href.includes("/video/")) bestScore += 10;
  if (normalizeDvdIdForCompare(slug) === targetCompareId) bestScore = Math.max(bestScore, 110);
  return { href, slug, contentId: slug.toLowerCase(), score: bestScore };
}

async function findJavTrailersDetailUrl(dvdId) {
  const searchKeyword = normalizeDvdIdForSearch(dvdId), targetCompareId = normalizeDvdIdForCompare(dvdId);
  if (!searchKeyword || !targetCompareId) return "";
  try {
    const res = await Widget.http.get(`${JAVTRAILERS_GALLERY_BASE_URL}/search/${encodeURIComponent(searchKeyword)}`, { headers: JAVTRAILERS_GALLERY_HEADERS, timeout: 2500 });
    const html = res.data || "", $ = Widget.html.load(html);
    const candidates = [];
    $('a[href*="/video/"]').each((_, el) => { const r = scoreJavTrailersSearchResult($, $(el), targetCompareId); if (r.href) candidates.push(r); });
    candidates.sort((a, b) => b.score - a.score);
    if (candidates.length && candidates[0].score >= 60) return candidates[0].href;
    let m; while ((m = /href=["']([^"']*\/video\/([a-z0-9_]+)[^"']*)["']/gi.exec(html)) !== null) { const href = resolveJavTrailersUrl(m[1]), slug = m[2] || ""; if (normalizeDvdIdForCompare(slug) === targetCompareId) return href; }
    return "";
  } catch (e) { return ""; }
}

function extractJavTrailersContentId($, html, detailUrl) {
  const urlMatch = String(detailUrl || "").match(/\/video\/([a-z0-9_]+)/i);
  if (urlMatch) return urlMatch[1].toLowerCase();
  const textMatch = normalizeText($("body").text()).match(/Content\s*ID\s*:?\s*([a-z0-9_]+)/i);
  if (textMatch) return textMatch[1].toLowerCase();
  const imgMatch = String(html || "").match(/pics\.dmm\.co\.jp\/digital\/video\/([a-z0-9_]+)\//i);
  if (imgMatch) return imgMatch[1].toLowerCase();
  return "";
}

async function fetchJavTrailersMeta(dvdId) {
  const empty = { backdropPath: "", backdropPaths: [] };
  if (!dvdId) return empty;
  const buildFallbackBackdrop = (contentId, dvdId) => {
    const md = cleanDvdId(dvdId).toLowerCase().match(/^([a-z]+)[-_ ]*0*(\d+)$/i);
    if (md && md[1].toLowerCase() === "abf") { const b = buildMgstageBackdropFromDvdId(dvdId, "prestige"); if (b) return b; }
    const finalId = String(contentId || "").toLowerCase().trim();
    if (isLikelyDmmContentId(finalId)) return buildDmmBackdropFromContentId(finalId);
    return "";
  };
  try {
    const detailUrl = await findJavTrailersDetailUrl(dvdId);
    if (!detailUrl) {
      const ecid = buildDmmContentIdFromDvdId(dvdId);
      const bp = buildFallbackBackdrop(ecid, dvdId) || buildDmmBackdropFromContentId(ecid);
      const bps = isLikelyDmmContentId(ecid) ? buildDmmGallery(ecid, 10) : [];
      return { backdropPath: bp || "", backdropPaths: bps };
    }
    const res = await Widget.http.get(detailUrl, { headers: { ...JAVTRAILERS_GALLERY_HEADERS, Referer: `${JAVTRAILERS_GALLERY_BASE_URL}/` }, timeout: 2500 });
    const html = res.data || "", $ = Widget.html.load(html);
    const contentId = extractJavTrailersContentId($, html, detailUrl), expectedContentId = buildDmmContentIdFromDvdId(dvdId);
    const strip = s => String(s || "").toLowerCase().replace(/^\d+/, "");
    if (contentId && expectedContentId && strip(contentId) !== strip(expectedContentId)) {
      const isMg = JAVTRAILERS_MGSTAGE_PREFIXES.has((cleanDvdId(dvdId).match(/^([a-z]+)/i) || [])[1] || "".toUpperCase());
      return { backdropPath: isMg ? (buildMgstageBackdropFromDvdId(dvdId, "prestige") || "") : (buildDmmBackdropFromContentId(expectedContentId.toLowerCase()) || ""), backdropPaths: isMg ? buildMgstageGalleryFromDvdId(dvdId, 10) : isLikelyDmmContentId(expectedContentId.toLowerCase()) ? buildDmmGallery(expectedContentId.toLowerCase(), 10) : [] };
    }
    let bp = extractJavTrailersBackdropPath($, html, contentId, dvdId);
    if (!bp) bp = buildFallbackBackdrop(contentId, dvdId);
    const bps = extractDmmGalleryFromHtml(html, contentId, dvdId);
    return { backdropPath: bp || "", backdropPaths: bps };
  } catch (e) { const fb = buildFallbackBackdrop("", dvdId); if (fb) return { backdropPath: fb, backdropPaths: [] }; return empty; }
}

function extractDvdId(link) {
  const slug = String(link || "").split("?")[0].split("/").filter(Boolean).pop() || "";
  return slug.replace(/-(uncensored-leak|chinese-subtitle)$/i, "").toUpperCase();
}

// ==================== Stream Source（番号匹配 Jable 播放源）====================

function normalizeCode(value) {
  return String(value || "").toUpperCase().replace(/[\s_\-]+/g, "");
}

function extractSearchCode(text, options = {}) {
  const allowPureNumeric = options.allowPureNumeric !== false;
  const s = String(text || "").toUpperCase().replace(/\./g, " ").replace(/_/g, "-").replace(/\s+/g, " ").trim();
  if (!s) return "";
  const patterns = [
    /\bFC2(?:[- ]?PPV)?[- ]?\d{5,8}\b/,
    /\bCARIB[- ]?\d{6,8}\b/,
    /\b1PONDO[- ]?\d{6,8}\b/,
    /\bHEYZO[- ]?\d{3,6}\b/,
    /\bT28[- ]?\d{6,8}\b/,
    /\b(?:S2M|MIAA|SSNI|SNIS|IPX|IPZZ|SSIS|JUQ|MIDE|MIDV|STARS|ABW|RKI|DVAJ|WANZ|LULU|DLDSS|VRTM|SDMU|SDDE|MKMP|HMN|MUDR|ADN|CAWD|PPPE|PRED|MGR|SHKD|MXGS|FSDSS|JUL|KTB|MIAB|GVH|MIMK|JUY|JUTA|IDBD|HND|DASD|CLO|BF|HONB|ROE|CEMD|MIUM|NITR|RCTD|RCT|IPVR|MIBD|JUR|JURD|SOE|ORE|PYO|START|NSFS)\s*[-_ ]?\d{2,6}[A-Z]?(?:[-_ ]?[A-Z]{0,4})?\b/,
    /\b[A-Z]{2,10}\s*[-_ ]?\d{2,8}[A-Z]?\b/
  ];
  if (allowPureNumeric) patterns.push(/\b\d{6,8}\b/);
  for (const reg of patterns) {
    const match = s.match(reg);
    if (match && match[0]) return match[0].replace(/\s+/g, "").replace(/_/g, "-").replace(/-+/g, "-").toUpperCase();
  }
  return "";
}

function collectStringValues(value, depth = 0, out = [], visited = new Set()) {
  if (value === null || value === undefined || depth > 5) return out;
  const valueType = typeof value;
  if (valueType === "string" || valueType === "number") {
    const text = String(value).trim();
    if (text) out.push(text);
    return out;
  }
  if (valueType !== "object") return out;
  if (visited.has(value)) return out;
  visited.add(value);
  if (Array.isArray(value)) { for (const item of value) collectStringValues(item, depth + 1, out, visited); return out; }
  for (const key of Object.keys(value)) collectStringValues(value[key], depth + 1, out, visited);
  return out;
}

function extractCodeFromParams(params = {}) {
  const priorityCandidates = [
    params.code, params.videoId, params.number,
    params.fileName, params.filename, params.file_name, params.name, params.path,
    params.filePath, params.file_path, params.mediaPath, params.media_path,
    params.itemPath, params.item_path, params.localPath, params.local_path,
    params.originalFilename, params.originalFileName,
    params.id, params.title, params.seriesName, params.originalTitle, params.originalName,
    params.episodeName, params.description, params.genreTitle, params.overview,
    params.link, params.url, params.videoUrl, params.playUrl, params.streamUrl,
  ];
  if (params.tmdbInfo) {
    priorityCandidates.push(params.tmdbInfo.title, params.tmdbInfo.name, params.tmdbInfo.originalTitle, params.tmdbInfo.originalName, params.tmdbInfo.overview);
  }
  if (params.info) {
    priorityCandidates.push(params.info.title, params.info.name, params.info.originalTitle, params.info.originalName, params.info.overview);
  }
  if (params.mediaSource) {
    priorityCandidates.push(params.mediaSource.name, params.mediaSource.fileName, params.mediaSource.filename, params.mediaSource.path, params.mediaSource.url, params.mediaSource.streamUrl);
  }
  if (Array.isArray(params.mediaSources)) {
    for (const source of params.mediaSources) {
      priorityCandidates.push(source && source.name, source && source.fileName, source && source.filename, source && source.path, source && source.url, source && source.streamUrl);
    }
  }
  for (const value of priorityCandidates) { const code = extractSearchCode(value, { allowPureNumeric: true }); if (code) return code; }
  for (const value of collectStringValues(params)) { const code = extractSearchCode(value, { allowPureNumeric: false }); if (code) return code; }
  return "";
}

function parseJableSearchResults(html, targetCode) {
  if (!html || typeof html !== "string") return [];
  const $ = Widget.html.load(html);
  const results = [];
  const seen = new Set();
  $(".video-img-box").each((i, el) => {
    const $el = $(el);
    const $titleLink = $el.find(".title a").first();
    const href = $titleLink.attr("href") || "";
    const link = String(href).trim();
    if (!link || !link.includes("jable.tv") || seen.has(link)) return;
    const title = $titleLink.text().trim();
    const $img = $el.find("img").first();
    const cover = $img.attr("data-src") || $img.attr("src") || "";
    const match = (link.match(/\/([^/?#]+)(?:\?|#|$)/) || [])[1] || "";
    let decoded;
    try { decoded = decodeURIComponent(match); } catch (e) { decoded = match.replace(/%[0-9A-Fa-f]{2}/g, ""); }
    const code = extractSearchCode(decoded.replace(/-/g, " "), { allowPureNumeric: true }) || extractSearchCode(title, { allowPureNumeric: true });
    if (!code) return;
    seen.add(link);
    results.push({ title, link, code, cover });
  });
  if (results.length === 0) {
    $("a[href]").each((i, el) => {
      const href = $(el).attr("href") || "";
      const link = String(href).trim();
      if (!link || !link.includes("jable.tv") || seen.has(link)) return;
      const match = (link.match(/\/([^/?#]+)(?:\?|#|$)/) || [])[1] || "";
      let decoded2;
      try { decoded2 = decodeURIComponent(match); } catch (e) { decoded2 = match.replace(/%[0-9A-Fa-f]{2}/g, ""); }
      const codeFromLink = extractSearchCode(decoded2.replace(/-/g, " "), { allowPureNumeric: true });
      if (!codeFromLink) return;
      seen.add(link);
      results.push({ title: $(el).text().trim(), link, code: codeFromLink, cover: "" });
    });
  }
  const targetLoose = normalizeCode(targetCode);
  const exact = results.filter(item => normalizeCode(item.code) === targetLoose);
  if (exact.length > 0) return exact;
  return results;
}

function detectJableChineseSubtitle(html) {
  const $ = Widget.html.load(html);
  const keywords = $('meta[name="keywords"]').attr("content") || "";
  const firstKeyword = keywords.split(/[,，]/).map(s => s.trim()).filter(Boolean)[0];
  if (firstKeyword === "中文字幕") return true;
  const description = $('meta[name="description"]').attr("content") || "";
  if (description.includes("中文字幕版") || description.includes("更新至中文字幕") || description.includes("中文字幕")) return true;
  const lowerHtml = String(html).toLowerCase();
  if (lowerHtml.includes("chinese-subtitle") || lowerHtml.includes("chinese subtitle")) return true;
  return false;
}

async function loadResource(params = {}) {
  try {
    const code = extractCodeFromParams(params);
    if (!code) return [];
    const targetLoose = normalizeCode(code);
    let matched = null;
    const keys = [...new Set([code, code.replace(/-/g, "")])];
    for (const key of keys) {
      const keyword = encodeURIComponent(key);
      const searchUrl = `https://jable.tv/search/${keyword}/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=${keyword}`;
      const html = await fetchJableHtml(searchUrl, 3).catch(() => "");
      if (!html) continue;
      const results = parseJableSearchResults(html, code);
      matched = results.find(item => normalizeCode(item.code) === targetLoose);
      if (matched) break;
    }
    if (!matched || !matched.link) return [];
    const detailHtml = await fetchJableHtml(matched.link, 3).catch(() => "");
    if (!detailHtml) return [];
    const hlsUrlMatch = detailHtml.match(/var\s+hlsUrl\s*=\s*['"](.*?)['"]/i);
    const hlsUrl = hlsUrlMatch && hlsUrlMatch[1] ? (hlsUrlMatch[1].startsWith("//") ? `https:${hlsUrlMatch[1]}` : hlsUrlMatch[1]) : "";
    if (!hlsUrl) return [];
    const isChineseSubtitle = detectJableChineseSubtitle(detailHtml);
    const sourceName = isChineseSubtitle ? "Jable 中文字幕" : "Jable 正片";
    return [{
      name: sourceName,
      description: `番号：${code}\n字幕：${isChineseSubtitle ? "中文字幕" : "无"}`,
      url: hlsUrl,
      customHeaders: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        "Referer": matched.link,
        "Origin": "https://jable.tv"
      }
    }];
  } catch (e) {
    return [];
  }
}