let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); //[ '5\r', '3 1 4 3 2' ]
let numArr = input[1].split(' ').map((el) => Number(el)).sort((a, b) => a - b) //[ 1, 2, 3, 3, 4 ]

let answer = 0;

for (let i = 1; i <= numArr.length; i++) {
  let sliceArr = numArr.slice(0, i);   //[1],[1,2],[1,2,3],[1,2,3,3],[1,2,3,3,4]
  answer += sliceArr.reduce((acc, curr) => acc + curr, 0);
}
console.log(answer)


