/**
 * Attempt number two, writing
 * merge sort from memory
 */
const mergeSort = arr => {
  const merge = (l, r) => {
    const output = [];
    let li = 0,
      ri = 0;

    while (li < l.length && ri < r.length) {
      if (l[li] <= r[ri]) {
        output.push(l[li]);
        li++;
      } else if (r[ri] < l[li]) {
        output.push(r[ri]);
        ri++;
      }
    }

    return output.concat(r.slice(ri)).concat(l.slice(li));
  };

  const sort = arr => {
    if (arr.length === 1) {
      return arr;
    }

    const left = arr.slice(0, Math.floor(arr.length / 2));
    const right = arr.slice(Math.floor(arr.length / 2), arr.length);
    return merge(sort(left), sort(right));
  };

  return sort(arr);
};

console.log(mergeSort([6, 89, 4, 32, 101, 22, 2, 31]));
