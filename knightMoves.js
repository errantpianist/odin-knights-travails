function knightMoves(start, end) {
  const board = Array(8)
    .fill()
    .map(() =>
      Array(8)
        .fill()
        .map(() => ({ visited: false, parent: null }))
    );
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  const queue = [start];
  board[start[0]][start[1]].visited = true;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && !board[nx][ny].visited) {
        board[nx][ny].visited = true;
        board[nx][ny].parent = [x, y];
        if (nx === end[0] && ny === end[1]) {
          const moves = [];
          let current = end;
          while (current) {
            moves.unshift(current);
            current = board[current[0]][current[1]].parent;
          }
          console.log(
            `You made it in ${moves.length - 1} moves! Here's your path:`
          );
          console.log(moves);
          return;
        }
        queue.push([nx, ny]);
      }
    }
  }
}
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
