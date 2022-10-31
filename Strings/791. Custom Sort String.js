const customSortString = (order, s) => {
  const hash = {};
  const ans = [];
  for (let i = 0; i < order.length; i++) {
    hash[order[i]] = i;
  }
  for (let i = 0; i < s.length; i++) {
    if (s.includes(order[i])) {
      ans.push(order[i]);
    } else {
      ans.push(s[i]);
    }
  }
  return ans.join("");
};

console.log(customSortString("kqep", "pekeq"));
