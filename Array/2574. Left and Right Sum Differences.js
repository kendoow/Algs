const leftRigthDifference = function (nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((acc, val) => acc + val, 0);
  return nums.map((curr, i) => {
    rightSum -= curr;
    let res = Math.abs(leftSum - rightSum);
    leftSum += curr;
    return res;
  });
};
