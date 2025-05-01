const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")

const T = +input[0];
let line = 1;

for (let t = 0; t < T; t++) {
  const k = +input[line++];
  const n = +input[line++];

  const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }


  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }

  console.log(dp[k][n]);
}