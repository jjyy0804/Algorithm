let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'))

let i = 1
let total = 0
while (i <= input) {
  total += i;
  if (total == input) {
    break;
  } else if (total > input) {
    i--;
    break;
  }
  i++
}

console.log(i)