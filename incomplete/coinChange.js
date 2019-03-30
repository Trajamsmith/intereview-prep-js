import { expect } from "chai";

/**
 * Find the fewest number of coins from the given
 * denominations that can be used to make change
 * for the given amount
 */
const coinChange = (coins, amount) => {
  // Doing it recursively, without memoization
  const traverse = (avail, curr, used) => {
    if (curr === amount) {
      return used;
    } else if (curr > amount || !avail.length) {
      return Infinity;
    }

    return Math.min(
      traverse(avail, curr + avail[0], used + 1),
      traverse(avail.slice(1), curr, used)
    );
  };

  return traverse(coins, 0, 0);
};

expect(coinChange([1, 2, 5], 11)).to.equal(3);
expect(coinChange([1, 2, 5, 10, 25], 107)).to.equal(6);

/**
 * Now let's try it recursively _with_ memoization;
 * this works, but it's still not very fast at all
 */
const ccMemo = (coins, amount) => {
  const seen = {};

  const traverse = (avail, curr, used) => {
    // Memoizing
    const memKey = `${avail}${curr}${used}`;
    if (seen[memKey]) {
      return seen[memKey];
    }

    if (curr === amount) {
      return used;
    } else if (curr > amount || !avail.length) {
      return Infinity;
    }

    const min = Math.min(
      traverse(avail, curr + avail[0], used + 1),
      traverse(avail.slice(1), curr, used)
    );
    seen[memKey] = min;

    return min;
  };

  const res = traverse(coins, 0, 0);
  return res === Infinity ? -1 : res;
};

expect(ccMemo([1, 2, 5], 11)).to.equal(3);
expect(ccMemo([2], 3)).to.equal(-1);
expect(ccMemo([1, 2, 5, 10, 25], 107)).to.equal(6);

/**
 * Much better, using dynamic programming in a way that
 * will more reliably hit the cache (not stringing
 * togher some monstrous memkey)
 */
const ccMemoBetter = (coins, amount) => {
  const traverse = (coins, rem, count) => {
    if (rem < 0) return -1;
    if (rem === 0) return 0;
    if (count[rem - 1]) return count[rem - 1];

    let min = Infinity;
    coins.forEach(coin => {
      const res = traverse(coins, rem - coin, count);
      if (res >= 0 && res < min) {
        min = 1 + res;
      }
    });
    // NOTE THAT WE STORE THE MEMOIZED VALUE
    // AFTER WE'VE CALCULATED THE RECURSIVE CASE,
    // SO ON THE WAY BACK UP THE TREE
    count[rem - 1] = min === Infinity ? -1 : min;
    return count[rem - 1];
  };

  return traverse(coins, amount, [amount]);
};

// expect(ccMemoBetter([2], 3)).to.equal(-1);
expect(ccMemoBetter([1, 2, 5], 11)).to.equal(3);
expect(ccMemoBetter([1, 2, 5, 10, 25], 107)).to.equal(6);
