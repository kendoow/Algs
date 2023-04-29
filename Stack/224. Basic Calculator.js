function calculate(s) {
	let stack = [];
	let operand = 0;
	let result = 0;
	let sign = 1;
  
	for (let i = 0; i < s.length; i++) {
	  const char = s.charAt(i);
  
	  if (!isNaN(parseInt(char))) {
		operand = operand * 10 + parseInt(char);
	  } else if (char === '+') {
		result += sign * operand;
		sign = 1;
		operand = 0;
	  } else if (char === '-') {
		result += sign * operand;
		sign = -1;
		operand = 0;
	  } else if (char === '(') {
		stack.push(result);
		stack.push(sign);
		sign = 1;
		result = 0;
	  } else if (char === ')') {
		result += sign * operand;
		operand = 0;
		result *= stack.pop();
		result += stack.pop();
	  }
	}
  
	if (operand !== 0) {
	  result += sign * operand;
	}
  
	return result;
  }
  