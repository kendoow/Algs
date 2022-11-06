const numSubarrayProductLessThanK = (nums, k) => {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  if (k <= 1) {
    return 0;
  }
  let start = 0,
    count = 0,
    product = 1;
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
    while(product >= k && start <= i){
        product /= nums[start++];
    }
    count += i - start + 1
  }
  return count
};
