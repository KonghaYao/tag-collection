import { chunk } from "lodash-es";
import { CSVToJSON } from "../src/CSVToJSON.mjs";
import { MeiliSearch } from "meilisearch";
const data = await CSVToJSON("./data/tags.csv");
// 上传记录到 MeiliSearch
const client = new MeiliSearch({
    host: "http://43.153.192.127:7700",
    apiKey: "CXY52Uq0xJ9gk63BxFGFZ_2XWtpUDI-qNGB2cdxJoBo",
});

await client.deleteIndex("tags");
client.index("tags").updateFilterableAttributes(["r18"]);
let count = 0;
for (const iterator of chunk(data, 5000)) {
    await client
        .index("tags")
        .addDocuments(
            iterator.map((i, id) => {
                return { ...i, id: id + count * 5000 };
            }),
            {}
        )
        .then((res) => console.log(count++));
}
