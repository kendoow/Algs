const calPoints = (operations) => {
    let stack = []

	for(let el of operations){
		if(el === '+'){
			stack.push(stack[stack.length - 1] + stack[stack.length - 2])
		} else if (el === 'D'){
			stack.push(stack[stack.length - 1] * 2)
		} else if (el === 'C'){
			stack.pop()
		} else {
			stack.push(el)
		}
	}

	return stack.reduce((acc, curr) => acc + curr, 0)
};