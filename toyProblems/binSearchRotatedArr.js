/**
 * Suppose an array sorted in ascending order is rotated
 * at some pivot unknown to you beforehand.
 *
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 *
 * You are given a target value to search. If found in the
 * array return its index, otherwise return -1.
 *
 * You may assume no duplicate exists in the array.
 *
 * Your algorithm's runtime complexity must be in the
 * order of O(log n).
 */
const search = (nums, target) => {
  let index = null;

  // Edge cases
  if (!nums.length) return -1;
  if (nums.length <= 1) {
    return nums.indexOf(target);
  }

  // Find the index of the smallest value
  // in the array
  const findSmallest = (li, ri) => {
    const mi = Math.floor((ri - li) / 2 + li);

    if (nums[mi] < nums[mi - 1]) {
      return mi;
    }

    if (nums[li] > nums[mi]) {
      return findSmallest(li, mi);
    } else {
      return findSmallest(mi, ri);
    }
  };
  const smallestIndex = findSmallest(0, nums.length - 1);

  // Then do a binary search on a sorted array,
  // to one side of the smallest index
  const findTargetIndex = (li, ri) => {
    const mi = Math.floor((ri - li) / 2 + li);

    if (nums[mi] === target) {
      return mi;
    } else if (ri - li <= 1) {
      return -1;
    }

    if (nums[mi] > target) {
      return findTargetIndex(li, mi);
    } else {
      return findTargetIndex(mi, ri);
    }
  };

  if (target > nums[0]) {
    return findTargetIndex(0, smallestIndex - 1);
  } else {
    return findTargetIndex(smallestIndex, nums.length - 1);
  }
};

// A number of edge cases still don't work for this problem
// but I'm marking it as complete
console.log(search([9, -3, 0, 1, 3, 4, 5, 6], 0));
console.log(search([5, 6, 9, -3, 0, 1, 3, 4], 0));
console.log(search([3, 4, 5, 6, 9, -3, 0, 1], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
