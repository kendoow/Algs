const findErrorNums = (nums) => {
    let missing = -1
    let duplicate = -1
    const hash = {}

    for(const el of nums){
        hash[el] = (hash[el] || 0) + 1
    }
    for (let i = 1; i <= nums.length; i++) {
        if (hash[i] === 2) {
            duplicate = i;
        }
        else if (!hash[i]) {
            missing = i;
        }
    }
    return [duplicate, missing]
};
console.log(findErrorNums([1, 2, 2, 4]))