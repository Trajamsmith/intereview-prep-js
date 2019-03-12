/**
 * Self explanatory
 */

const reverseInPlace = s => {
  const sArr = s.split(""),
    midIndex = Math.floor(s.length / 2),
    maxIndex = sArr.length - 1;

  for (let i = 0; i < midIndex; i++) {
    let oppI = maxIndex - i;
    [sArr[i], sArr[oppI]] = [sArr[oppI], sArr[i]];
  }

  return sArr.join("");
};

console.log(reverseInPlace("boyfriends"));
