const minSubArrayLen = (target, nums) => {
    let distance = Infinity
    let left = 0;
    let sum = 0;
    
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; 
        while (sum >= target) {
            distance = Math.min(distance, right - left + 1);
            sum -= nums[left];
            left += 1;
        }
    }

    return distance === Infinity ? 0 : distance;
};


console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
