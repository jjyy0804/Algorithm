function solution(number, k) {
    const arr = number.split("").map(Number);
    const stack = [];
    let count = 0;
    
    for(let i =0;i<arr.length;i++){
        if(arr[i]>=stack[stack.length-1]){
            while(arr[i]>stack[stack.length-1]&&stack.length>0&&count<k){ 
                count++;
                stack.pop();
            }    
        }
     stack.push(arr[i]);    
    }
    // 만약 k개를 다 제거하지 못했다면, 뒤에서 추가로 제거
    while (count < k) {
        stack.pop();
        count++;
    }
    return stack.join("");
}
