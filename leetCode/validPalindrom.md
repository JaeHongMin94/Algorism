# 125. Valid Palindrome

## 문제

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

### Example

1. Input: s = "A man, a plan, a canal: Panama"  
   Output: true  
   Explanation: "amanaplanacanalpanama" is a palindrome.

2. Input: s = "race a car"  
   Output: false  
   Explanation: "raceacar" is not a palindrome.

### 문제 풀이

```js
var isPalindrome = function (s) {
  const arr = s.toUpperCase().split('');
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) > 47 && arr[i].charCodeAt(0) < 58)
      answer.push(arr[i]);
    if (
      (arr[i].charCodeAt(0) > 64 && arr[i].charCodeAt(0) < 91) ||
      (arr[i].charCodeAt(0) > 96 && arr[i].charCodeAt(0) < 123)
    )
      answer.push(arr[i]);
  }
  return answer.join('') === answer.reverse().join('') ? true : false;
};
```

대소문자 구분 없이 영어와 숫자만 고려해서 회문인지를 판단하면 되는 문제이기 때문에 영어를 toUpperCase()로 모두 대문자(toLowerCase()로 소문자로 바꿔도 무방) 아스키코드를 활용해 문제를 품
