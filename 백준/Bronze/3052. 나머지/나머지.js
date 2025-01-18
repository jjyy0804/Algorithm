let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let toNumberArray = input.map((el) => Number(el) % 42);

let set = new Set(toNumberArray);
console.log(set.size);
