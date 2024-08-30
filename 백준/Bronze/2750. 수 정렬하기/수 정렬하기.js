let fs = require('fs');
let input =fs.readFileSync('/dev/stdin').toString().split('\n');
let testCase=[]
for(const value of input){
  testCase.push(parseInt(value.trim()));
}

function solution(testCase){
  let n = testCase[0];
  let arr=[];
  for(let i = 1; i < n+1 ; i++){
    arr.push(testCase[i]);
  }
  let result = arr.sort((a,b)=>a-b).toString().replaceAll(",","\n");
  console.log(result);
}

solution(testCase);