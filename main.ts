import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I can read a thousand books in a breath
and still not turn a page.
The one word I cannot give myself
is yours to lend me: yes.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
