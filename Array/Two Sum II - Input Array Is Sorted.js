const twoSum = function (numbers, target) {
  let idx1 = 0;
  let idx2 = numbers.length - 1;
  while (idx1 < idx2) {
    let sum = numbers[idx1] + numbers[idx2];
    if (sum === target) {
      console.log(1);
      return [idx1 + 1, idx2 + 1];
    } else if (sum > target) {
      console.log(2);
      idx2--;
    } else if (sum < target) {
      console.log(3);
      idx1++;
    }
  }
  return [-1, -1];
};

console.log(twoSum([2, 7, 11, 15], 9));
