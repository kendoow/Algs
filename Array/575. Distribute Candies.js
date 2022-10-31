const distributeCandies = (candyType) => {
    const hash = {}
    const len = candyType.length / 2
    for (let el of candyType){
        if(!hash[el]){
            hash[el] = 0
        }
        hash[el]++
    }
   const iterate = Object.values(hash).length

   return len > iterate ? iterate : len
};