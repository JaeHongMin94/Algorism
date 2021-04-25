# 1480. Running Sum of 1d Array

## 문제

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).  
Return the running sum of nums.

### Example

1. Input: nums = [1,2,3,4]  
   Output: [1,3,6,10]  
   Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

2. Input: nums = [1,1,1,1,1]  
   Output: [1,2,3,4,5]  
   Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]

3. Input: nums = [3,1,2,10,1]  
   Output: [3,4,6,16,17]

### 문제 풀이

- 첫 풀이

```js
var runningSum = function (nums) {
  let temp = [],
    counter = nums[0];
  temp.push(counter);
  for (let i = 1; i < nums.length; i++) {
    counter += nums[i];
    temp.push(counter);
  }
  return temp;
};
```

다음 배열 숫자를 더해 새 배열에 push() 해준다.

- 다른사람의 풀이를 보고 줄인 코드

```js
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};
```

원본 배열에 바로 삽입한다.
