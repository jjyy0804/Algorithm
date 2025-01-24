let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let quotaList = input[1].split(' ').map(Number);
let len = quotaList.length;
let availableTotal = Number(input[2]);

let start = 1;
let end = Math.max(...quotaList);

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let i = 0; i < len; i++) {
    total += Math.min(quotaList[i], mid);
  }

  if (total > availableTotal) {
    end = mid - 1;
  } else {
    start = mid + 1;
    result = mid;
  }

}

console.log(result)