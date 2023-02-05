const separateDigits = function(nums) {
    let answ = []
    for(let el of nums){
        answ.push(...[...el.toString()].map(Number))
    }
    return answ
};

console.log(separateDigits([13,25,83,77]))