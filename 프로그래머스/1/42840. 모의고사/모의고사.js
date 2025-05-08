function solution(answers) {
    const a = [1,2,3,4,5]
    const b = [2,1,2,3,2,4,2,5];
    const c = [3,3,1,1,2,2,4,4,5,5];
    let aCount =0;
    let bCount =0;
    let cCount =0;
    
    for(let i =0 ; i<answers.length;i++){
        if(a[(i%5)]===answers[i]) aCount++;
        if(b[(i%8)]===answers[i]) bCount++;
        if(c[(i%10)]===answers[i]) cCount++;
    }
    
    const maxScore = Math.max(aCount, bCount, cCount);
    const result = [];

    if (aCount === maxScore) result.push(1);
    if (bCount === maxScore) result.push(2);
    if (cCount === maxScore) result.push(3);
    
    return result;
}