const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const meetings = input.map(el => el.split(" ").map(Number));

meetings.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let count = 0;
let endTime = 0;

for (const [start, end] of meetings) {
  if (start >= endTime) {
    count++;
    endTime = end;
  }
}

console.log(count);