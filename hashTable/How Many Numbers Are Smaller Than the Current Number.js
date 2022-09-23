const smallerNumbersThanCurrent = (nums) => {
	

    const sorted = [...nums];

	sorted.sort((a,b) => a-b);

    const ans = [];
	
    for(let i = 0; i < nums.length; i++){
        ans.push(sorted.indexOf(nums[i]));
    }
	console.log(sorted)

    return ans;
    
};
console.log(smallerNumbersThanCurrent([8,1,2,2,3]))