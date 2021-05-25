# 1281. Subtract the Product and Sum of Digits of an Integer

## 문제

Given an integer number n, return the difference between the product of its digits and the sum of its digits.

### Example

1. Input: n = 234  
   Output: 15  
   Explanation:  
   Product of digits = 2 _ 3 _ 4 = 24  
   Sum of digits = 2 + 3 + 4 = 9  
   Result = 24 - 9 = 15

2. Input: n = 4421  
   Output: 21  
   Explanation:  
   Product of digits = 4 _ 4 _ 2 \* 1 = 32  
   Sum of digits = 4 + 4 + 2 + 1 = 11  
   Result = 32 - 11 = 21

### 문제 풀이

```js
var subtractProductAndSum = function (n) {
  const num = n.toString();
  let mul = 1;
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    mul *= Number(num.charAt(i));
    sum += Number(num.charAt(i));
  }
  return mul - sum;
};
```

```js
var subtractProductAndSum = function (n) {
  const num = n.toString().split('').map(Number);
  const mul = num.reduce((arr, cur) => arr * cur);
  const sum = num.reduce((arr, cur) => arr + cur);
  return mul - sum;
};
```
