function solution(numbers) {
    const numberToString = numbers.map(String);
    const sortedArr = numberToString.sort((a,b)=>(b+a).localeCompare(a+b));
    
    return sortedArr[0] == 0 ? '0' :sortedArr.join("");
    
}