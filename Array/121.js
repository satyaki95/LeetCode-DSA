var maxProfit = function (prices) {
  let minValue = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    minValue = Math.min(minValue, prices[i]);
    profit = Math.max(profit, prices[i] - minValue);
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
