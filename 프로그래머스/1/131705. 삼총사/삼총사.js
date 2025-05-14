function solution(number) {
    let result = 0;
    let sum = 0;
    let count = 0;

    const dfs = (start) => {
        if (count === 3) {
            if (sum === 0) result++;
            return;
        }

        for (let i = start; i < number.length; i++) {
            sum += number[i];
            count++;

            dfs(i + 1);

            // 백트래킹
            sum -= number[i];
            count--;
        }
    };

    dfs(0);
    return result;
}
