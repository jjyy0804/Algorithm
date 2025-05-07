const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const N = Number(input);

// 배열 대신 인덱스를 이용해 queue처럼 사용
const queue = Array.from({ length: N }, (_, i) => i + 1);
let head = 0;

while (head < queue.length - 1) {
  head++; // 맨 앞 버림
  queue.push(queue[head]); // 그다음 카드 맨 뒤로
  head++;
}

console.log(queue[queue.length - 1]);
