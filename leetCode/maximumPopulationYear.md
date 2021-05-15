# 1854. Maximum Population Year

## 문제

You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.  
The <strong>population</strong> of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the <strong>inclusive</strong> range [birthi, deathi - 1]. Note that the person is <strong>not</strong> counted in the year that they die.  
Return _the <strong>earliest</strong> year with the <strong>maximum population</strong>_.

### Example

1. Input: logs = [[1993,1999],[2000,2010]]  
   Output: 1993  
   Explanation: The maximum population is 1, and 1993 is the earliest year with this population.

2. Input: logs = [[1950,1961],[1960,1971],[1970,1981]]  
   Output: 1960  
   Explanation:  
   The maximum population is 2, and it had happened in years 1960 and 1970.  
   The earlier year between them is 1960.

### 문제 풀이

```js
function maximumPopulation(logs) {
  const offset = 1950;
  const bucket = new Int8Array(100);

  for (const set of logs) {
    const [birth, death] = set;
    for (let i = birth - offset; i < death - offset; i++) bucket[i]++;
  }

  let max = 0;
  let maxY = 0;
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] > max) {
      max = bucket[i];
      maxY = i;
    }
  }

  return maxY + offset;
}
```
