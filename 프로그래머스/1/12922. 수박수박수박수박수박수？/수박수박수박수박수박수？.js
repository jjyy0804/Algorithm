function solution(n) {
   const stack=["수"];
   for(let i =1; i<n;i++){
       if(stack[i-1]==="수"){
           stack.push("박");
       }else{
           stack.push("수")
       }
   }
   return stack.join("");
}