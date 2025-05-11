function solution(s) {
    const S = s.split("");
    const num =["0","1","2","3","4","5","6","7","8","9"];
    
    if (!(s.length === 4 || s.length === 6)) return false;
    
    for (let i =0;i<S.length;i++){
        if(!num.includes(S[i])){
            return false;
        }
    }
    return true;
}