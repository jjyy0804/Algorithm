let fs = require('fs');
let input =fs.readFileSync('/dev/stdin').toString().split('\n');

let arr=[]
for(let value of input){
  arr.push(value.trim().split(' ')) //공백 제거
}

//[String, String]-->][Int, String] 배열로 변환
let toIntArr = arr.map((value) => {
  let firstValue = parseInt(value[0]);
  return value[1] !== undefined ? [firstValue, value[1]] : null;
}).filter(Boolean);


function solution(testCase){
  testCase.sort((a, b) => a[0] - b[0]);
  let answer=testCase.join('\n').replaceAll(',', ' ');
  console.log(answer)

}

solution(toIntArr)