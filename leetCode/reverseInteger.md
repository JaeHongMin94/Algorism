# 7. Reverse Integer

## 문제

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

### Example

1. Input: x = 123  
   Output: 321

2. Input: x = -123  
   Output: -321

3. Input: x = 120  
   Output: 21

4. Input: x = 0  
   Output: 0

### 문제 풀이

- 메서드를 활용

```js
var reverse = function (x) {
  const isNegative = x < 0 ? -1 : 1;
  const reverseN = Number(Math.abs(x).toString().split('').reverse().join(''));
  if (reverseN > 0x7fffffff) return 0;
  return (
    Number(Math.abs(x).toString().split('').reverse().join('')) * isNegative
  );
};
```

음수는 문자열로 바꾼 후 reverse()하면 숫자뒤에 -가 붙기 때문에 처음에 음수와 양수 판단  
숫자를 reverse()후에 정수의 범위를 초과하면 0을 return  
정수 범위를 초과하지 않았다면 마지막에 1과 -1을 곱하여 답을 return한다.
