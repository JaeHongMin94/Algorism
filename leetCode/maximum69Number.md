# 1323. Maximum 69 Number

## 문제

Given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

### Example

1. Input: num = 9669  
   Output: 9969  
   Explanation:  
   Changing the first digit results in 6669.  
   Changing the second digit results in 9969.  
   Changing the third digit results in 9699.  
   Changing the fourth digit results in 9666.  
   The maximum number is 9969.

2. Input: num = 9999  
   Output: 9999  
   Explanation: It is better not to apply any change.

### 문제 풀이

```js
var maximum69Number = function (num) {
  var str = num.toString();
  var res = str.replace('6', '9');
  return Number(res);
};
```
