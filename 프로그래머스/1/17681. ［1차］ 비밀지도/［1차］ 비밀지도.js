function solution(n, arr1, arr2) {
    const decodedArr1 = [];
    const decodedArr2 = [];

    arr1.forEach(el => {
        decodedArr1.push(el.toString(2).padStart(n, "0"));
    });
    arr2.forEach(el => {
        decodedArr2.push(el.toString(2).padStart(n, "0"));
    });

    const answer = [];

    for (let i = 0; i < n; i++) {
        let mergedRow = "";
        for (let j = 0; j < n; j++) {
            if (decodedArr1[i][j] === "1" || decodedArr2[i][j] === "1") {
                mergedRow += "#";
            } else {
                mergedRow += " ";
            }
        }
        answer.push(mergedRow);
    }

    return answer;
}
