# 1512. Number of Good Pairs

## 문제

Given an array of integers nums.  
A pair <code>(i,j)</code> is called good if <code>nums[i]</code> == <code>nums[j]</code> and <code>i < j</code>.  
_Return the number of good pairs_.

### Example

1. Input: nums = [1,2,3,1,1,3]  
   Output: 4  
   Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

2. Input: nums = [1,1,1,1]  
   Output: 6  
   Explanation: Each pair in the array are good.

3. Input: nums = [1,2,3]  
   Output: 0

### 문제 풀이

```js
var numIdenticalPairs = function (nums) {
  let result = 0;
  nums.forEach((number, index) => {
    index = nums.indexOf(number, index + 1);
    while (index > 0) {
      result++;
      index = nums.indexOf(number, index + 1);
    }
  });
  return result;
};
```
