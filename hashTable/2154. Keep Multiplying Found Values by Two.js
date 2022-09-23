const findFinalValue = (nums, original) => {
  while (nums.includes(original)) {
    original = original * 2;
  }
  return original;
};

console.log(findFinalValue([5, 3, 6, 1, 12], 3));
