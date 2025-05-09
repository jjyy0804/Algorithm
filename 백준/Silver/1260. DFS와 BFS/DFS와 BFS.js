const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M, V] = input[0].split(" ").map(Number);
const arr = input.slice(1,).map(el => el.split(" ").map(Number));

const visitedForBfs = Array(N + 1).fill(false);
const visitedForDfs = Array(N + 1).fill(false);
const graph = Array.from({ length: N + 1 }, () => []);

arr.forEach(([a, b]) => {
  graph[b].push(a);
  graph[a].push(b);
})

graph.forEach(neighbors => neighbors.sort((a, b) => a - b));

bfsArr = [];
const bfs = (node) => {
  let queue = [node];
  visitedForBfs[node] = true;
  bfsArr.push(node);
  while (queue.length) {
    let cur = queue.shift();
    for (let next of graph[cur]) {
      if (!visitedForBfs[next]) {
        visitedForBfs[next] = true;
        queue.push(next);
        bfsArr.push(next);
      }
    }
  }
}

dfsArr = [];
const dfs = (node) => {
  dfsArr.push(node);
  visitedForDfs[node] = true;
  for (let next of graph[node]) {
    if (!visitedForDfs[next]) {
      dfs(next);

    }
  }
}
dfs(V);
bfs(V);
console.log(dfsArr.join(" ") + '\n' + bfsArr.join(" "));