const sortPeople = (names, heights) => {
    const hash = {}
    const answ = []
    for(let i = 0; i < names.length;i++){
        hash[heights[i]] = names[i]
    }

    heights.sort((a,b) => b - a)
    console.log(heights)
    for(el of heights){
        answ.push(hash[el])
    }
    return answ
};

const names = ["Mary","John","Emma"]

const heights = [180,165,170]

console.log(sortPeople(names,heights))