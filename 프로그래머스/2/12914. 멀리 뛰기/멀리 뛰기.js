function solution(n) {
    const dp =Array.from({length:n},()=>Infinity);
    dp[0]=0;
    dp[1]=1;
    dp[2]=2;
    dp[3]=3;
    dp[4]=5;
    for(let i =5;i<=n;i++){
        dp[i]=(dp[i-2]+dp[i-1]) % 1234567;;
    }
    return dp[n];
}