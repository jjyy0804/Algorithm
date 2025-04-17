const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number)

const [N, M] = input

let numbers = Array.from({ length: N + 1 }, (_, i) => i + 1);
let visted = Array.from({ length: N + 1 }, () => false);
let results = [];

function dfs(start) {
  if (results.length === M) {
    console.log(results.join(' '));
    return;
  }

  for (let i = start; i <= N; i++) {

    if (!visted[i]) {
      visted[i] = true;
      results.push(i);
      dfs(i + 1);
      results.pop();
      visted[i] = false;

    }
  }
}

dfs(1);