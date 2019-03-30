import { expect } from "chai";

/**
 * Given an array, return an array where each
 * value has been mapped to the product of all
 * values _except_ the one in that cell
 */
const productExceptSelf = nums => {
  let left = [],
    lProd = 1,
    right = [],
    rProd = 1;

  // Calculate greedy left hand side
  for (let i = 0; i < nums.length; i++) {
    lProd *= nums[i];
    left.push(lProd);
  }

  // Calculate greedy right hand side
  for (let i = nums.length - 1; i >= 0; i--) {
    rProd *= nums[i];
    right.unshift(rProd);
  }

  nums = nums.map((num, i) => {
    let l, r;

    // Can't think of any better way to do
    // this NaN check (while accepting 0)
    if (left[i - 1] || left[i - 1] === 0) {
      l = left[i - 1];
    } else {
      l = 1;
    }

    if (right[i + 1] || right[i + 1] === 0) {
      r = right[i + 1];
    } else {
      r = 1;
    }

    return l * r;
  });

  return nums;
};

expect(productExceptSelf([1])).to.deep.equal([1]);
expect(productExceptSelf([0, 5, 6])).to.deep.equal([30, 0, 0]);
expect(productExceptSelf([1, 2, 3, 4])).to.deep.equal([24, 12, 8, 6]);

/**
 * The above is a little clumsy, we can do the
 * same thing in principle without storing arrays
 * for the progressive left and right products
 */

const better = nums => {
  const output = [];
  let lProd = 1,
    rProd = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] = lProd;
    lProd *= nums[i];
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] *= rProd;
    rProd *= nums[j];
  }

  return output;
};

expect(better([1])).to.deep.equal([1]);
expect(better([0, 5, 6])).to.deep.equal([30, 0, 0]);
expect(better([1, 2, 3, 4])).to.deep.equal([24, 12, 8, 6]);
