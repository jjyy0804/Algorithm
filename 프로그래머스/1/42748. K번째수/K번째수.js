function solution(array, commands) {
    var answer = [];
    let newArray;
    for(let value of commands){
        newArray=array.slice(value[0]-1,value[1]);
        newArray.sort((a,b)=>a-b)
        answer.push(newArray[value[2]-1]);
    }        
    return answer;
}