const countIslands = grid => {
  let count = 0;

  // Sink the island after counting it
  const sinkIsland = (r, c) => {
    if (!grid[r][c]) {
      return;
    } else {
      grid[r][c] = 0;
    }

    // up
    if (grid[r - 1]) sinkIsland(r - 1, c);
    // left
    sinkIsland(r, c - 1);
    // down
    if (grid[r + 1]) sinkIsland(r + 1, c);
    // right
    sinkIsland(r, c + 1);
  };

  // Main loop
  for (let row = 0; row < grid.length; row++) {
    for (let cell = 0; cell < grid[row].length; cell++) {
      if (grid[row][cell]) {
        count++;
        sinkIsland(row, cell);
      }
    }
  }

  return count;
};

console.log(
  countIslands([
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
  ])
);
