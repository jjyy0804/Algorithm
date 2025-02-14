let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const temperatures = input[1].split(" ").map(Number);

// 초기 윈도우(K일 합) 설정
let currentSum = 0;
for (let i = 0; i < K; i++) {
  currentSum += temperatures[i];
}

let maxSum = currentSum;

// 슬라이딩 윈도우로 이동하며 최대 합 구하기
for (let i = K; i < N; i++) {
  currentSum = currentSum + temperatures[i] - temperatures[i - K];  // 새 값 추가, 오래된 값 제거
  maxSum = Math.max(maxSum, currentSum);
}

console.log(maxSum);
