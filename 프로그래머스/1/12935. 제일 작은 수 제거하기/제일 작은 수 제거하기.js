function solution(arr) {
    const filteredArr=arr.filter(f=>f>Math.min(...arr));
    return filteredArr.length>0? filteredArr:[-1];
    
    
}