let fs = require('fs');
let input =fs.readFileSync('/dev/stdin').toString().split('\n'); //[ '5 2\r', '4 1 2 3 5' ]

let arr=[]
for(let value of input){
  arr.push(value.trim().split(' ')) //[ [ '5', '2' ], [ '4', '1', '2', '3', '5' ] ]
}

function solution(input){

let newArr=input.map((outer)=>outer.map((inner)=>Number(inner))); //String->Number 

let ascArr = newArr[1].sort((a,b)=>a-b);  //오름차순 정렬
let k = ascArr.at(newArr[0][1]-1);  //k번째 인덱스에 있는 항목 반환

console.log(k)
}

solution(arr);

