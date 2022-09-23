const sortColors = (nums) => {
  let zeros = [];
  let ones = [];
  let twos = [];
  let ans = [];
  for (el of nums) {
    if (el === 0) {
      zeros.push(0);
    } else if (el === 1) {
      ones.push(1);
    } else if (el === 2) {
      twos.push(2);
    }
  }
  return (ans = [...zeros, ...ones, ...twos]);
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
