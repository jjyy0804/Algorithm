function solution(s){
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else {
            if (stack.length === 0) return false; // ❗닫는 괄호인데 열려있는 게 없음
            stack.pop();
        }
    }
    return stack.length === 0;
}
