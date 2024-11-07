function solution(s) {
    let answer = '';
    let mid = Math.floor(s.length/2);
    s.length%2===0? answer=s[mid-1]+s[mid]:answer=s[mid]
    return answer;
}