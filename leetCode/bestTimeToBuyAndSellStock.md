# 121. Best Time to Buy and Sell Stock

## 문제

You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.  
You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.  
_Return the maximum profit you can achieve from this transaction._ If you cannot achieve any profit, return 0.

### Example

1. Input: prices = [7,1,5,3,6,4]  
   Output: 5  
   Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.  
   Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

2. Input: prices = [7,6,4,3,1]  
   Output: 0  
   Explanation: In this case, no transactions are done and the max profit = 0.

### 문제 풀이

```js
var maxProfit = function (prices) {
  let maxProf = 0,
    curr = prices[0];

  for (let price of prices) {
    if (curr < price) maxProf = Math.max(maxProf, price - curr);
    else curr = price;
  }
  return maxProf;
};
```
