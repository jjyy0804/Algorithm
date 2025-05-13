function solution(n, words) {
    const used = new Set();
    used.add(words[0]);

    for (let i = 1; i < words.length; i++) {
        const prev = words[i - 1];
        const curr = words[i];

        // 조건 1: 이전 단어의 끝 문자와 현재 단어의 첫 문자가 다르면
        // 조건 2: 이미 사용한 단어라면
        if (prev[prev.length - 1] !== curr[0] || used.has(curr)) {
            const person = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [person, turn];
        }

        used.add(curr);
    }

    return [0, 0]; // 탈락자 없음
}