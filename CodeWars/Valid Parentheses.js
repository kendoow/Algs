const validParentheses = (parens) => {

  const stack = []

  for (el of parens){
    if (el) {
        // есть чем открыть закидываем чем открыть
        stack.push(el);
    } 
     if(stack[0] === '(' && stack[stack.length - 1] === ')'){
      stack.pop() 
      stack.shift()
    }
  }
  if(stack.length === 0){
    return true 
  } else {
    return false
  }
};
console.log(validParentheses('(())()(())'))