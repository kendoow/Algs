const average = (salary) => {
    const SortedSalary = salary.sort((a,b) => a - b).slice(1,-1)
    const Length = SortedSalary.length
    return SortedSalary.reduce((a,b) => a + b) / Length
};

console.log(average([1,3,2,5,4]))