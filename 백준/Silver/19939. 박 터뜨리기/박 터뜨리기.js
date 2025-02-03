let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [N, K] = input.map(Number);

let sum = (K * (K + 1)) / 2;

if (N < sum) {
  console.log(-1);
  process.exit(0);
}

let remaining = N - sum;

let result = remaining % K === 0 ? K - 1 : K;
console.log(result);