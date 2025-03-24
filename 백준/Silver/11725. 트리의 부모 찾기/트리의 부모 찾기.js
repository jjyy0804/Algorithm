const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
let visited = Array.from({ length: N + 1 }, () => false);
let answer = Array(N + 1).fill(0);

arr.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});


function dfs(x) {
  visited[x] = true;
  for (let y of graph[x]) {
    if (!visited[y]) {
      answer[y] = x;
      dfs(y);
    }
  }
}

dfs(1);
console.log(answer.slice(2,).join(" "))