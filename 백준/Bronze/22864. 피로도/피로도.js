const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B, C, M] = input;
let tiredness = 0;
let workAmount = 0;
let i = 0;

while (i < 24) {
  if (tiredness + A > M) {
    tiredness -= C;
    if (tiredness < 0) tiredness = 0;
  } else {
    tiredness += A;
    workAmount += B;
  }

  i++
}

console.log(workAmount);
