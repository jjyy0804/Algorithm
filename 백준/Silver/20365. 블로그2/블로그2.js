const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n')

const N = input.shift();
const colors = input[0].split("");

let blueCount = 0;
let redCount = 0;

for (let i = 0; i < colors.length; i++) {
  if (colors[i] !== colors[i - 1]) {
    if (colors[i] === 'B') blueCount++;
    else if (colors[i] === 'R') redCount++;
  }
}
console.log((Math.min(blueCount, redCount) + 1));
