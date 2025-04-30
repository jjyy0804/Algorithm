const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")


const [N, M] = input[0].split(' ');
const treeHeights = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...treeHeights);

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let i = 0; i < Number(N); i++) {
    let gap = treeHeights[i] - mid
    if (gap > 0) total += gap;
  }
  if (total >= M) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }

}
console.log(result);