const frequencySort = (s) => {
    const hash = {}
    const arr = []
    for(let el of s){
        hash[el] = (hash[el] | 0) + 1 // value - кол-во
    }
    const sorted = Object.entries(hash).sort((a,b) => b[1] - a[1])
    for([char, counter] of sorted){
        arr.push(char.repeat(counter))
    }
    console.log(arr)
    return arr.join('')
};

console.log(frequencySort('tree'))