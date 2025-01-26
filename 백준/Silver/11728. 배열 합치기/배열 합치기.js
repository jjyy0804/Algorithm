let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = input.slice(1, 3).join(' ').split(' ').map(Number).sort((a, b) => a - b).join(' ');
console.log(result);