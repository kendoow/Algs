const lastStoneWeight = (stones) => {
    if(stones.length < 2){
        return stones
    }
     while (stones.length){
        let sorted = stones.sort((a,b) => a - b)
        let pushed = sorted[sorted.length - 1] - sorted[sorted.length - 2]
        sorted.pop(sorted[sorted.length - 1])
        sorted.pop(sorted[sorted.length - 2])

        if(pushed > 0){
            sorted.push(pushed)
        }
        if(sorted.length < 2){
            return sorted
        }
    }
   
};


console.log(lastStoneWeight([2,7,4,1,8,1]))