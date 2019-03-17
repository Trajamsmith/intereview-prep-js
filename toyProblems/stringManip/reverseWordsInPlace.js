/**
 * Self-explanatory
 */
const message = [
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l"
];

const reverseWords = chars => {
  // Indices of word subarrays
  let i = 0,
    j = 0;

  // Go through the array and reverse
  // individual words in place
  while (i < chars.length) {
    // If we've reached a space or the end of
    // the word, reverse the subarray
    if (chars[j] === " " || j === chars.length) {
      let revI = j - 1,
        avg = (j - i) / 2;
      // Reverse the word
      while (i < j - avg) {
        [chars[i], chars[revI]] = [chars[revI], chars[i]];
        i++;
        revI--;
      }
      // Update our two pointers
      j++;
      i = j;
    } else {
      j++;
    }
  }

  // Reverse the whole array
  for (let q = 0; q < chars.length / 2; q++) {
    let p = chars.length - 1 - q;
    [chars[q], chars[p]] = [chars[p], chars[q]];
  }
};

reverseWords(message);

console.log(message.join(""));
// Prints: 'steal pound cake'
