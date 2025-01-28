const { count } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const array = input.slice(1,);
let A = [];
let B = [];
let index = 0;

for (let i = 0; i < T; i++) {
  let count = 0;
  index++;
  A = array[index++].trim().split(' ').map(Number).sort((a, b) => a - b);
  B = array[index++].trim().split(' ').map(Number).sort((a, b) => a - b);

  let current = 0;
  for (let j = 0; j < B.length; j++) {
    if (A[current] > B[j]) {
      count += A.length - current;
    }
    if (A[current] <= B[j]) {
      current++;
      j--;  // j++ 무력화
    }
  }
  console.log(count);
}