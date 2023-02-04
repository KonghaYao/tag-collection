# Tags 收集整理项目

1. 这个收集整理项目的基础为 使用由 B 站 UP 主 [十二今天也很可爱](https://www.bilibili.com/video/BV1m84y1B7Ny/?p=1&t=285&vd_source=a2ecd44ec8a0a62c70f8b98747f4aa56) 提供的近 4 万个标签。这里特别感谢。
2. 同时，我们合并了 [Novelai 词条百科共享站](https://www.cerfai.com/#/) 的大部分中文翻译，使得翻译准确度更高。
3. Tags 收集项目脱离于 [魔导绪论项目](https://github.com/KonghaYao/ai-tag), 基于上面的数据集，对部分翻译进行优化，补充部分缺失的 Tag。
4. Tags 收集项目定时会将数据上传至 NPM，可以供广大社区开发者使用。
5. 魔咒方面：项目收藏了众多来自互联网的魔咒，可以作为 AI 训练的初始数据使用。位置 /data/magics。

## 关于细节方面

1. 添加词汇，首先会查看是否具有类似词汇，如果有，那么数值上会和类似词汇的数值相同，如果没有，标记为最大值。
2. 违禁词，违禁词库在 data/swearList, 执行脚本自动向 tags.csv 写入 r18 这一列。
3. 由于历史原因，此项目从 [魔导绪论项目](https://github.com/KonghaYao/ai-tag) 中脱离出来，但是 Issues 还是提交到魔导绪论 Issues 去了。

## 贡献者名单

1. 翻译校对人员（排名不分先后）
   姬川岗坂，是我是我是我，粉色妖精小姐，草原，厚实表皮，北极，smzh，巨大黑洞，madecon，alleoha，琼茗，洬洬，雪枫，安达樱，winder，奈白不弍，TCPLwhy?，北北，爱丽丝·里德尔，洬洬，smzh，日爻三火，lic，猫毛，Lesson 5,code404,HKO2006，YplusO，依文洛华小咸鱼，乙木，丿空丶格灬，凋叶淙，终末的 EVE，珈百璃

2. 整理合并人员：
   江夏尧

3. [Stable Diffusion V1 Artist Style Studies](https://proximacentaurib.notion.site/e28a4f8d97724f14a784a538b8589e7d?v=42948fd8f45c4d47a0edfc4b78937474) 提供了众多的艺术家标签信息

# License 开源证书

GPL 3.0
