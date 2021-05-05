# 1678. Goal Parser Interpretation

## 문제

You own a <strong>Goal Parser</strong> that can interpret a string <code>command</code>. The <code>command</code> consists of an alphabet of <code>"G"</code>, <code>"()"</code> and/or <code>"(al)"</code> in some order. The Goal Parser will interpret <code>"G"</code> as the string <code>"G"</code>, <code>"()"</code> as the string <code>"o"</code>, and <code>"(al)"</code> as the string <code>"al"</code>. The interpreted strings are then concatenated in the original order.  
Given the string <code>command</code>, return _the <strong>Goal Parser</strong>'s interpretation of_ <code>command</code>.

### Example

1. Input: command = "G()(al)"  
   Output: "Goal"  
   Explanation: The Goal Parser interprets the command as follows:  
   G -> G  
   () -> o  
   (al) -> al  
   The final concatenated result is "Goal".

2. Input: command = "G()()()()(al)"  
   Output: "Gooooal"

3. Input: command = "(al)G(al)()()G"  
   Output: "alGalooG"

### 문제 풀이

```js
const interpret = function (command) {
  return command.split('()').join('o').split('(al)').join('al');
};
```
