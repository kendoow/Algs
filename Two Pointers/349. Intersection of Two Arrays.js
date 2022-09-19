const intersection = (nums1, nums2) => {
    let firstSet = new Set(nums1)
    let secondSet = new Set(nums2)
    let ans = new Set()
    let answer = []
    for (let i = 0; i < Math.max(nums1.length, nums2.length); i++){
        if(firstSet.has(nums2[i]) && !ans.has(nums2[i])){
            ans.add(nums2[i])
        } else if(secondSet.has(nums1[i]) && !ans.has(nums1[i])){
            ans.add(nums1[i])
        }
    }
    ans.forEach((el) => answer.push(el))
    return answer
};

console.log(intersection([1,2,2,1], [2,2]))