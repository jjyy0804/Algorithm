function solution(nums) {
  var answer = 0;
  let myPonketmon = nums.length/2;
  let filtered = [...new Set(nums)];
  if (filtered.length > myPonketmon) {
    answer = myPonketmon;
  } else {
    answer = filtered.length;
  }
  return answer;
}