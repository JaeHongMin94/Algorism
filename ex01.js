/*
  다음 배열에서 400, 500을 삭제하는 code를 입력하세요.
*/

const nums = [100, 200, 300, 400, 500];

// nums.pop();
// nums.pop();
nums.splice(3, 5);
console.log(nums);

/*
  pop - 배열의 맨 뒤 요소 제거
  splice - 배열의 원하는 요소 제거
*/
