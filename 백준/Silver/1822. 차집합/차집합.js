const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [sizeA, sizeB] = input[0].split(" ").map(Number);
const setA = new Set(input[1].split(" ").map(Number));
const setB = new Set(input[2].split(" ").map(Number));

const result = [...setA].filter(num => !setB.has(num)).sort((a, b) => a - b);

console.log(result.length);
if (result.length > 0) {
    console.log(result.join(" "));
}
