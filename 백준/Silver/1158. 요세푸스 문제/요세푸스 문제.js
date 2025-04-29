const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;
const arr = Array.from({ length: N }, (_, i) => i + 1);
let result = [];

let i = 0;
while (arr.length > 0) {
  i = (i + K - 1) % arr.length;
  result.push(arr.splice(i, 1));
}
console.log('<' + result.join(', ') + '>');