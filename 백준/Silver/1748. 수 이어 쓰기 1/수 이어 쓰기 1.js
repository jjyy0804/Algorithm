const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input;
let answer = 0;
for (let i = 1; i <= n; i *= 10) {
  answer += n - i + 1;
}

console.log(answer);
