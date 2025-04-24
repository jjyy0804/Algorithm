function solution(sizes) {
    let maxNum=-Infinity;
    let minNum=Infinity;
    let minNumbers=[];
    for(let i = 0;i<sizes.length;i++){
        maxNum=Math.max(maxNum,Math.max(sizes[i][0],sizes[i][1]))
    }
   
    for(let i = 0;i<sizes.length;i++){
        minNumbers.push( Math.min(minNum,Math.min(sizes[i][0],sizes[i][1])));
    }
    minNum=Math.max(...minNumbers);

    return maxNum*minNum;
}