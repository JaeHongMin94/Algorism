var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  const type = 0,
    color = 1,
    name = 2;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === 'type') {
      if (items[i][type] === ruleValue) {
        count++;
      }
    } else if (ruleKey === 'color') {
      if (items[i][color] === ruleValue) {
        count++;
      }
    } else {
      if (items[i][name] === ruleValue) {
        count++;
      }
    }
  }
  return count;
};

console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'lenovo'],
      ['phone', 'gold', 'iphone'],
    ],
    'color',
    'silver'
  )
);
