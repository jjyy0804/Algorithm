const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift(); // N 제거

const result = input
  .map(line => line.split(" "))
  .sort((a, b) => Number(a[0]) - Number(b[0]))
  .map(member => member.join(" "))
  .join("\n");

console.log(result);
