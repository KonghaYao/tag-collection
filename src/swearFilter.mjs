/**
 * 违禁词标注，向 tags 里面注入 r18 标记
 * node 运行即可
 *  */
import papaparser from "papaparse";
import fs from "fs";
const createList = async (path, columns) => {
    const file = fs.readFileSync(path, "utf-8").replace("\uFEFF", "");
    return new Promise((res) => {
        papaparser.parse(file, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            columns,
            complete(results, file) {
                console.timeEnd("加载 csv 文件");
                res(results.data);
            },
        });
    });
};

// 向 public/tags 自动填写 r18 列
// 违禁词在 swearList 内填写
const swearList = await createList("./data/swearList.csv").then((res) =>
    res.map((i) => i.swear)
);

await createList("./data/tags.csv")
    .then((res) =>
        res.map((i) => {
            try {
                if (typeof i.en === "string") {
                    i.r18 = i.en
                        .split(" ")
                        .some((word) => swearList.includes(word))
                        ? 1
                        : 0;
                } else {
                    // 数值类型，不作为屏蔽词
                    i.r18 = 0;
                    console.log(i);
                }
            } catch (e) {
                console.log(e);
                throw e;
            }
            return i;
        })
    )
    .then((list) => {
        return papaparser.unparse(list);
    })
    .then((res) => {
        fs.writeFileSync("./data/tags.csv", "\uFEFF" + res);
    });
