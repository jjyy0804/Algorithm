const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const maps = input.slice(1,).map(el => el.split("").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const bfs = (start, end, distance) => {
  const queue = [[start, end, distance]];
  visited[start][end] = true;

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();
    if (x == (N - 1) && y == (M - 1)) {
      return dist;
    }
    for (let i = 0; i < 4; i++) {
      let nextX = x + dx[i];
      let nextY = y + dy[i];

      if (nextX >= 0 && nextX < N &&
        nextY >= 0 && nextY < M &&
        !visited[nextX][nextY] &&
        maps[nextX][nextY] === 1) {
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY, dist + 1]);
      }
    }
  }
}

console.log(bfs(0, 0, 1));