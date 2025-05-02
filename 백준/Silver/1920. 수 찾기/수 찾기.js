const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const A = input.shift().split(" ").map(Number).sort((a, b) => a - b);
const M = +input.shift();
const B = input.shift().split(" ").map(Number);

const result = [];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return 1;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return 0;
}

for (let i = 0; i < M; i++) {
  result.push(binarySearch(A, B[i]));
}

console.log(result.join("\n"));
