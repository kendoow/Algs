const largestOddNumber = (num) => {
  let max = "";
  for (let i = 0; i < num.length; i++) {
    
    if (Number(num[i]) % 2 === 1) {
      max += num[i];
    } else {
        max = ''
    }
  }
  return max;
};
