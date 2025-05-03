const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
const result = [];

while (idx < input.length) {
  const [N, M] = input[idx++].split(" ").map(Number);
  if (N === 0 && M === 0) break;

  const A = input.slice(idx, idx + N).map(Number);
  const B = input.slice(idx + N, idx + N + M).map(Number);
  idx += N + M;

  let i = 0;
  let j = 0;
  let count = 0;

  while (i < N && j < M) {
    if (A[i] === B[j]) {
      count++;
      i++;
      j++;
    } else if (A[i] < B[j]) {
      i++;
    } else {
      j++;
    }
  }

  result.push(count);
}

console.log(result.join("\n"));
