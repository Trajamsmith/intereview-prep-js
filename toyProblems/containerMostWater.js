import { expect } from "chai";

/**
 * This one's hard to explain, look at the diagram
 * for the Leetcode problem:
 * https://leetcode.com/problems/container-with-most-water/
 */
const maxArea = height => {
  let lmax = 0,
    rmax = 0;

  // For each value, we're going to see what the
  // furthest value coming from the other side is
  // that is _greater_ than the current value

  // From the left
  outer: for (let i = 0; i < height.length; i++) {
    for (let j = height.length - 1; j >= 0; j--) {
      if (height[j] >= height[i]) {
        const vol = height[i] * (j - i);
        lmax = Math.max(lmax, vol);
        continue outer;
      }
    }
  }

  // From the right
  outer: for (let i = height.length - 1; i >= 0; i--) {
    for (let j = 0; j < height.length; j++) {
      if (height[j] >= height[i]) {
        const vol = height[i] * (i - j);
        rmax = Math.max(rmax, vol);
        continue outer;
      }
    }
  }

  return Math.max(lmax, rmax);
};

expect(maxArea([5, 8])).to.equal(5);
expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).to.equal(49);
expect(maxArea([2, 3, 4, 5, 18, 17, 6])).to.equal(17);

/**
 * Alright, there's of course a better solution than
 * O(n^2), we can do it in O(n) if we use _two pointers_
 */
const better = heights => {
  let pl = 0,
    pr = heights.length - 1,
    max = 0;

  // We can work progressively inward, advancing
  // the pointer of the smaller value; when dealing
  // with problems like these think inward-out or
  // outward-in rather than nested loops
  while (pl !== pr) {
    const area = (pr - pl) * Math.min(heights[pl], heights[pr]);
    max = Math.max(max, area);

    if (heights[pl] <= heights[pr]) {
      pl++;
    } else {
      pr--;
    }
  }

  return max;
};

expect(better([5, 8])).to.equal(5);
expect(better([1, 8, 6, 2, 5, 4, 8, 3, 7])).to.equal(49);
expect(better([2, 3, 4, 5, 18, 17, 6])).to.equal(17);
