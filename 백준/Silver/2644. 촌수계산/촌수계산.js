const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const [start, end] = input[0].split(" ").map(Number);
const m = +input[1];
const relations = input.slice(2,).map(el => el.split(" ").map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => false);

relations.forEach(([a, b]) => {
  graph[b].push(a);
  graph[a].push(b);
})

let answer = -1;

const dfs = (node, depth) => {
  visited[node] = true;

  if (node === end) {
    answer = depth;
    return;
  }

  for (let next of graph[node]) {
    if (!visited[next]) {
      dfs(next, depth + 1);

    }
  }

};

dfs(start, 0);
console.log(answer);