function solution(n) {
    // 투포인터
    const arr = Array.from({length:n},(_,i)=>i+1);
    let left= 1;
    let right= 1;
    let sum = 1;
    
    let result=0;
    
    while(left<=n){
        if(sum===n) {
            result++;
        }
        if(sum<n){
            right++;
            sum+=right;
        }else if(sum>=n){
            sum-=left;
            left++;
        }
    }
    return result;
}