# 1470. Shuffle the Array

## 문제

Given the array <code>nums</code> consisting of <code>2n</code> elements in the form <code>[x1,x2,...,xn,y1,y2,...,yn].</code>  
Return the array in the form <code>[x1,y1,x2,y2,...,xn,yn].</code>

### Example

1. Input: nums = [2,5,1,3,4,7], n = 3  
   Output: [2,3,5,4,1,7]  
   Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

2. Input: nums = [1,2,3,4,4,3,2,1], n = 4  
   Output: [1,4,2,3,3,2,4,1]

3. Input: nums = [1,1,2,2], n = 2  
   Output: [1,2,1,2]

### 문제 풀이

- 첫 풀이

```js
var shuffle = function (nums, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(nums[i]);
    res.push(nums[i + n]);
  }
  return res;
};
};
```

빈 배열을 만들어 규칙에 맞게 push() 한다.
