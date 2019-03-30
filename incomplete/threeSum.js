import { expect } from "chai";

/**
 * Given an array of integers, return all combinations of
 * three elements where the elements sum to zero--so I tried
 * to do this by doing a O(n^2) operation to keep a hash
 * of all two-sum pairs, then a linear operation back over
 * the array to get the three-sums, but that was super
 * tedious and had a lot of edge cases, so here's this
 * much simpler algorithm
 */
const threeSum = nums => {
  const output = [];
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    let target = -nums[i],
      j = i + 1,
      e = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (j < e) {
      if (nums[j] + nums[e] === target) {
        output.push([nums[i], nums[j], nums[e]]);
        j++;
        while (j < e && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[j] + nums[e] < target) {
        j++;
      } else {
        e--;
      }
    }
  }

  return output;
};

expect(threeSum([-1, 0, 1, 2, -1, -4])).to.deep.equal([
  [-1, -1, 2],
  [-1, 0, 1]
]);
expect(
  threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])
).to.deep.equal([
  [-4, -2, 6],
  [-4, 0, 4],
  [-4, 1, 3],
  [-4, 2, 2],
  [-2, -2, 4],
  [-2, 0, 2]
]);
