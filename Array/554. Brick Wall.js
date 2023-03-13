const leastBricks = (wall) => {
    const hash = {}
  
    // идея в том чтобы записывать для каждого индекса количество ровных срезов. ответ - длина
    //, так что надо высчитать сумму для 1 конкретного индекса 
    // el => 1 array vpravo
    let best = 0

    for(let el of wall){
        let sum = el[0]
        for(let i = 1; i < el.length; i++){
           
            hash[sum] = (hash[sum] || 0) + 1 // подсчитываю кол-во концов стен

            sum += el[i]
        }
    }
    for (let v of Object.values(hash))
        if (v > best) best = v
    return wall.length - best
};

console.log(leastBricks( [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]))
console.log(leastBricks([[1,1],[2],[1,1]]))