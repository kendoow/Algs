const judgeSquareSum = (c) => {
  let left = 0;
  let right = Math.ceil(Math.sqrt(c));
  while (left <= right) {
    mid = left ** 2 + right ** 2;
    if (mid === c) {
      return true;
    } else if (mid < c) {
      left++;
    } else {
      right--;
    }
  }
  return false;
};
