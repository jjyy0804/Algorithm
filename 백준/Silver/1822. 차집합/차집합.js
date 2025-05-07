const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [nA, nB] = input[0].split(" ").map(Number);
const A = new Set(input[1].split(" ").map(Number));
const B = new Set(input[2].split(" ").map(Number));
let results = []
A.forEach(num => {
  if (!B.has(num)) {
    results.push(num);
  }
})
results.sort((a,b) => a - b);
console.log(results.length);
if (results.length > 0) console.log(results.join(" "));