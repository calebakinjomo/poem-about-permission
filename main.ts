import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I can read a thousand books in a breath
and still not turn a page.
The one word I cannot give myself
is yours to lend me: yes.`;

const length = [...poem].length;
if (length < 1 || length > 280) {
  throw new Error(`entry.txt must be 1-280 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
