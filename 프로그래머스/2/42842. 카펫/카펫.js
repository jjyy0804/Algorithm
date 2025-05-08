function solution(brown, yellow) {
    const total = brown + yellow;

    for (y = 3; y <= total / y; y++){
        var x = Math.floor((brown+yellow)/y);
        if((x-2)*(y-2)==yellow) break;
    }
    return [x,y]
}