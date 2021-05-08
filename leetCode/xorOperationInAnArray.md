# 1486. XOR Operation in an Array

## 문제

Given an integer <code>n</code> and an integer <code>start</code>.  
Define an array <code>nums</code> where <code>nums[i] = start + 2\*i</code> (0-indexed) and<code> n == nums.length</code>.  
Return the bitwise XOR of all elements of <code>nums</code>.

### Example

1. Input: n = 5, start = 0  
   Output: 8  
   Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.  
   Where "^" corresponds to bitwise XOR operator.

2. Input: n = 4, start = 3  
   Output: 8  
   Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.

3. Input: n = 1, start = 7  
   Output: 7

4. Input: n = 10, start = 5  
   Output: 2

### 문제 풀이

```js
var xorOperation = function (n, start) {
  let xor_arr;

  for (let i = 0; i < n; i++) {
    xor_arr = xor_arr ^ (start + 2 * i);
  }

  return xor_arr;
};
```
