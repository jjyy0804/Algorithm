let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let toNumberArray = input.map((el) => Number(el));
let sortArray = toNumberArray.sort((a, b) => a - b);

for (let i = 1; i <= 30; i++) {
  if (!sortArray.includes(i)) {
    console.log(i);
  }
}
