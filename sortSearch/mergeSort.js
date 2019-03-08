/**
 * Recursively splits the array into halves
 * until the subarrays are a single element long,
 * then uses a two-index sorting method of all
 * the subarrays, merging all the way until the
 * full array is sorted
 */
const mergeSort = arr => {
  // The merge method, sorts the
  // left and right subarrays
  const sort = (left, right) => {
    let i = 0,
      j = 0;
    const output = [];
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        output.push(left[i]);
        i++;
      } else {
        output.push(right[j]);
        j++;
      }
    }
    return output.concat(left.slice(i)).concat(right.slice(j));
  };

  // Recursively divide and conquer
  const recurse = arr => {
    // Base case
    if (arr.length === 1) {
      return arr;
    }

    // Recursive case, split the array in half
    const left = arr.slice(0, Math.floor(arr.length / 2));
    const right = arr.slice(Math.floor(arr.length / 2), arr.length);
    return sort(recurse(left), recurse(right));
  };

  return recurse(arr);
};

console.log(mergeSort([7, 2, 6, 9, 3, 5, 1, 8, 10]));
