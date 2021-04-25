# 1431. Kids With the Greatest Number of Candies

## 문제

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.  
For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

### Example

1. Input: candies = [2,3,5,1,3], extraCandies = 3  
   Output: [true,true,true,false,true]  
   Explanation:  
   Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.  
   Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.  
   Kid 3 has 5 candies and this is already the greatest number of candies among the kids.  
   Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.  
   Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.

2. Input: candies = [4,2,1,1,2], extraCandies = 1  
   Output: [true,false,false,false,false]  
   Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.

3. Input: candies = [12,1,12], extraCandies = 10  
   Output: [true,false,true]

### 문제 풀이

- 첫 풀이

```js
var kidsWithCandies = function (candies, extraCandies) {
  return candies.map((v) => {
    if (v + extraCandies >= Math.max.apply(null, candies)) return true;
    return false;
  });
};
```

map을 사용하여 모든 배열을 확인하고 가지고있는 캔디수와 extraCandies를 더해 가장 많이 있는 캔디 수 보다 크거나 같으면 true, 적다면 false로 반환

- 가독성이 더 좋게 바꾼 코드

```js
var kidsWithCandies = function (candies, extraCandies) {
  const mostCandies = Math.max(...candies);
  return candies.map((v) => v + extraCandies >= mostCandies);
};
```
