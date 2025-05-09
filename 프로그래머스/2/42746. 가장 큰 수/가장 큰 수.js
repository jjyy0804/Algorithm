function solution(numbers) {
    const numbersToStrings=numbers.map(number=>String(number));
    numbersToStrings.sort((a,b)=>(b+a).localeCompare(a+b));
    
     const result = numbersToStrings.join('');
    return result[0] === '0' ? '0' : result;
}