let fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let newInput = input.map((el)=>el.split(' ').map(Number)); 
let arr = newInput.slice(1);

function solution(testCase){
  testCase.sort((a,b)=>a[0]-b[0] || a[1]-b[1]);  // x기준 오름차순 정렬 -> y기준 오름차순 정렬 [ [ 1, -1 ], [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 3, 4 ] ]
  let preResult = testCase.map((el)=>el.join(',').replace(',',' ')); // [ '1 -1', '1 1', '2 2', '3 3', '3 4' ]
  let result = preResult.toString().replaceAll(',','\n')
  console.log(result)
}

solution(arr);