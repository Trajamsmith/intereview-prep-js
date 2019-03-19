/**
 * Given an array of integers, return all combinations of
 * three elements where the elements sum to zero
 */

// TODO: fix this solution, on the right track though
const threeSum = nums => {
  const twoSums = {},
    output = [];

  nums.forEach((num1, i) => {
    nums.forEach((num2, j) => {
      if (j > i) {
        twoSums[num1 + num2] = [num1, num2, [i, j]];
      }
    });
  });

  nums.forEach((num, ind) => {
    const coords = twoSums[-num] && twoSums[-num][2];
    if (coords && ind !== coords[0] && ind !== coords[1]) {
      output.push([twoSums[-num][0], twoSums[-num][1], num]);
    }
  });

  return output;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
