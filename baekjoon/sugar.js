const maxProfit = (prices) => {
  let result = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      result += prices[i + 1] - prices[i];
    }
  }

  return result;
};

console.log(maxProfit([1, 2, 3, 4, 5]));
