function solution(s)
{
    const arr = s.split('');
    const result=[]
    
    for(let i=0;i<s.length;i++ ){
        if(result[result.length-1]!==arr[i]){
            result.push(arr[i]);
        }else{
            result.pop();
        }
    }
    
    return result.length>0?0:1;
}