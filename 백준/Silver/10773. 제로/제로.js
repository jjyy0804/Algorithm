let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(Number);

let array = [];
for (let i = 1; i <= input[0]; i++) {
  if (input[i]) {
    array.push(input[i]);
  } else {
    array.pop();
  }
}

if (array.length === 0) {
  console.log(0)
} else {
  console.log(array.reduce((acc, i) => acc + i));
}


