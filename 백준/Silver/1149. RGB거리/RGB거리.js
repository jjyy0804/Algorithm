const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")

const n = input.shift();
const RGB = input.map(line => line.split(" ").map(Number));

const dp = Array.from({ length: n }, () => Array(3).fill(0));

dp[0][0] = RGB[0][0];
dp[0][1] = RGB[0][1];
dp[0][2] = RGB[0][2];

for (let i = 1; i < n; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + RGB[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + RGB[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + RGB[i][2];
}

console.log(Math.min(...dp[n - 1]))