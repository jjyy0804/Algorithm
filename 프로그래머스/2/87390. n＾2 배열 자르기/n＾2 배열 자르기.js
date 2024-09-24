function solution(n, left, right) {
    var answer = [];

    // left부터 right까지의 범위만 순회하면서 필요한 값만 계산
    for (let idx = left; idx <= right; idx++) {
        let row = Math.floor(idx / n);  // 행 구하기
        let col = idx % n;              // 열 구하기
        answer.push(Math.max(row, col) + 1);  // 해당 위치의 값을 계산하여 추가
    }

    return answer;
}