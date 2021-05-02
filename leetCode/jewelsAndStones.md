# 771. Jewels and Stones

## 문제

You're given strings <code>jewels</code> representing the types of <code>stones</code> that are jewels, and stones representing the stones you have. Each character in <code>stones</code> is a type of stone you have. You want to know how many of the stones you have are also jewels.  
Letters are case sensitive, so <code>"a"</code> is considered a different type of stone from <code>"A"</code>.

### Example

1. Input: jewels = "aA", stones = "aAAbbbb"  
   Output: 3

2. Input: jewels = "z", stones = "ZZ"  
   Output: 0

### 문제 풀이

````js
var numJewelsInStones = function(jewels, stones) {
  let count = 0
  let ht = {}

  for (let i = 0; i < stones.length; i++) {
      ht[stones[i]] ? ht[stones[i]]++ : ht[stones[i]] = 1
  }

  for (let j = 0; j < jewels.length; j++) {
        if (ht[jewels[j]]) {
            count+= ht[jewels[j]]
      }
  }

  return count
};```
````
