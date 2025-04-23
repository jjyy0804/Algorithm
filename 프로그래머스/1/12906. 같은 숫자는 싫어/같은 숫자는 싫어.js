function solution(arr)
{
 let answer=[]
 for(let i =0;i<arr.length;i++){
     let lastValue=answer[answer.length-1];
     if(lastValue!==arr[i]){
         answer.push(arr[i]);
     }
 }
    return answer;
}