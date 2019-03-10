/**
 * Recursive solution
 */
const nthFibRecursive = n => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return nthFibRecursive(n - 1) + nthFibRecursive(n - 2);
};

console.log(nthFibRecursive(30));

/**
 * Recursive solution memoized
 */
const nthFibRecursiveDynamic = n => {
  const seen = {};

  const calc = n => {
    // Check the cache (dynamic programming)
    if (seen[n]) {
      return seen[n];
    } else if (n === 1 || n === 2) {
      return 1;
    }

    // Calc and store result in cache
    const result = calc(n - 1) + calc(n - 2);
    seen[n] = result;

    return result;
  };

  return calc(n);
};

console.log(nthFibRecursiveDynamic(30));

/**
 * Iterative solution
 */
const nthFibIterative = n => {
  const sequence = [1, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence.pop();
};

console.log(nthFibIterative(30));

/**
 * Iterative constant space
 */
const nthFibIterativeConstantSpace = n => {
  const vals = [1, 1];

  while (n > 2) {
    const curr = vals[0] + vals[1];
    vals[0] = vals[1];
    vals[1] = curr;
    n--;
  }

  return vals.pop();
};

console.log(nthFibIterativeConstantSpace(30));
