/**
 * Given an array of stock prices across time,
 * find the biggest positive spread (buy low and
 * sell high)
 */

const stockPrices = [10, 7, 5, 8, 11, 9];

const getMaxProfit = prices => {
  let maxProf = 0,
    low = prices[0];

  for (let price of prices) {
    // If the price is the lowest,
    // seen, store it and skip
    // calculating profit at
    // this price
    if (price < low) {
      low = price;
      continue;
    }

    // Compare the profit from
    // the current price to the
    // highest we've seen
    let prof = price - low;
    if (prof > maxProf) {
      maxProf = prof;
    }
  }

  return maxProf;
};

console.log(getMaxProfit(stockPrices));
