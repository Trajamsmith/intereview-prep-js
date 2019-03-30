var validPalindrome = function(s) {
  let lp = 0,
    rp = s.length - 1,
    errors = 0;

  const revS = s =>
    s
      .split("")
      .reverse()
      .join("");

  // While the pointers are not on the
  // same index
  while (lp < rp) {
    console.log(lp, rp, errors);
    // If more than one character
    // needs to be ommited, then the
    // whole function is false
    if (errors >= 2) {
      return false;
    }

    // If the characters are different
    if (s[lp] !== s[rp]) {
      // Base true case
      if (rp - lp < 2) {
        return true;
      }

      // As soon as we see an error, try splitting
      // the remaining string with either end
      // dropped and see if the sides match
      const mid = Math.floor((rp - lp) / 2),
        sub1 = s.slice(lp + 1, rp + 1),
        sub2 = s.slice(lp, rp);

      if (sub1.slice(0, mid) === revS(sub1.slice(-mid))) {
        return true;
      } else if (sub2.slice(0, mid) === revS(sub2.slice(-mid))) {
        return true;
      } else {
        return false;
      }
    }

    // Advance both pointers if no problems
    lp++;
    rp--;
  }

  return true;
};

console.log(validPalindrome("ebcbbececabbacecbbcbe"));
