const findPairs = function (nums, k) {
  if (!nums.length || k < 0) return 0;

  const hash = {};

  let counter = 0;

  for (let el of nums) {
    hash[el] = (hash[el] || 0) + 1;
  }

  Object.keys(hash).forEach((key) => {
    if (k === 0) {
      if (hash[key] > 1) counter++;
    } else if (hash[parseInt(key) + k]) {
      counter++;
    }
  });
  return counter;
};

console.log(findPairs([3, 1, 4, 1, 5], 2)); // 2
console.log(findPairs([1, 2, 3, 4, 5], 1)); // 4
