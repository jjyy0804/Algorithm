let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

let left = 0;
let right = 0;
let sum = 0;
let count = 0;

while (right < N) {
  sum += array[right];

  while (sum > M) {
    sum -= array[left];
    left++;
  }

  if (sum === M) {
    count++;
  }

  right++;
}

console.log(count);
