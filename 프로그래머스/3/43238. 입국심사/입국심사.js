function solution(n, times) {
    let start=1;
    let end = Math.max(...times)*n; // 가장 오래 걸리는 심사대에서 모두가 받는 경우
    let answer;
    
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        let total=0;
        times.forEach(time=>{
           total+= Math.floor(mid/time);
        })
        
        if(total>=n){
            end=mid-1;
        }else{
            start=mid+1;
            answer=start;
        }
    }
    return answer;
}