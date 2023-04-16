var reduce = function(nums, fn, init) {
    let sum = init
    for(let el of nums){
        sum = fn(sum, el)
    }
    return sum
};