const search = function (nums, target) {
  let leftIdx = 0
  let rigthIdx = nums.length - 1
  while (leftIdx < rigthIdx) {
    let mid = leftIdx + parseInt((rigthIdx - leftIdx) / 2); 

    if (nums[mid] == nums[rigthIdx]) rigthIdx--; 
    else if (nums[mid] < nums[rigthIdx]) {
      // rigthIdx part sorted
      if (target > nums[mid] && target <= nums[rigthIdx]) leftIdx = mid + 1;
      else rigthIdx = mid;
    } else {
      if (target > nums[mid] || target < nums[leftIdx]) leftIdx = mid + 1;
      else rigthIdx = mid;
    }
  }
  return nums[leftIdx] == target;
};
