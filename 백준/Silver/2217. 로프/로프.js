const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const N = input.shift();
const maxWeights = input.sort((a, b) => a - b);
let sum = 0;

for (let i = 0; i < maxWeights.length; i++) {
  let restRope = maxWeights.length - i;
  sum = Math.max(maxWeights[i] * restRope, sum);
}

console.log(sum);