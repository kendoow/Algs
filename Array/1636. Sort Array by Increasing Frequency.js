const frequencySort = (nums) => {
    const hash = {}
    for(let el of nums){
        hash[el] = (hash[el] | 0) + 1
    }
    
    return nums.sort((a, b) => hash[a] === hash[b] ? b - a : hash[a] - hash[b]);

};