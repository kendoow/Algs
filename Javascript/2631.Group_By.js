Array.prototype.groupBy = function(fn) {
    const map = {}
	for(let el of this){
		map[fn(el)] ? map[fn(el)].push(el) : map[fn(el)] = [el]
	}
	return map
};


console.log([1,2,3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}
