let fs = require('fs');
let input =fs.readFileSync('/dev/stdin').toString().split(" ");

function solution(testCase){
  let numInput=testCase.map((value)=>parseInt(value));
  let answer = numInput.sort((a,b)=>a-b).toString().replaceAll(","," ")
  console.log(answer);
}

solution(input);