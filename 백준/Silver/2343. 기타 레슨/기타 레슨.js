const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

let left = Math.max(...array);
let right = array.reduce((acc, cur) => acc + cur);

let answer = 0;
while (left <= right) {
  let cnt = 1;
  let mid = Math.floor((left + right) / 2);
  let tmp = 0;
  for (let i = 0; i < array.length; i++) {
    if (tmp + array[i] <= mid) {
      tmp += array[i];
    } else {
      tmp = 0 + array[i];
      cnt++;
    }
  }

  if (cnt > M) {
    left = mid + 1;
  } else {
    answer = mid;
    right = mid - 1;
  }
}

console.log(answer);