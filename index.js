const solveWithRoundRobin = require("./utils/solveWithRoundRobin");
const getAverageColumn = require("./utils/getAverageColumn");
const { readFileSync } = require("fs");

const fileNumber = Array.from({ length: 4 }, (v, i) => i + 1);

fileNumber.forEach((number) => {
  const input = readFileSync(`./datasets/${number}.txt`, "utf8");
  const rr = solveWithRoundRobin(input);
  const averageCompleteTime = getAverageColumn(rr, "completeTime");
  const averageTurnAroundTime = getAverageColumn(rr, "turnAroundTime");
  console.log(`FILE: ${number}.txt`);
  console.log(`Average complete time: ${averageCompleteTime}`);
  console.log(`Average turn around time: ${averageTurnAroundTime}`);
  console.table(rr);
});
