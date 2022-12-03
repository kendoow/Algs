const findDuplicate = (nums) => {
  let brr = [];
  for (let num of nums) {
    if (brr[num] === true) return num;
    else brr[num] = true;
  }
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
