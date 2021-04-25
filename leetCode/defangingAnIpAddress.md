# 1480. Running Sum of 1d Array

## 문제

Given a valid (IPv4) IP address, return a defanged version of that IP address.  
A defanged IP address replaces every period "." with "[.]".

### Example

1. Input: address = "1.1.1.1"  
   Output: "1[.]1[.]1[.]1"

2. Input: address = "255.100.50.0"  
   Output: "255[.]100[.]50[.]0"

### 문제 풀이

- 첫 풀이

```js
var defangIPaddr = function (address) {
  address = address.split('');
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      address.splice(i, 1, '[.]');
    }
  }
  return address.join('');
};
```

배열로 만든 후 . 위치에 [.]으로 교체를 해준다.

- 메서드를 활용한 풀이

```js
var defangIPaddr = function (address) {
  return address.split('.').join('[.]');
};
```

for문을 생략하여 짧은 코드 작성
