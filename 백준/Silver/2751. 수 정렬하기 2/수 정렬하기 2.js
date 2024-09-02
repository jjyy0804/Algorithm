let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

let testArr = input.slice(1,);

function solution(testCase){
  testCase.sort((a,b)=>a-b)
  console.log(testCase.join('\n'));
}

solution(testArr);