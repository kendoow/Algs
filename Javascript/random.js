function createCounter(n){
	let count = n

	function incr(){
		return ++count
	}

	function decr(){
		return --count
	}

	return {
		incr,
		decr
	}
}

const counter = createCounter(10)



counter.incr()

console.log(counter.incr())
console.log(counter.incr())