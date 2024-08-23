function solution(board, moves) {
    var answer = 0;
    let basket=[];
    let location=moves.map((move)=>move-1);
    
    for(let i=0;i<location.length;i++){
      for(let j=0;j<board.length;j++){
          if(board[j][location[i]]!==0){
              let item=board[j][location[i]];
              board[j][location[i]]=0;
              
              if(basket[basket.length-1]!==item){
                  basket.push(item);
              }else{
                  basket.pop();
                  answer+=2;
              }break;
          }
      }
    }
    return answer;
}