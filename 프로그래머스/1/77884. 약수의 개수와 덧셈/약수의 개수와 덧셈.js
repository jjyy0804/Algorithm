function solution(left, right) {
    let divisor=[];
    let total =0;
    
    for(let i=left;i<=right;i++){
        for(let j =1;j<=i;j++){
            if(i%j===0) divisor.push(j); 
        } 
        if(divisor.length%2===0){
            total+=i;
        }else{
            total-=i; 
        }
            divisor=[];
    }
    return total;
}