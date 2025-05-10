function solution(a, b) {
    let result=0;
    a.forEach((i,index)=>{
        result+=i*b[index];
    })
    return result;
}