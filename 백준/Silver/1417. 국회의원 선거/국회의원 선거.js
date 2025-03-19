const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const N = input.shift();
let myVotes = input.shift();

if (N === 1) {
  console.log(0);
  return
};
let max = Math.max(...input);
let count = 0;

while (myVotes <= max) {
  input[input.indexOf(max)] -= 1;
  myVotes += 1;
  count += 1;
  max = Math.max(...input);
}
console.log(count);

