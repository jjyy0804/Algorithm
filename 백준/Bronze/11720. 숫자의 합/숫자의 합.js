let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')[1].split('').map(Number);

let answer = input.reduce((acc, i) => acc + i);
console.log(answer);