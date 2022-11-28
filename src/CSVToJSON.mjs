import papaparser from "papaparse";
import fs from "fs";

export const CSVToJSON = async (path, columns = undefined) => {
    const file = fs.readFileSync(path, "utf-8").replace("\uFEFF", "");
    return new Promise((res) => {
        papaparser.parse(file, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            columns,
            complete(results, file) {
                // console.timeEnd("加载 csv 文件");
                res(results.data);
            },
        });
    });
};

export const JSONToCSV = async (path, json) => {
    const res = await papaparser.unparse(json);
    return fs.promises.writeFile(path, "\uFEFF" + res);
};
