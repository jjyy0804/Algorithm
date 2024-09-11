function countOne(n) {
  return n.toString(2).split('').filter(el => el == "1").length
}
function solution(n) {
  var answer = 0;
  let curr = countOne(n);
  let next = n + 1;
  while (1) {
    next_large_value = countOne(next);
    if (curr == next_large_value) {
      break;
    }
    next += 1;
  }
  return next;

}