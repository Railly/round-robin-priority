const solveWithRoundRobin = require("./utils/solveWithRoundRobin");
const { readFileSync } = require("fs");

const fileNumber = Array.from({ length: 4 }, (v, i) => i + 1);

fileNumber.forEach((number) => {
  const input = readFileSync(`./datasets/${number}.txt`, "utf8");
  const rr = solveWithRoundRobin(input);
  console.table(rr);
});
