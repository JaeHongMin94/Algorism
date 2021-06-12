# 1748. Sum of Unique Elements

## 문제

You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

### Example

1. Input: nums = [1,2,3,2]  
   Output: 4  
   Explanation: The unique elements are [1,3], and the sum is 4.

2. Input: nums = [1,1,1,1,1]  
   Output: 0  
   Explanation: There are no unique elements, and the sum is 0.

3. Input: nums = [1,2,3,4,5]  
   Output: 15  
   Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

### 문제 풀이

```js
var sumOfUnique = function (nums) {
  let len = nums.length;
  let obj = {};
  let sum = 0;
  for (let i = 0; i < len; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = 0;
    }
    obj[nums[i]]++;
  }
  for (let i in obj) {
    if (obj[i] === 1) {
      sum += parseInt(i);
    }
  }
  return sum;
};
```
