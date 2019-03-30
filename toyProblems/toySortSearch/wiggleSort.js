/**
 * Given an unsorted array nums, reorder it in-place such
 * that nums[0] <= nums[1] >= nums[2] <= nums[3]....
 * THIS WAS A FUN FUNDAMENTALS PRACTICE BUT WOAH NELLY IS
 * THIS IS A DUMB CONVOLUTED WAY TO APPROACH THIS PROBLEM;
 * LOOK AT WIGGLESORT2
 */
const avgArr = arr => {
  const sum = arr.reduce((acc, val) => acc + val);
  return sum / arr.length;
};

const findClosestInd = (arr, targ) => {
  let dist = Infinity,
    ci = null;

  arr.forEach((val, i) => {
    if (Math.abs(targ - val) < dist) {
      dist = Math.abs(targ - val);
      ci = i;
    }
  });

  return ci;
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const pivSort = (arr, pi) => {
  let i = 0,
    j = 0,
    pVal = arr[pi];
  // Move pivot to end (maybe there's a way to do
  // the sort in-place without this step, I don't know)
  swap(arr, pi, arr.length - 1);

  // Standard in-place pivot sort
  while (i < arr.length - 2) {
    if (arr[i] < pVal) {
      swap(arr, i, j);
      j++;
    }
    i++;
  }

  swap(arr, arr.length - 1, j);
  return arr;
};

// THIS DOESN'T QUITE WORK FOR ARRAYS
// WITH AN ODD NUMBER OF ELEMENTS, REALLY FRUSTRATING
const zipArr = arr => {
  const mid = Math.floor(arr.length / 2);

  for (let i = 0; i < mid; i++) {
    console.log(i, i % 2);
    if (i % 2) {
      swap(arr, i, arr.length - i - 1);
    }
  }

  return arr;
};

const wiggleSort = nums => {
  if (!nums.length) return [];
  const avg = avgArr(nums);
  const closestInd = findClosestInd(nums, avg);
  closestInd;
  const halfSorted = pivSort(nums, closestInd);
  halfSorted;
  return zipArr(halfSorted);
};

// console.log(avgArr([3, 5, 2, 1, 6, 4]));
// console.log(findClosestInd([3, 5, 2, 1, 6, 4], 3));
// console.log(pivSort([3, 5, 2, 1, 6, 4], 0));
// console.log(zipArr([2, 1, 3, 5, 6, 4]));
// console.log(zipArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(wiggleSort([3, 5, 2, 1, 6, 4]));
// console.log(wiggleSort([]));
// console.log(wiggleSort([1]));
// console.log(wiggleSort([1, 3]));
console.log(wiggleSort([2, 1, 4]));
// console.log(wiggleSort([1, 3, 4]));
