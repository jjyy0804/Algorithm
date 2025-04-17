const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = input;

let results = [];

function dfs(start) {
  if (results.length === M) {
    console.log(results.join(' '));
    return;
  }

  for (let i = start; i <= N; i++) {
    results.push(i);
    dfs(i + 1); 
    results.pop();
  }
}

dfs(1);
