/**
 * Given an array of integers, return indices of the two
 * numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one
 * solution, and you may not use the same element twice.
 */
const twoSum = (nums, target) => {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const currTarg = target - nums[i];
    if (nums[i] in seen) {
      return [seen[nums[i]], i];
    } else {
      seen[currTarg] = i;
    }
  }

  return "No elements add up to that the target sum.";
};

console.log(twoSum([2, 7, 11, 15], 9));
