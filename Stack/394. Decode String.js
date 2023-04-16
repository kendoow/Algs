const decodeString = s => {
	const stack = [];
	for (let el of s) {
		if (el !== ']') {
			stack.push(el);
			continue;
		}	

		let substring = '';
		let n = '';

		while (stack[stack.length - 1] !== '[') {
			substring = stack.pop() + substring;
		}

		stack.pop();

		while (!isNaN(stack[stack.length - 1])) {
			n = stack.pop() + n;
		}

		const segment = substring.repeat(+n);

		stack.push(segment);
	}

	return stack.join('');
};