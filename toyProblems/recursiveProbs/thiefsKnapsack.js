const weights = [5, 10, 15, 3, 12];
const values = [60, 100, 140, 50, 120];

/**
 * Bottom-up approach, where we create a table
 * of values; efficient, has time complexity
 * of O(N*M) where N is the maxWeight and M
 * is the number of different items
 */
const maxValue = (weights, values, maxWeight) => {
  // Add function for null safety
  const safeCheck = val => {
    return val ? val : 0;
  };

  // Create the two-dimensional table
  let table = Array(maxWeight + 1).fill(0);
  table = table.map(cell => Array(weights.length).fill(0));

  // Calculate values for the table
  weights.forEach((weight, w) => {
    table.forEach((asdf, maxWeight) => {
      if (weight <= maxWeight) {
        table[maxWeight][w] = Math.max(
          safeCheck(table[maxWeight][w - 1]),
          values[w] + safeCheck(table[maxWeight - weight][w - 1])
        );
      } else {
        table[maxWeight][w] = safeCheck(table[maxWeight][w - 1]);
      }
    });
  });

  return table;
};

console.log(maxValue(weights, values, 20));
