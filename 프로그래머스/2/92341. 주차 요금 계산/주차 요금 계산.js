function solution(fees, records) {
    const results = {};
    const object = {};
    
    for (let i = 0; i < records.length; i++) {
        const [time, carNumber, type] = records[i].split(" ");
        const [hour, minutes] = time.split(":").map(Number);
        const timeToMinutes = hour * 60 + minutes;
        
        if (type === "IN") {
            object[carNumber] = timeToMinutes;
        } else {
            const diffTime = timeToMinutes - object[carNumber];
            results[carNumber] = (results[carNumber] || 0) + diffTime;
            delete object[carNumber];
        }
    }

    // 출차 기록이 없는 차는 23:59 출차로 간주
    for (let carNumber in object) {
        const diffTime = (23 * 60 + 59) - object[carNumber];
        results[carNumber] = (results[carNumber] || 0) + diffTime;
    }

    // 요금 계산
    const answer = Object.keys(results)
        .sort((a, b) => a.localeCompare(b))
        .map((carNumber) => {
            const totalTime = results[carNumber];
            if (totalTime <= fees[0]) return fees[1];
            return (
                fees[1] +
                Math.ceil((totalTime - fees[0]) / fees[2]) * fees[3]
            );
        });

    return answer;
}
