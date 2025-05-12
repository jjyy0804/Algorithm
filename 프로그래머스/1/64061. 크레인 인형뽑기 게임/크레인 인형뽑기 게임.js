function solution(board, moves) {
    const stack=[];
    let disappearCount = 0;
    
    for(let i=0;i<moves.length;i++){
        for(let j =0;j<board.length;j++){
            const findItem=board[j][moves[i]-1];
            if(findItem!==0){
                if(stack[stack.length-1]===findItem){
                    stack.pop();
                    disappearCount+=2;
                }else{
                     stack.push(findItem);
                }
                board[j][moves[i]-1]=0;
                break;
            }
        }
        
    }
    return disappearCount;
}