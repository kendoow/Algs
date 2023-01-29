const similarPairs = (words) => {
    let set = []
    const hash = {}
    let answ = 0
    for(let el of words){
        set.push([...new Set(el)].sort().join(''))
    }  
    for (let el of set){
        if(!hash[el]){
            hash[el] = 1
        } else {
            
            answ += hash[el]
            hash[el]++
        }
    }

    console.log(set)
    return answ
};




console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]))

console.log(similarPairs(["aabb","ab","ba"]))
