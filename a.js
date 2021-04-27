var maxProfit = function (prices) {
  let maxProf = 0,
    curr = prices[0];

  for (let price of prices) {
    if (curr < price) maxProf = Math.max(maxProf, price - curr);
    else curr = price;
  }
  return maxProf;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
