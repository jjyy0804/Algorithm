function solution(participant, completion) {
  let total={}
  // 전체 참여자
  for(let name of participant){
      total[name]=(total[name]||0)+1;
  }
  // 전체 참여자 - 완주 못한 참여자
   for(let name of completion){
     total[name]-=1;
  }
    for(let name in total){
        if(total[name]===1) return name;
    }
}
