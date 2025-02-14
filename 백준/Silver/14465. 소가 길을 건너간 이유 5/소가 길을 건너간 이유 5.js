let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K, B] = input[0].split(" ").map(Number);
const broken_traffic_lights = input.slice(1).map(Number);

const broken = Array(N + 1).fill(0);
for (let light of broken_traffic_lights) {
  broken[light] = 1;
}

const prefix = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  prefix[i] = prefix[i - 1] + broken[i];
}

let min_repair = Infinity;
for (let i = K; i <= N; i++) {
  let broken_count = prefix[i] - prefix[i - K];
  min_repair = Math.min(min_repair, broken_count);
}

console.log(min_repair);