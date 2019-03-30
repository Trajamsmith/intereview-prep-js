/**
 * We are given two strings, A and B.
 *
 * A shift on A consists of taking string A
 * and moving the leftmost character to the
 * rightmost position. For example, if A = 'abcde',
 * then it will be 'bcdea' after one shift
 * on A. Return True if and only if A can
 * become B after some number of shifts on A.
 */
const rotate = s => {
  s += s[0];
  return s.slice(1);
};

const rotateString = (A, B) => {
  if (A.length !== B.length) return false;

  for (let i = 0; i < A.length; i++) {
    console.log(A);
    if (A === B) {
      return true;
    }
    A = rotate(A);
  }

  return false;
};

console.log(rotate("abcde"));
console.log(rotateString("abcde", "cdeab"));
