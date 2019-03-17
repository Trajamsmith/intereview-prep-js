const oneEdit = (str1, str2) => {
  const len1 = str1.length;
  const len2 = str2.length;

  if (Math.abs(len1 - len2) > 1) return false;

  let diffCount = 0;
  let i1 = 0;
  let i2 = 0;
  while (i1 < len1 && i2 < len2) {
    if (str1[i1] !== str2[i2]) {
      if (diffCount === 1) return false;

      if (len1 < len2) {
        i2++;
      } else if (len2 < len1) {
        i1++;
      } else {
        i1++;
        i2++;
      }

      diffCount++;
    } else {
      i1++;
      i2++;
    }
  }
  return true;
};

console.log(oneEdit("bee", "bete"));
