const subarraysDivByK = function (nums, k) {
  let counter = 0;
  let sum = 0;
  const hash = {};
  hash[0] = 1;
  for (let num of nums) {
    sum = (num + sum) % k;
    if (sum < 0) sum += k;
    if (hash[sum]) {
      counter += hash[sum];
    }
    hash[sum] = hash[sum] ? hash[sum] + 1 : 1;
  }
  console.log(hash);
  return counter;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
console.log(subarraysDivByK([5], 9));

// const subarraysDivByK =  (nums, k) =>{
//   let counter = 0;
//   // найти подмассивы, поделить сумму на k,если делится то counter++, else poxui
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum % k == 0) {
//         counter++;
//       }
//     }
//   }
//   return counter;
// };
