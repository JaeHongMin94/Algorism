# 1431. Kids With the Greatest Number of Candies

## 문제

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i<sup>th</sup> customer has in the j<sup>th</sup>  
A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

### Example

1. Input: accounts = [[1,2,3],[3,2,1]]  
   Output: 6  
   Explanation:  
   1st customer has wealth = 1 + 2 + 3 = 6  
   2nd customer has wealth = 3 + 2 + 1 = 6  
   Both customers are considered the richest with a wealth of 6 each, so return 6.

2. Input: accounts = [[1,5],[7,3],[3,5]]  
   Output: 10  
   Explanation:  
   1st customer has wealth = 6  
   2nd customer has wealth = 10  
   3rd customer has wealth = 8  
   The 2nd customer is the richest with a wealth of 10.

3. Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]  
   Output: 17

### 문제 풀이

- 첫 풀이

```js
var maximumWealth = function (accounts) {
  const arr = [];
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    arr.push(sum);
  }
  return Math.max(...arr);
};
```

이중 포문을 사용해 2차원 배열을 각각 더해서 Math.max() 함수로 값 반환

- 메서드를 활용해 코드를 줄인 방법

```js
var maximumWealth = function (accounts) {
  const wealth = accounts.map((customerAccounts) =>
    customerAccounts.reduce((a, b) => a + b, 0)
  );
  return Math.max(...wealth);
};
```

이중포문을 map과 reduce를 활용해 코드는 줄인다.
