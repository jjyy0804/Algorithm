const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const stair = input.slice(1).map(Number);

const dp = Array(N).fill(0);

if (N === 1) {
  console.log(stair[0]);
} else if (N === 2) {
  console.log(stair[0] + stair[1]);
} else {
  dp[0] = stair[0];
  dp[1] = stair[0] + stair[1];
  dp[2] = Math.max(stair[0] + stair[2], stair[1] + stair[2]);

  for (let i = 3; i < N; i++) {
    dp[i] = Math.max(
      dp[i - 2] + stair[i],                       // 두 칸 뛰기
      dp[i - 3] + stair[i - 1] + stair[i]         // 한 칸 + 한 칸
    );
  }

  console.log(dp[N - 1]);
}
