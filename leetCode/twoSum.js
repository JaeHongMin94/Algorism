// 직접 짠 코드
var twoSum = function (nums, target) {
  var sum = 0;
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = 1; j < nums.length; j++) {
      if (i === j) continue;
      sum = nums[i] + nums[j];
      if (sum === target) {
        var arr = [nums.indexOf(nums[i]), nums.lastIndexOf(nums[j])];
        return arr;
      }
    }
  }
};
console.log(twoSum([3, 2, 3], 6));

/*
  다른 사람들의 풀이
  1)
  var twoSum = function (nums, target) {
    let length = nums.length
    let value
    let lastAns = []
    for (let i = 0; i <= length; i++) {
      for (let j = i + 1; j <= length; j++) {
        value = nums[i] + nums[j]
        if (value === target && i != j) {
          lastAns.push(i)
          lastAns.push(j)
          return lastAns
        }
      }
    }
  }

  2)
  var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i<= nums.length - 1; i++){
        
        let current = nums[i];
        let opposite = target - current;
        
        if(map.has(opposite)){
            return [i, map.get(opposite)]
        }else{
            map.set(current,i)
        }
    }
  };
*/
