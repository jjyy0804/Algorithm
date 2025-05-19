function solution(answers) {
    const a = [1,2,3,4,5];
    const b = [2,1,2,3,2,4,2,5];
    const c = [3,3,1,1,2,2,4,4,5,5];
    
    const counts=[0,0,0]
    
    for(let i =0;i<answers.length;i++){
        if(answers[i]===a[i%5]) counts[0]++;
        if(answers[i]===b[i%8]) counts[1]++;
        if(answers[i]===c[i%10]) counts[2]++;
    }
    
    const maxCount = Math.max(...counts);
    const results=[];
    
    for(let i = 0;i<counts.length;i++){
        if(counts[i]===maxCount){
            results.push(i+1);
        }
    }
    return results;
}