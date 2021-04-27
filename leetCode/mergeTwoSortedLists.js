var mergeTwoLists = function (l1, l2) {
  const arr = [l1, l2];
  return [].concat.apply([], arr);
};
const l1 = [1, 2, 3];
const l2 = [1, 3, 4];
const arr = mergeTwoLists(l1, l2);
console.log(
  arr.sort(function (a, b) {
    return a - b;
  })
);
