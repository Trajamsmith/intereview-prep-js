/**
 * A strobogrammatic number is a number that looks the same
 * when rotated 180 degrees (looked at upside down).
 *
 * Write a function to determine if a number is strobogrammatic.
 * The number is represented as a string.
 */
const isStrobogrammatic = num => {
  // Digits and their inversions
  const inv = {
    "0": "0",
    "6": "9",
    "9": "6",
    "8": "8",
    "1": "1"
  };
  const mid = Math.ceil(num.length / 2);

  // Loop through half the string and see if all digits
  // map to the inverted digit on the other side
  for (let i = 0; i <= mid; i++) {
    let digit = num[i];
    if (inv[digit] !== num[num.length - i - 1]) {
      return false;
    }
  }

  return true;
};

console.log(isStrobogrammatic("69"));
console.log(isStrobogrammatic("69"));
console.log(isStrobogrammatic("88"));
console.log(isStrobogrammatic("101"));
console.log(isStrobogrammatic("962"));
