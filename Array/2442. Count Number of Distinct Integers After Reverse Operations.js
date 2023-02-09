const countDistinctIntegers = (nums) => {
  const hash = {};
  for (let x of nums) hash[+x] = 1;
  for (let i = 0; i < nums.length; i++) {
    let num = +nums[i].toString().split("").reverse().join("");
    hash[num] = 1;
  }
  return Object.keys(hash).length;
};

console.log(
  countDistinctIntegers([
    89904, 846787, 965070, 396570, 847607, 625317, 851503, 143414, 954838,
    837423, 988190, 916423, 771555, 680073, 575614, 967207, 965688,
  ])
);
