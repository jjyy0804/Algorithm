function solution(d, budget) {
  var answer = 0;
  let count = 0;
  d.sort((a,b)=>a-b);  
  for (let i = 0; i < d.length; i++) {
    if (budget >= d[i]) {
      budget -= d[i]
      count++;
    }
  }
  answer = count;
  return answer;
}