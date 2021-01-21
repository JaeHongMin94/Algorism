function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  if (
    Math.pow(-2, 31) >= parseInt(reversed) ||
    Math.pow(2, 31) - 1 <= parseInt(reversed)
  )
    return 0;
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(123));
console.log(
  Math.pow(-2, 31) <= 9646324351 || Math.pow(2, 31) - 1 >= 9646324351
);
