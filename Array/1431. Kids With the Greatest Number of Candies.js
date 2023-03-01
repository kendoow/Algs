const kidsWithCandies = function(candies, extraCandies) {
    const arr = []
    for(let el of candies){
        if(el + extraCandies >= Math.max(...candies)){
            arr.push(true)
        } else {
            arr.push(false)
        }
    }
    return arr
};