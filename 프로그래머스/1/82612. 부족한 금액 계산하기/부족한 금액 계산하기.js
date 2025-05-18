function solution(price, money, count) {
    const arr= Array.from({length:price},(_,i)=>i+1);
    let sum =0;
    for(let i =1;i<=count;i++){
        sum+=i*price;
    }
    return (money-sum)>0?0:sum-money;
}