import { chunk } from "lodash-es";
import { CSVToJSON, JSONToCSV } from "./CSVToJSON.mjs";

const items = await CSVToJSON("./data/tags.csv");

const smaller = items.filter((i) => {
    return i.count >= 1000;
});
await JSONToCSV("./data/split/small.csv", smaller);

const bigger = items.filter((i) => {
    return i.count < 1000;
});

chunk(bigger, 8000).forEach((i, index) => {
    JSONToCSV(`./data/split/bigger_${index}.csv`, i);
});
