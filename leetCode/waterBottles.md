# 1518. Water Bottles

## 문제

Given <code>numBottles</code> full water bottles, you can exchange <code>numExchange</code> empty water bottles for one full water bottle.  
The operation of drinking a full water bottle turns it into an empty bottle.  
Return the <strong>maximum</strong> number of water bottles you can drink.

### Example

1. Input: numBottles = 9, numExchange = 3  
   Output: 13  
   Explanation: You can exchange 3 empty bottles to get 1 full water bottle.  
   Number of water bottles you can drink: 9 + 3 + 1 = 13.

2. Input: numBottles = 15, numExchange = 4  
   Output: 19  
   Explanation: You can exchange 4 empty bottles to get 1 full water bottle.  
   Number of water bottles you can drink: 15 + 3 + 1 = 19.

3. Input: numBottles = 5, numExchange = 5  
   Output: 6

4. Input: numBottles = 2, numExchange = 3  
   Output: 2

### 문제 풀이

```js
var numWaterBottles = function (numBottles, numExchange) {
  let total = numBottles;
  let remainder = 0;

  while (numBottles >= numExchange) {
    remainder = numBottles % numExchange;
    numBottles = Math.floor(numBottles / numExchange);
    total += numBottles;
    numBottles += remainder;
  }

  return total;
};
```
