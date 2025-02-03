let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const array = input.map(Number);

let cnt = 0;
for (let i = N - 2; i >= 0; i--) {
  if (array[i] >= array[i + 1]) {
    let gap = array[i] - array[i + 1] + 1;
    cnt += gap;
    array[i] -= gap;
  }
}


console.log(cnt);