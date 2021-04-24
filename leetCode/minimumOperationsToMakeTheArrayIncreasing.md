# 1827. Minimum Operations to Make the Array Increasing

## 문제

You are given an integer array nums1.  
For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].  
nums  
An array numsnums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

### Example

1. Input: nums = [1,1,1]  
   Output: 3  
   Explanation: You can do the following operations:

   1. Increment nums[2], so nums becomes [1,1,2].
   2. Increment nums[1], so nums becomes [1,2,2].
   3. Increment nums[2], so nums becomes [1,2,3].

2. Input: nums = [1,5,2,4,1]  
   Output: 14

3. Input: nums = [8]  
   Output: 0

### 문제 풀이

- 나의 풀이(Runtime: 770ms)

```js
var minOperations = function (nums) {
  if (nums.length <= 0) return 0;
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) continue;
    for (let j = nums[i + 1]; j <= nums[i]; j++) {
      nums[i + 1]++;
      count++;
    }
  }

  return count;
};
```

argument(nums) 길이가 1 이하일 때 0 반환.  
전자의 숫자가 더 클경우 패스  
두 값을 비교 했을 때 숫자가 증가해야 할 경우 그 수만큼 증가(count)

- 문제점  
  이중 포문으로 인하여 Runtime이 너무 길다.

### solution 후에 다시 작성한 코드(Runtime: 76ms)

```js
var minOperations = function (nums) {
  if (nums.length <= 1) return 0;

  let ops = 0;
  let max = nums[0];

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] > max) {
      max = nums[j];
    } else {
      ops += max - nums[j] + 1;
      max += 1;
    }
  }

  return ops;
};
```

이중 포문의 코드를 ops += max - nums[j] + 1; 한줄로 줄여서 Runtime 감소
