const islandPerimeter = (grid) => {
  let perimiter = 0;
  let row = grid.length;
  let column = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j]) {
        if (i === 0 || (i > 0 && grid[i - 1][j] === 0)) perimiter++;
        if (i === row - 1 || (i < row - 1 && grid[i + 1][j] === 0)) perimiter++;
        if (j === 0 || (j > 0 && grid[i][j - 1] === 0)) perimiter++;
        if (j === column - 1 || (j < column && grid[i][j + 1] === 0))
          perimiter++;
      }
    }
  }
  return perimiter;
};
