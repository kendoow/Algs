var getSum = function(a, b) {
    const arr = [a, b]
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
};

console.log(getSum(1,2))