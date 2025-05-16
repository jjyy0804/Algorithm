function solution(s) {
    let result = '';
    let idx = 0; // 단어 내 위치
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === ' ') {
            result += ' ';
            idx = 0; // 단어 경계 초기화
        } else {
            result += idx % 2 === 0
                ? char.toUpperCase()
                : char.toLowerCase();
            idx++;
        }
    }
    
    return result;
}
