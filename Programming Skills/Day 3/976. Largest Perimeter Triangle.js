const largestPerimeter = (nums) => {
    if(nums[0] + nums[1] > nums[2] || nums[1] + nums[2] > nums[0] || nums[0] + nums[2] > nums[1]){
        return 0
    } else {
        return nums.reduce((a,b) => a+ b)
    }
};