# 1528. Shuffle String

## 문제

Given a string <code>s</code> and an integer array <code>indices</code> of the <strong>same length</strong>.  
The string <code>s</code> will be shuffled such that the character at the <code>i<sup>th</sup></code> position moves to <code>indices[i]</code> in the shuffled string.  
_Return the shuffled string_.

### Example

1. Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]  
   Output: "leetcode"  
   Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

2. Input: s = "abc", indices = [0,1,2]  
   Output: "abc"  
   Explanation: After shuffling, each character remains in its position.

3. Input: s = "aiohn", indices = [3,1,4,2,0]  
   Output: "nihao"

4. Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]  
   Output: "arigatou"

5. Input: s = "art", indices = [1,0,2]  
   Output: "rat"

### 문제 풀이

```js
var restoreString = function (s, indices) {
  let result = [];
  indices.forEach((num, i) => {
    result[num] = s[i];
  });
  return result.join('');
};
```
