# 1221. Split a String in Balanced Strings

## 문제

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
Given a balanced string s, split it in the maximum amount of balanced strings.  
Return the maximum amount of split balanced strings.

### Example

1. Input: s = "RLRRLLRLRL"  
   Output: 4  
   Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

2. Input: s = "RLLLLRRRLR"  
   Output: 3  
   Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

3. Input: s = "LLLLRRRR"  
   Output: 1  
   Explanation: s can be split into "LLLLRRRR".

4. Input: s = "RLRRRLLRLL"  
   Output: 2  
   Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

### 문제 풀이

```js
var balancedStringSplit = function (s) {
  let valR = 0;
  let valL = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      valR++;
    } else {
      valL++;
    }

    if (valR === valL) {
      count++;
      valR = 0;
      valL = 0;
    }
  }

  return count;
};
```

R과 L의 숫자를 세고 값이 같아질 때 count 증가

### 다른사람의 풀이를 보고 새로 작성한 코드

```js
var balancedStringSplit = function (s) {
  let count = 0;
  let balanced = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === 'R' ? count++ : count--;

    if (count === 0) balanced++;
  }

  return balanced;
};
```

코드도 짧고 가독성이 더 좋아보임
