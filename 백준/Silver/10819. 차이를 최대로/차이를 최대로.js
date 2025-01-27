let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const A = input.shift().split(' ').map(Number);

let maxDifference = 0; // 최대값 저장
const visited = Array(N).fill(false); // 방문 여부
const array = []; // 현재 순열

// 백트래킹 함수
function backtrack(depth) {
  if (depth === N) {
    // 순열이 완성되었을 때 차이 계산
    const sum = calculateDifference(array);
    maxDifference = Math.max(maxDifference, sum);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      // 방문하지 않은 원소를 선택
      visited[i] = true;
      array.push(A[i]);

      // 다음 단계로 진행
      backtrack(depth + 1);

      // 선택 해제
      visited[i] = false;
      array.pop();
    }
  }
}

// 차이 계산 함수
function calculateDifference(array) {
  let sum = 0;
  for (let i = 0; i < array.length - 1; i++) {
    sum += Math.abs(array[i] - array[i + 1]);
  }
  return sum;
}


backtrack(0);

console.log(maxDifference);