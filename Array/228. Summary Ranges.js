const summaryRanges = (nums) => {
    const output = []

    for (let i = 0; i < nums.length; i++) {
        let range = [nums[i]]
        let j = i + 1
        while (nums[j] - range[range.length - 1] <= 1) {
            range.push(nums[j])
            j++
            i++
        }
        if (range.length === 1) {
            output.push(`${range[0]}`)
        } else {
            output.push(`${range[0]}->${range[range.length - 1]}`)
        }
    }

    return output   
};

console.log(summaryRanges([1,2,3,5]))