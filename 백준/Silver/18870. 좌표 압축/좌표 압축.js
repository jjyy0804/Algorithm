const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const A = input[1].split(" ").map(Number);

// 1. 정렬하고 중복 제거
const sorted = [...new Set(A)].sort((a, b) => a - b);

// 2. 각 숫자의 순위를 Map에 저장
const map = new Map();
sorted.forEach((num, idx) => map.set(num, idx));

// 3. A 배열을 순회하며 좌표 압축된 값 출력
const result = A.map(num => map.get(num));
console.log(result.join(" "));
