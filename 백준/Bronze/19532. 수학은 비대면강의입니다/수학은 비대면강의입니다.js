const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b, c, d, e, f] = input;

const x = parseInt((c * e - b * f) / (a * e - b * d));
const y = parseInt((c * d - a * f) / (b * d - a * e))

console.log(x, y);
