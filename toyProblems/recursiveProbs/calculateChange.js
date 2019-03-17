const coins = [25, 10, 5, 1];

/**
 * Simple solution without memoization
 */
const calculateChange = (target, denoms = coins, current = 0) => {
  if (current === target) {
    return 1;
  } else if (current > target || !denoms.length) {
    return 0;
  }

  return (
    calculateChange(target, denoms, current + denoms[0]) +
    calculateChange(target, denoms.slice(1), current)
  );
};

console.log(calculateChange(10));

/**
 * Solution with memoization
 */
const calculateChangeMemo = target => {
  const seen = {};

  const calc = (denoms = coins, current = 0) => {
    if (seen[`${denoms}`]) {
      return seen[`${denoms}`];
    } else if (current === target) {
      return 1;
    } else if (current > target || !denoms.length) {
      return 0;
    }

    const result =
      calc(denoms, current + denoms[0]) + calc(denoms.slice(1), current);
    seen[`${denoms}`] = result;

    return result;
  };

  return calc();
};

console.log(calculateChangeMemo(10));
