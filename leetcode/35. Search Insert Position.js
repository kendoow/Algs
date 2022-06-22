const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  if(target < nums[left]) return 0;
  if(target > nums [right]) return nums.length
  

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    
  }
  return left;
};
