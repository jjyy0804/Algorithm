function solution(t, p) {
    const sliceSize = p.length;

    let count = 0;
    for(let i =0;i<=t.length-sliceSize;i++){
        let slicedNum = t.slice(i,i+sliceSize)
        
        if(slicedNum<=p) count++;
    }
    return count;
}