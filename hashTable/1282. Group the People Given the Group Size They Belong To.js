const sliceIntoChunks= (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

const groupThePeople = (groupSizes) => {
    const hash = {}
    const answ = []
    for(let i = 0; i< groupSizes.length; i++){
        let curr = groupSizes[i] // чиселка
        if(!hash[curr]) {
            hash[curr] = [i]
        } else {
            hash[curr] = [...hash[curr] , i]
        }
    }

    for(const el in hash){
        if(hash[el].length == el){
            answ.push(hash[el])
        } else {
          
            let array = sliceIntoChunks(hash[el], +el)
         
            answ.push(array)
        }
    }
    return answ
}

// console.log(sliceIntoChunks([ 2, 3, 4, 5, 6, 7 ], 1))
// console.log(groupThePeople([2,2,1,1,1,1,1,1])) // -> [[2],[3],[4],[5],[6],[7],[0,1]]
console.log(groupThePeople([3,3,3,3,3,1,3])) // -> [[5],[0,1,2],[3,4,6]]