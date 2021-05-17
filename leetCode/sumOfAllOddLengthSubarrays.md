# 1588. Sum of All Odd Length Subarrays

## 문제

Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

### Example

1. Input: arr = [1,4,2,5,3]  
   Output: 58  
   Explanation: The odd-length subarrays of arr and their sums are:  
   [1] = 1  
   [4] = 4  
   [2] = 2  
   [5] = 5  
   [3] = 3  
   [1,4,2] = 7  
   [4,2,5] = 11  
   [2,5,3] = 10  
   [1,4,2,5,3] = 15  
   If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

2. Input: arr = [1,2]  
   Output: 3  
   Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

3. Input: arr = [10,11,12]  
   Output: 66

### 문제 풀이

```js
var sumOddLengthSubarrays = function (arr) {
  const len = arr.length;
  let res = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j += 2) {
      res += arr.slice(i, j).reduce((acc, cur) => acc + cur, 0);
    }
  }
  return res;
};
```
