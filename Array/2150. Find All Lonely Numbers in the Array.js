const findLonely = (nums) => {
    const hash = {}
    for(let el of nums){
        hash[el] = (hash[el] || 0) + 1
    }
    const answ = []
    for (let num of Object.keys(hash)){
        if (hash[num] === 1){
            if (!hash[Number(num)-1] && !hash[Number(num)+1]) answ.push(Number(num));
        }
    }
    return answ
};

console.log(findLonely([10,6,5,8]))