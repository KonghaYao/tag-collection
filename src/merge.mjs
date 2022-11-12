import { CSVToJSON, JSONToCSV } from "./CSVToJSON.mjs";
const data = await CSVToJSON("./data/tags.csv");
const translate = await CSVToJSON("./data/32005.csv");

// 合并两份文件的相同部分的中文翻译
data.forEach((i) => {
    const newI = translate.find((ii) => ii.en === i.en);
    if (newI && newI.cn.trim()) {
        i.cn = newI.cn.trim();
    }
});

JSONToCSV("./data/tags.csv", data);
