/**
 * Attempt number two, writing
 * quick sort from memory
 */
const quickSort = arr => {
  const splitLR = arr => {
    const pivot = arr[0],
      left = [],
      right = [];

    for (let val of arr.slice(1)) {
      if (val <= pivot) {
        left.push(val);
      } else if (val > pivot) {
        right.push(val);
      }
    }

    return [left, right];
  };

  const sort = arr => {
    if (arr.length <= 1) {
      return arr;
    }

    const [left, right] = splitLR(arr);
    return sort(left)
      .concat(arr[0])
      .concat(sort(right));
  };

  return sort(arr);
};

console.log(quickSort([68, 73, 2, 54, 11, 9, 2, 102]));
