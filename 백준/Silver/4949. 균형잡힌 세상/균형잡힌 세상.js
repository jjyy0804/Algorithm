let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 0; i < input.length; i++) {
  let array = [];
  if (input[i] === '.') break;

  let isBalanced = true;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === '(' || input[i][j] === '[') {
      array.push(input[i][j]);
    } else if (input[i][j] === ')' || input[i][j] === ']') {
      if (
        (input[i][j] === ')' && array[array.length - 1] === '(') ||
        (input[i][j] === ']' && array[array.length - 1] === '[')
      ) {
        array.pop();
      } else {
        isBalanced = false;
        break;
      }
    }
  }

  if (isBalanced && array.length === 0) {
    console.log("yes")
  } else {
    console.log("no");
  }
}


