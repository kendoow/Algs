const subtractProductAndSum = (n) => {
    let array = [...n.toString()].map(Number);
    let sum = array.reduce((a,b) => a+ b)
    let multiply = array.reduce((a,b) => a * b)
    let answ = multiply - sum 
    return answ
};

console.log(subtractProductAndSum(124))