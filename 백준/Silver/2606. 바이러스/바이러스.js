const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());
const M = Number(input.shift());
const arr = input.map((el) => el.split(' ').map(Number));

let graph = Array.from({ length: N + 1 }, () => []);
let visited = Array.from({ length: N + 1 }, () => false);
let answer = 0;

arr.forEach(([a, b]) => {
  graph[b].push(a);
  graph[a].push(b);
})

function dfs(x) {
  visited[x] = true;
  for (let y of graph[x]) {
    if (!visited[y]) {
      answer += 1;
      dfs(y);
    }
  }
}

dfs(1);

console.log(answer);