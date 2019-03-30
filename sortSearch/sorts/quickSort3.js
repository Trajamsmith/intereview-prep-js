/**
 * Let's do this one in-place
 */
const quickSort = arr => {
  const traverse = sub => {
    partition(0, sub.length - 1);
  };

  const partition = (low, high) => {
    let i = low,
      j = low;

    while (i < high) {
      if (arr[i] < arr[high]) {
        swap(i, j);
        j++;
      }
      i++;
    }

    swap(j, high);
    return j;
  };

  const swap = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  traverse(arr);
  return arr;
};

const arr = [5, 7, 3, 8, 9, 2, 1, 4];
console.log(quickSort(arr));
