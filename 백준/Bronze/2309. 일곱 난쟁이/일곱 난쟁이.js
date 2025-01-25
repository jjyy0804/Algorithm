let fs = require('fs');
const { format } = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number).sort((a, b) => a - b);

let total = input.reduce((acc, i) => acc + i);
let answer = [];

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if ((total - 100) === (input[i] + input[j])) {
      answer = input.filter((item) => item !== input[i] && item != input[j]);
      break;
    }
  }
}
console.log(answer.join('\n'))