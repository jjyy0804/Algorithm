const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")

const [N, S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;


function dfs(index, total) {
  if (index === N) {
    if (total === S) count++;
    return;
  }

  dfs(index + 1, total + arr[index]);
  dfs(index + 1, total);
}
if (S === 0) count--;
dfs(0, 0)
console.log(count);