// var isPalindrome = function (x) {
//   const reversed = x.toString().split('').reverse().join('');
//   const isNegative = x < 0 ? reversed + '-' : reversed;
//   if (x.toString() === isNegative) {
//     return true;
//   }
//   return false;
// };

var isPalindrome = function (x) {
  if (x < 0) return false;

  const palindromeNumber = x.toString().split('').reverse().join('');
  return (result = x == palindromeNumber ? true : false);
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(-10));
console.log(isPalindrome(-101));
console.log(isPalindrome(122));
console.log(isPalindrome(12321));
