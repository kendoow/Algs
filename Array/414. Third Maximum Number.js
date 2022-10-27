const thirdMax = (nums) => {
  const answ = [];
  new Set(nums.sort((a, b) => a - b).reverse()).forEach((el) => answ.push(el));

  console.log(answ)
   if(answ.includes(answ[2])){
    return answ[2]
   }
   return answ[0]
};

console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]));
