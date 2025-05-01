const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
let n = +input;
let count = 0;
while (n >= 0) {
  if (n % 5 === 0) {
    count += Math.floor(n / 5);
    console.log(count);
    return;
  }
  n -= 3;
  count++;
}

console.log(-1);