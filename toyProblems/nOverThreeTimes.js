/**
 * Given an integer array of size n, find all
 * elements that appear more than (n / 3) times.
 */
const majorityElement = nums => {
  const threshold = nums.length / 3,
    count = {},
    output = new Set();

  for (let num of nums) {
    console.log(num);
    if (num in count) {
      count[num]++;
    } else {
      count[num] = 1;
    }

    if (count[num] > threshold) {
      output.add(num);
    }
  }

  return Array.from(output);
};

console.log(majorityElement([1]));
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]));
