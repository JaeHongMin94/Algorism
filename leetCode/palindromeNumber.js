var isPalindrome = function (x) {
  const reversed = x.toString().split('').reverse().join('');
  const isNegative = x < 0 ? reversed + '-' : reversed;
  if (x.toString() === isNegative) {
    return true;
  }
  return false;
};

console.log(isPalindrome(121));
