const concatinate = (num1, num2) => {
  return +`${num1}${num2}`;
};

const findTheArrayConcVal = (nums) => {
  let answ = 0;

  while (nums.length !== 0) {
    if (nums.length > 1) {
      let first = nums.shift();
      let second = nums.pop();
      answ += concatinate(first, second);
    } else if (nums.length === 1) {
      answ += nums[0];
    } else {
      return answ;
    }

    console.log(answ, nums);
  }
  return answ;
};

console.log(findTheArrayConcVal([7, 52, 2, 4]));
