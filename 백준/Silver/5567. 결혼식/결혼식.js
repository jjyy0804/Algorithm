let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 2; i < 2 + m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(n + 1).fill(false);
const queue = [[1, 0]];
visited[1] = true;
let count = 0;

while (queue.length > 0) {
  const [node, depth] = queue.shift();

  if (depth >= 2) continue;

  for (const friend of graph[node]) {
    if (!visited[friend]) {
      visited[friend] = true;
      queue.push([friend, depth + 1]);
      count++;
    }
  }
}

console.log(count);