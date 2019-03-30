/**
 * Given a string, find the first non-repeating character
 * in it and return it's index. If it doesn't exist, return -1.
 */
const firstUniqChar = s => {
  const uniq = new Set(),
    notUniq = new Set(),
    firstInd = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!notUniq.has(char)) {
      if (uniq.has(char)) {
        uniq.delete(char);
        notUniq.add(char);
      } else {
        uniq.add(char);
      }
    }

    if (!(char in firstInd)) {
      firstInd[char] = i;
    }
  }
  const uniques = Array.from(uniq);
  const firstUniq = uniques.length ? uniques[0] : "";
  return firstUniq in firstInd ? firstInd[firstUniq] : -1;
};

console.log(firstUniqChar("leet"));
