function solution(wallpaper) {
    let toArr = wallpaper.map(row => row.split(''));

    let minRow = Infinity, maxRow = -Infinity;
    let minCol = Infinity, maxCol = -Infinity;

    // 2차원 배열을 순회하면서 "#"이 있는 위치 찾고 동시에 최소, 최대값 갱신
    toArr.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            if (col === '#') {
                minRow = Math.min(minRow, rowIndex);
                maxRow = Math.max(maxRow, rowIndex);
                minCol = Math.min(minCol, colIndex);
                maxCol = Math.max(maxCol, colIndex);
            }
        });
    });

    return [minRow, minCol, maxRow + 1, maxCol + 1];
}
