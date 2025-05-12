function solution(N, stages) {
    const stageCounts = Array(N + 2).fill(0); 
    for (const stage of stages) {
        stageCounts[stage]++;
    }

    const result = [];
    let totalPlayers = stages.length;

    for (let stage = 1; stage <= N; stage++) {
        const current = stageCounts[stage];
        const failureRate = totalPlayers === 0 ? 0 : current / totalPlayers;
        result.push({ stage, failureRate });
        totalPlayers -= current;
    }

    result.sort((a, b) => {
        if (b.failureRate === a.failureRate) return a.stage - b.stage;
        return b.failureRate - a.failureRate;
    });

    return result.map(el => el.stage);
}
