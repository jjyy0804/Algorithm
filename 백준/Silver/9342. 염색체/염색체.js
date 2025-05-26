const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

const regex = /^[A-F]?A+F+C+[A-F]*$/;

for (let i = 0; i < T; i++) {
  const str = input[i];
  console.log(regex.test(str) ? "Infected!" : "Good");
}
