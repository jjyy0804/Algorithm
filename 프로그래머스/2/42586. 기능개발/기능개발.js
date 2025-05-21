function solution(progresses, speeds) {
    const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

    const result = [];
    let currentMax = days[0];
    let count = 1;

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= currentMax) {
            count++;  // 함께 배포 가능
        } else {
            result.push(count);  // 이전 배포 수 push
            currentMax = days[i];  // 새로운 기준일로 갱신
            count = 1;
        }
    }

    result.push(count); 
    return result;
}
