function solution(people, limit) {
  let answer = 0;
  let sortPeople = people.sort((a, b) => a - b);
  let i = 0;
  let j = sortPeople.length - 1;

  while (i <= j) {
    if (sortPeople[i] + sortPeople[j] <= limit) {
      i++;
    }
    j--;
    answer++;
  }

  return answer;
}
