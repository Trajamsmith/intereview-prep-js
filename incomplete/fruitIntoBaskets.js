// TODO: finish for all edge cases, on the right track
const totalFruit = tree => {
  // types are tuples, given as
  // [value, firstIndexForThisValue]
  let types = [[], [tree[0], 0]],
    maxRun = 0;

  for (let i = 1; i < tree.length; i++) {
    if (tree[i] !== types[0][0] && tree[i] !== types[1][0]) {
      // If we haven't filled the first two types
      // then fill them up before we calculate runs
      if (!types[0].length) {
        currRun = i + 1;
        types = [types[1], [tree[i], i]];
        if (currRun > maxRun) {
          maxRun = currRun;
        }
      } else {
        // Calculate runs
        currRun = i - types[0][1];
        types = [types[1], [tree[i], i]];
        if (currRun > maxRun) {
          maxRun = currRun;
        }
      }
    }
  }

  // One last calculation, so we can
  // check for runs ending at the
  // end of the array
  const ind = types[0][1] !== undefined ? types[0][1] : types[1][1];
  currRun = tree.length - ind;
  if (currRun > maxRun) {
    maxRun = currRun;
  }

  return maxRun;
};

// console.log(totalFruit([]))
// console.log(totalFruit([0, 1, 1, 4, 3]));
console.log(totalFruit([3, 3, 3, 1, 4]));
console.log(totalFruit([1, 1, 1, 1, 1, 1, 1]));
console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
// console.log(totalFruit([0, 1, 6, 6, 4, 4, 6]));
