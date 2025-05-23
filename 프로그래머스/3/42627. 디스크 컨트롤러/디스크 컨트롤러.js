function solution(jobs) {
    let answer = 0;
    let index = 0;
    let now = 0;
    let sum = 0;
    const length = jobs.length;
    
    jobs.sort((a, b) => a[0]- b[0]); // 요청시간순
    
    const waiting = [];
    
    while (index < jobs.length || waiting.length > 0) {
        if (index < jobs.length && now >= jobs[index][0]) {
            waiting.push(jobs[index]);
            index += 1;
            
            waiting.sort((a, b) => a[1] - b[1]);    // 소요시간 순
            continue;
        }
        if (!waiting.length) {
            now = jobs[index][0];
        } else {
            const first = waiting.shift();
            sum += now - first[0] + first[1];
            
            now += first[1];
        }
    }
    
    answer = Math.floor(sum / length);
    
    return answer;
}