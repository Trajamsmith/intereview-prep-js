/**
 * Works by creating a pivot (here we're
 * just using the first element of the array)
 * and moving all smaller values to the left
 * and all larget values to the right, then
 * recursively doing this operation on smaller
 * and smaller subarrays, befor mergin them agian
 */
const quickSort = arr => {
  // Split into smaller than and
  // larger than subarrays
  const split = arr => {
    const pivot = arr[0],
      left = [],
      right = [];

    for (let el of arr.slice(1)) {
      if (el < pivot) {
        left.push(el);
      } else if (el > pivot) {
        right.push(el);
      }
    }

    return [left, right];
  };

  // Subdivide the array, and then
  // merge them into a fully sorted one
  const recurse = arr => {
    if (!arr.length) return [];

    const [left, right] = split(arr);
    return recurse(left)
      .concat(arr[0])
      .concat(recurse(right));
  };

  return recurse(arr);
};

console.log(quickSort([4, 10, 8, 7, 6]));
