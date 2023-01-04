const relativeSortArray = (arr1, arr2) => {
    const sortedArr1 = [];
    let arr1Remaining = [...arr1];
    
    for (let i = 0; i < arr2.length; i++) {
        const removedNums = arr1Remaining.filter(num => num === arr2[i]);
        arr1Remaining = arr1Remaining.filter(num => num !== arr2[i]);
        
        sortedArr1.push(...removedNums);
    }

    sortedArr1.push(...arr1Remaining.sort((a, b) => a - b));
    return sortedArr1;
};

arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];

arr2 = [2, 1, 4, 3, 9, 6];

console.log(relativeSortArray(arr1, arr2));
