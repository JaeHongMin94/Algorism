# 1773. Count Items Matching a Rule

## 문제

You are given an array <code>items</code>, where each <code>items[i] = [type<sub>i</sub>, color<sub>i</sub>, name<sub>i</sub>]</code> describes the type, color, and name of the <code>i<sup>th</sup></code> item. You are also given a rule represented by two strings, <code>ruleKey</code> and <code>ruleValue</code>.

The <code>i<sup>th</sup></code>

- <code>ruleKey == "type"</code> and <code>ruleValue == type<sub>i</sub></code>.
- <code>ruleKey == "color"</code> and <code>ruleValue == color<sub>i</sub></code>.
- <code>ruleKey == "name"</code> and <code>ruleValue == name<sub>i</sub></code>.

_Return the number of items that match the given rule_.

### Example

1. Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]  
   Output: [0,4,1,3,2]  
   Explanation:  
   nums index target  
   0 0 [0]  
   1 1 [0,1]  
   2 2 [0,1,2]  
   3 2 [0,1,3,2]  
   4 1 [0,4,1,3,2]

2. Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]  
   Output: [0,1,2,3,4]  
   Explanation:  
   nums index target  
   1 0 [1]  
   2 1 [1,2]  
   3 2 [1,2,3]  
   4 3 [1,2,3,4]  
   0 0 [0,1,2,3,4]

### 문제 풀이

```js
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  const type = 0,
    color = 1,
    name = 2;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === 'type') {
      if (items[i][type] === ruleValue) {
        count++;
      }
    } else if (ruleKey === 'color') {
      if (items[i][color] === ruleValue) {
        count++;
      }
    } else {
      if (items[i][name] === ruleValue) {
        count++;
      }
    }
  }
  return count;
};
```

배열의 ruleKey를 확인 후 ruleValue와 같다면 count 증가
