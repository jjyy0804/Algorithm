let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let nums = input.replace(/[^0-9]/g, " ").split(' ').map(Number);  // 숫자 배열
let signs = input.replace(/[0-9]/g, "").trim().split(''); //부호 배열
let result = nums[0];
for (let i = 0; i < signs.length; i++) {
  if (signs[i] === '-') {
    if (signs[i + 1] === '+') {   //- + 일 경우
      result -= nums[i + 1];
      signs[i + 1] = '-'; //+를 -로 변경
    } else {
      result -= nums[i + 1];  //- - 일 경우
    }
  } else {
    result += nums[i + 1]; //+ 일 경우
  }
}
console.log(result)