/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 const revNums = (nums, start,end) => {
    while(start < end){
            [nums[start], nums[end]] = [nums[end], nums[start]]
        start++;
        end--;
    }
}
const rotate = function(nums, k) {
    k = k % nums.length;
    nums.reverse();
    revNums(nums, 0 , k-1);
    revNums(nums, k , nums.length - 1);
    
};