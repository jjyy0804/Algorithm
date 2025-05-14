function solution(number) {    
    let result=0;
    const dfs = (start,sum,count) =>{
        if(count===3){
            if(sum===0) result++;
            return;            
        }
        
        for(let i = start ; i<number.length; i++){
            dfs(i+1,sum+number[i],count+1);
        }
    }
    dfs(0,0,0)
    return result;
}