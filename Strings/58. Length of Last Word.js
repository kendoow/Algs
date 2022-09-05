const lengthOfLastWord = function(s) {
    if(s.length === 0) return 0;
    let ans = s.trim().split(' ')
    return ans[ans.length - 1].length
};