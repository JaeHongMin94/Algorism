# 1732. Find the Highest Altitude

## 문제

There is a biker going on a road trip. The road trip consists of <code>n + 1 </code>points at different altitudes. The biker starts his trip on point <code>0</code> with altitude equal <code>0</code>.  
You are given an integer array <code>gain</code> of length <code>n</code> where <code>gain[i]</code> is the <strong>net gain in altitude</strong> between points <code>i</code>​​​​​​ and <code>i + 1</code> for all <code>(0 <= i < n)</code>. Return _the <code>highest altitude</code> of a point_.

### Example

1. Input: gain = [-5,1,5,0,-7]  
   Output: 1  
   Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

2. Input: gain = [-4,-3,-2,-1,4,3,2]  
   Output: 0  
   Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

### 문제 풀이

```js
var largestAltitude = function (gain) {
  let max = 0;
  let base = 0;
  for (let g of gain) {
    base += g;
    max = Math.max(max, base);
  }
  return max;
};
```
