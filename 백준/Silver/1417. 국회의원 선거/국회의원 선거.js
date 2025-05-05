const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let dasom = +input.shift();
let voteList = input.map(Number);

let count = 0;

while (true) {

  // 최다 득표자 구하기 (다솜 제외)
  let maxVote = Math.max(...voteList);

  if (dasom > maxVote) break;

  const idx = voteList.indexOf(maxVote); // 최다 득표자의 인덱스
  voteList[idx]--;
  dasom++;
  count++;
}

console.log(count);
