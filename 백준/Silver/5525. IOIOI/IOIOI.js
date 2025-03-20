const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());
const M = Number(input.shift());
const S = input.shift();

let count = 0;
let i = 0;

while (i < M - 1) {
  if (S[i] === "I") {
    patternCount = 0;

    while (i + 1 < M && S[i + 1] === "O" && i + 2 < M && S[i + 2] === "I") {
      patternCount++;
      i += 2;

      if (patternCount >= N) count++;
    }
  }
  i++;
}

console.log(count);