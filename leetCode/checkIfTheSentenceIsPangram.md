# 1832. Check if the Sentence Is Pangram

## 문제

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

### Example

1. Input: sentence = "thequickbrownfoxjumpsoverthelazydog"  
Output: true  
Explanation: sentence contains at least one of every letter of the English alphabet.

2. Input: sentence = "leetcode"  
Output: false

### 문제 풀이

```js
var checkIfPangram = function(sentence) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  sentence.split("").forEach(s => {
    let idx = alphabet.findIndex(a => a === s)
    if(idx > -1) alphabet.splice(idx,1)
  })
  return alphabet.length === 0
};
```

