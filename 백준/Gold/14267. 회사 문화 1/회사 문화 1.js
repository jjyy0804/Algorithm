let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const manager = input[1].split(" ").map(Number);
const compliments = Array(n + 1).fill(0);
const tree = Array.from({ length: n + 1 }, () => []);

// 상사-부하 관계 트리 구성
for (let i = 1; i < n; i++) {
  if (manager[i] !== -1) {
    tree[manager[i]].push(i + 1);
  }
}

// 칭찬 기록
for (let i = 2; i < 2 + m; i++) {
  const [employee, weight] = input[i].split(" ").map(Number);
  compliments[employee] += weight;
}

function dfs(node, total) {
  compliments[node] += total;
  for (const child of tree[node]) {
    dfs(child, compliments[node]);
  }
}

dfs(1, 0);
console.log(compliments.slice(1).join(" "));