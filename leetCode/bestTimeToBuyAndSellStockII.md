# 122. Best Time to Buy and Sell Stock II

## 문제

You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.  
Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).  
<strong>Note:</strong> You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

### Example

1. Input: prices = [7,1,5,3,6,4]  
   Output: 7  
   Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.  
   Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

2. Input: prices = [1,2,3,4,5]  
   Output: 4  
   Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.  
   Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

3. Input: prices = [7,6,4,3,1]  
   Output: 0  
   Explanation: In this case, no transaction is done, i.e., max profit = 0.

### 문제 풀이

```js
var maxProfit = function (prices) {
  let maxCost = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) maxCost += prices[i + 1] - prices[i];
  }

  return maxCost;
};
```

배열의 다음 요소가 더 클 경우 값을 더해준다.
