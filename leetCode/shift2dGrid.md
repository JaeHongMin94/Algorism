# 1260. Shift 2D Grid

## 문제

Given a 2D <code>grid</code> of size <code>m x n</code> and an integer <code>k</code>. You need to shift the <code>grid</code> <code>k</code> times.  
In one shift operation:  
Element at <code>grid[i][j]</code> moves to <code>grid[i][j + 1]</code>.  
Element at <code>grid[i][n - 1]</code> moves to <code>grid[i + 1][0]</code>.  
Element at <code>grid[m - 1][n - 1]</code> moves to <code>grid[0][0]</code>.  
_Return the 2D grid_ after applying shift operation <code>k</code> times.

### Example

1. Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1  
   Output: [[9,1,2],[3,4,5],[6,7,8]]

2. Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4  
   Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

3. Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9  
   Output: [[1,2,3],[4,5,6],[7,8,9]]

### 문제 풀이

```js
var shiftGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  const flatGrid = _.flatten(grid);
  const size = flatGrid.length;
  const shuffle = k % size;

  if (shuffle === 0) {
    return grid;
  }

  for (let i = 0; i < shuffle; i++) {
    const popped = flatGrid.pop();
    flatGrid.unshift(popped);
  }

  let result = [];
  for (let i = 0; i < m; i++) {
    result.push(flatGrid.slice(i * n, (i + 1) * n));
  }

  return result;
};
```
