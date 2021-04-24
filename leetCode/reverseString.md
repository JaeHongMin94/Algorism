# 344. Reverse String

## 문제

Write a function that reverses a string. The input string is given as an array of characters s.

### Example

1. Input s = ["h","e","l","l","o"]  
   Output ["o","l","l","e","h"]

2. Input: s = ["H","a","n","n","a","h"]  
   Output: ["h","a","n","n","a","H"]

### 문제 풀이

- 메서드를 활용

```js
var reverseString = function (s) {
  return s.reverse();
};
```

- 메서드를 활용X

```js
var reverseString = function (s) {
  let len = s.length - 1;
  for (let i = 0; i < len; i++) {
    const temp = s[i];
    s[i] = s[len];
    s[len] = temp;

    len--;
  }
};
```
