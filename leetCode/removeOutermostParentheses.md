# 1021. Remove Outermost Parentheses

## 문제

A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation. For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A+B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

### Example

1. Input: s = "(()())(())"  
   Output: "()()()"  
   Explanation:  
   The input string is "(()())(())", with primitive decomposition "(()())" + "(())".  
   After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

2. Input: s = "(()())(())(()(()))"  
   Output: "()()()()(())"  
   Explanation:  
   The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".  
   After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

3. Input: s = "()()"  
   Output: ""  
   Explanation:  
   The input string is "()()", with primitive decomposition "()" + "()".  
   After removing outer parentheses of each part, this is "" + "" = "".

### 문제 풀이

```js
var removeOuterParentheses = function (S) {
  let result = '';
  let count = 0;

  for (char of S) {
    if (char === '(' && count > 0) {
      result += char;
    }
    if (char == '(') {
      count++;
    }
    if (char === ')' && count > 1) {
      result += char;
    }
    if (char === ')') {
      count--;
    }
  }

  return result;
};
```
