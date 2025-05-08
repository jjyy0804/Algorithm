function solution(k, tangerine) {
    
    let counter={};
    
   for (const t of tangerine) {
    counter[t] = (counter[t] || 0) + 1;
  }
    const sorted = Object.values(counter).sort((a, b) => b - a);
    
    let count =0;
    let types = 0;
    for(c of sorted){
        count += c;
        types++;
        if(count>=k) break;
    }
        return types;
}