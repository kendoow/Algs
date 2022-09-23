const sortArrayByParityII = (nums) => {
    let odd = [];
    let even = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 1) {
            odd.push(nums[i]);
        } else {
            even.push(nums[i])
        }
    }
    let solution = []

    for (let i = 0; i < odd.length; i++) {
        solution.push(even[i]);
        solution.push(odd[i]);
    }
    return solution;
};