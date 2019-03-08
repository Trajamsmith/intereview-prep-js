/**
 * Works by greedily progressing along the path
 * and changing directions (given as vecotrs)
 * when running up against boundaries
 */
const printSpiral = size => {
  const spiral = Array(size)
    .fill(0)
    .map(arr => Array(size).fill(0));

  // The direction vectors are referenced using
  // the currDir value, just as an array index
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let currDir = 0;
  let currCell = [0, 0];

  const addArray = (arr1, arr2) => {
    return [arr1[0] + arr2[0], arr1[1] + arr2[1]];
  };

  let count = 1;
  while (count <= size * size) {
    // Update spiral value
    spiral[currCell[0]][currCell[1]] = count;

    // Break if we've reached the end
    if (count === size * size) break;

    // Find coordinates of next cell in
    // the current direction
    let nextCell = addArray(dirs[currDir], currCell);

    // If the nextNode is out of bounds vertically
    // change directions
    let nextNode;
    try {
      nextNode = spiral[nextCell[0]][nextCell[1]];
    } catch {
      currDir = (currDir + 1) % 4;
      continue;
    }

    // If the node is out of bounds horizontally
    // change directions
    if (nextNode === undefined || nextNode > 0) {
      currDir = (currDir + 1) % 4;
      continue;
      // If not, progress the spiral
    } else {
      currCell = nextCell;
      count++;
    }
  }

  return spiral;
};

console.log(printSpiral(4));
