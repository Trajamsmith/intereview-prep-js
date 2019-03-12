/**
 * Check to see if there is a permutation of the string
 * that would be a palindrome
 */
const permPal = s => {
  const seen = {};
  // [odds, evens]
  const parity = [0, 0];

  for (let char of s) {
    // Add the character to
    // the seen list if it's new
    if (!seen[char]) {
      seen[char] = 1;
      parity[0]++;
    } else {
      // Otherwise update the parity with the number of characters
      // that have been seen an odd number of times versus the
      // number of characters that have been seen an even number
      // of times
      seen[char] += 1;
      if (seen[char] % 2) {
        parity[0]++;
        parity[1]--;
      } else {
        parity[0]--;
        parity[1]++;
      }
    }
  }

  // If the number of characters that appear an odd number
  // of times is either 0 or 1, then the string could be
  // rearranged to be a palindrome
  return parity[0] === 0 || parity[0] === 1;
};

/**
 * Simpler
 */
const simplerPermPal = s => {
  const unpairedCharacters = {};

  for (let char of s) {
    if (unpairedCharacters[char]) {
      delete unpairedCharacters[char];
    } else {
      unpairedCharacters[char] = 1;
    }
  }

  return Object.keys(unpairedCharacters).length <= 1;
};

console.log(simplerPermPal("civic"));
