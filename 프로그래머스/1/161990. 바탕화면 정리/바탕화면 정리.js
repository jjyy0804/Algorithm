function solution(wallpaper) {
    var answer = [];
    let toArr=wallpaper.map(row => row.split(''));
    
     toArr.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            if (col === '#') {
                // "#"이 있는 위치 (행, 열) 저장
                answer.push([rowIndex, colIndex]);
            }
        });
    });
    
     // 각 행과 열에 대해 최소값과 최대값 구하기
    let rows = answer.map(row => row[0]);  // 행 인덱스만 추출
    let cols = answer.map(col => col[1]);  // 열 인덱스만 추출

    let minRow = Math.min(...rows); // 행의 최소값
    let maxRow = Math.max(...rows); // 행의 최대값
    let minCol = Math.min(...cols); // 열의 최소값
    let maxCol = Math.max(...cols); // 열의 최대값

    let result=[minRow,minCol,maxRow+1,maxCol+1]

    return result;
}