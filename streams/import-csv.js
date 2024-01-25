import fs from "node:fs";
import { parse } from "csv-parse";

const __dirname = new URL("tasks.csv", import.meta.url).pathname;

const processFile = async () => {
  const records = [];
  const parser = fs.createReadStream(__dirname).pipe(
    parse({
      delimiter: ",",
      skipEmptyLines: true,
      fromLine: 2, // skip the header line
    })
  );
  for await (const record of parser) {
    // Work with each record
    const [title, description] = record;
    records.push({ title, description });
    fetch("http://localhost:3333/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
    });
  }
  return records;
};

(async () => {
  const records = await processFile();
})();
