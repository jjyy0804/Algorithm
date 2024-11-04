function solution(s) {
  let arr = []; 
  let temp = ""; 
    
  for (const char of s) {
    if (/[0-9]/.test(char)) {
      // 숫자인 경우 바로 배열에 추가
      arr.push(Number(char));
    } else {
      temp += char;
      switch (temp) {
        case "zero":
          arr.push(0);
          temp = "";
          break;
        case "one":
          arr.push(1);
          temp = "";
          break;
        case "two":
          arr.push(2);
          temp = "";
          break;
        case "three":
          arr.push(3);
          temp = "";
          break;
        case "four":
          arr.push(4);
          temp = "";
          break;
        case "five":
          arr.push(5);
          temp = "";
          break;
        case "six":
          arr.push(6);
          temp = "";
          break;
        case "seven":
          arr.push(7);
          temp = "";
          break;
        case "eight":
          arr.push(8);
          temp = "";
          break;
        case "nine":
          arr.push(9);
          temp = "";
          break;
      }
    }
  }
  arr=arr.join('')
  return Number(arr);
}
