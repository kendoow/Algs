const minimumCardPickup = (cards) => {
   
    let map ={}
    let res = Infinity
    // key - znachenie card
    // value - last index of card
    for (let [i,c] of cards.entries()) {
        // i - индекс 
        // с - число
        console.log(map)
        console.log(c)
        console.log(map[c])

        // map[c] записывается в конце цикла. Что мы делаем. 
        // Запоминаем индексы числел, если такой индекс уже был, то он не undef -> можно из текущего индекса вычесть тот что записан и записать в переменную, вывести меньший резултат
        if (map[c] !== undefined) {
            res = Math.min(res, i-map[c]+1)
        }
        
        map[c] = i
        
    }
    return res === Infinity ? -1 : res
};

console.log(minimumCardPickup([1,2,3,4,3,3,3]))