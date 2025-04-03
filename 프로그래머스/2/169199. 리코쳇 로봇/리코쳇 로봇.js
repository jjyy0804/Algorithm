function solution(board) {
    const n = board.length;
    const m = board[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    let startX, startY, goalX, goalY;

    // 시작점(R)과 목표점(G) 찾기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'R') {
                startX = i;
                startY = j;
            } else if (board[i][j] === 'G') {
                goalX = i;
                goalY = j;
            }
        }
    }

    let queue = [[startX, startY, 0]];
    let visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[startX][startY] = true;
    
    // bfs
    while (queue.length > 0) {
        let [x, y, count] = queue.shift();

        if (x === goalX && y === goalY) return count; 

        for (let [dx, dy] of directions) {
            let nx = x, ny = y;

           
            while (
                nx + dx >= 0 && nx + dx < n &&
                ny + dy >= 0 && ny + dy < m &&
                board[nx + dx][ny + dy] !== 'D'
            ) {
                nx += dx;
                ny += dy;
            }

            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, count + 1]); 
            }
        }
    }

    return -1; 
}
