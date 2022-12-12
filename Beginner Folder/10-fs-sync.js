const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./file.txt", "utf8");
const second = readFileSync("./file2.txt", "utf8");

writeFileSync(
  "./syncFileResult.txt",
  `Here is the result:" ${first},${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
