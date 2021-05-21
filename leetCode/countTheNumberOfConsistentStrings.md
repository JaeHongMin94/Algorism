# 1684. Count the Number of Consistent Strings

## 문제

You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

### Example

1. Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]  
   Output: 2  
   Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

2. Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]  
   Output: 7  
   Explanation: All strings are consistent.

3. Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]  
   Output: 4
   Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

### 문제 풀이

```js
var countConsistentStrings = function (allowed, words) {
  const allowedArr = allowed.split('');
  return words.filter((word) => {
    return word.split('').filter((w) => !allowedArr.includes(w)).length === 0;
  }).length;
};
```
