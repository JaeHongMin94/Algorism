var subtractProductAndSum = function (n) {
  const num = n.toString();
  let mul = 1;
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    let temp = num.charAt(i);
    mul *= Number(temp);
    sum += Number(temp);
  }
  return mul - sum;
};

console.log(subtractProductAndSum(234));
