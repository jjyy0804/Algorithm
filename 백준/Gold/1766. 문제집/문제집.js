class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;

    // 부모보다 작은 값이면 swap
    while (curIdx > 0) {
      let parentIdx = Math.floor((curIdx - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[curIdx]) break;
      [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]];
      curIdx = parentIdx;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let curIdx = 0;

    // 자식보다 큰 값이면 swap
    while (curIdx * 2 + 1 < this.heap.length) {
      let leftIdx = curIdx * 2 + 1;
      let rightIdx = curIdx * 2 + 2;
      let smallerIdx = leftIdx;

      if (rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[leftIdx]) {
        smallerIdx = rightIdx;
      }

      if (this.heap[curIdx] <= this.heap[smallerIdx]) break;
      [this.heap[curIdx], this.heap[smallerIdx]] = [this.heap[smallerIdx], this.heap[curIdx]];
      curIdx = smallerIdx;
    }
    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const inDegree = Array(N + 1).fill(0);

// 그래프 구성
for (let i = 1; i <= M; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  graph[A].push(B);
  inDegree[B]++;
}
// 최소힙 구성
const minHeap = new MinHeap();
for (let i = 1; i <= N; i++) {
  if (inDegree[i] === 0) minHeap.push(i);
}

const result = [];
while (!minHeap.isEmpty()) {
  const cur = minHeap.pop();
  result.push(cur);

  for (const next of graph[cur]) {
    inDegree[next]--;
    if (inDegree[next] === 0) minHeap.push(next);
  }
}

console.log(result.join(" "));
