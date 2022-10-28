const sumOfUnique = (nums) => {
  const hash = {};
  sum = 0;
  for (el of nums) {
    if (!hash[el]) {
      hash[el] = 0;
    }
    hash[el]++;
  }
  for (el in hash) {
    if (hash[el] === 1) {
      sum += Number(el);
    }
  }
  console.log(hash);
  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
