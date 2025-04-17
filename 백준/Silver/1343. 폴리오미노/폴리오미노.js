const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(".");

let temp = '';

for (let i = 0; i < input.length; i++) {
  const segment = input[i];
  let segmentLength = segment.length;

  while (segmentLength >= 4) {

    temp += 'AAAA';
    segmentLength -= 4;
  }
  if (segmentLength === 2) {
    temp += "BB";
  } else if (segmentLength !== 0) {
    console.log(-1);
    return;
  }

  if (i !== input.length - 1) {
    temp += '.';
  }
}


console.log(temp);