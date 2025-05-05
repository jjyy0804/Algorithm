function solution(n, times) {
    let start=1;
    let end=n*(Math.max(...times));
    let answer=end;
    
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        const processed = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
        
        if(processed>=n){
            answer=mid;
            end=mid-1;
        }else{
            start=mid+1
        }
    }
    return answer;
}