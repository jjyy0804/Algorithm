const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const levels = input[1].split(" ").map(Number);
const x_y_Arr = input.slice(3,).map(el => el.split(" ").map(Number));

// 감소 여부 저장
let decrease = Array(N).fill(0);
for (let i = 0; i < N - 1; i++) {
  if (levels[i] > levels[i + 1]) decrease[i + 1] = 1;
}

// 누적합 배열 만들기
let prefixSum = Array(N).fill(0);
for (let i = 1; i < N; i++) {
  prefixSum[i] = prefixSum[i - 1] + decrease[i];
}

// 결과 계산
const results = [];
x_y_Arr.forEach(([x, y]) => {
  results.push(prefixSum[y - 1] - prefixSum[x - 1]);
});

console.log(results.join("\n"));
