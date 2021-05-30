# 1351. Count Negative Numbers in a Sorted Matrix

## 문제

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

### Example

1. Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]  
Output: 8  
Explanation: There are 8 negatives number in the matrix.

2. Input: grid = [[3,2],[1,0]]  
Output: 0

3. Input: grid = [[1,-1],[-1,-1]]  
Output: 3

4. Input: grid = [[-1]]  
Output: 1

### 문제 풀이

```js
var countNegatives = function(grid) {
  var countNeg = 0;
  for (grids of grid) {
    for (var i=0; i<grids.length; i++) {
      if (grids[i]<0) {
        countNeg++;
      }
    }
  }
  return countNeg;
};
```

