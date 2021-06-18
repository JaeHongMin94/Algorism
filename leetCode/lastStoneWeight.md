# 1046. Last Stone Weight

## 문제

We have a collection of stones, each stone has a positive integer weight.

x and y with x <= y. The result of this smash is:

- If x == y, both stones are totally destroyed;
- If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.

At the end, there is at most 1 stone left. Return the weight of this stone (or 0 if there are no stones left.)

### Example

1. Input: [2,7,4,1,8,1]  
   Output: 1  
   Explanation:  
   We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,  
   we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,  
   we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,  
   we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

### 문제 풀이

```js
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    const firstMax = Math.max(...stones);
    stones.splice(stones.indexOf(firstMax), 1);
    const secondeMax = Math.max(...stones);
    stones.splice(stones.indexOf(secondeMax), 1);
    Math.abs(firstMax - secondeMax) >= 1
      ? stones.push(Math.abs(firstMax - secondeMax))
      : stones;
    console.log(stones);
  }
  console.log(stones);
  return stones.length >= 1 ? stones[0] : 0;
};
```

runtime 하위권

```js
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);
  while (stones.length > 1) {
    if (stones[0] === stones[1]) {
      stones.splice(0, 2);
    } else {
      let abs = Math.abs(stones[0] - stones[1]);
      stones.push(abs);
      stones.splice(0, 2);
      stones.sort((a, b) => b - a);
    }
  }

  return stones;
};
```

runtime 상위권
