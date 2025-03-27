const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [V, E] = input.shift().split(" ").map(Number);
const K = Number(input.shift());

const graph = Array.from({ length: V + 1 }, () => []);
const dist = Array.from({ length: V + 1 }, () => Infinity);

for (let i = 0; i < E; i++) {
  const [u, v, w] = input[i].split(' ').map(Number);
  graph[u].push({ to: v, dist: w });
}

const visited = Array(V + 1).fill(false);
dist[K] = 0;

for (let i = 0; i < V; i++) {
  let min = Infinity;
  let idx = -1;

  // 현재 방문하지 않은 노드 중 dist가 최소인 노드 선택
  for (let j = 1; j <= V; j++) {
    if (!visited[j] && dist[j] < min) {
      min = dist[j];
      idx = j;
    }
  }

  if (idx === -1) break; // 연결되지 않은 노드

  visited[idx] = true;

  graph[idx].forEach(({ to, dist: cost }) => {
    if (dist[to] > dist[idx] + cost) {
      dist[to] = dist[idx] + cost;
    }
  });
}

for (let i = 1; i <= V; i++) {
  console.log(dist[i] === Infinity ? "INF" : dist[i]);
}
