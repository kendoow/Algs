const groupAnagrams = (strs) => {
    const str = strs.map(word => word.split('').sort().join(''));
    const hash = {};

    for (let i = 0; i < strs.length; i++) {
        if (!hash[str[i]]){
            hash[str[i]] = [strs[i]];
        } else {
            hash[str[i]].push(strs[i])
        }
    }
    return Object.values(hash)
};