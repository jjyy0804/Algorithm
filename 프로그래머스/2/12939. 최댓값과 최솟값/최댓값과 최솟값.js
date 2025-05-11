function solution(s) {
    const arr = s.split(" ").map(Number);
    let answer =String(Math.min(...arr))+' '+String(Math.max(...arr))

    return answer;
}