const containsNearbyDuplicate = (nums, k) => {
    const hash = {};
   
    for (let i = 0; i < nums.length; i++) {
        console.log(hash[nums[i]], hash)
        if (i - hash[nums[i]] <= k) {
            console.log(hash[nums[i]])
            return true;
            
        }
        
        hash[nums[i]] = i;
        
    }
    console.log(hash)
    return false;
};

console.log(containsNearbyDuplicate([1,0,1,1],1))