const calcInPolishNotation = (arr) => {
  const stack = [];
  const operators = ["+", "-", "*", "/"];
  let first;
  let second;
  for (let i = 0; i < arr.length; i++) {
    if (!operators.includes(arr[i])) {
      // если число, то пушим чиселку
      stack.push(arr[i]);
    } else if (operators.includes(arr[i])) {
      // если знак, то меняем стек
      if (arr[i] === "+") {
        second = stack[stack.length - 1];
        first = stack[stack.length - 2];
        stack.pop();
        stack.pop();
        stack.push(second + first);
      } else if (arr[i] === "-") {
        second = stack[stack.length - 1];
        first = stack[stack.length - 2];
        stack.pop();
        stack.pop();
        stack.push(first - second);
      } else if (arr[i] === "*") {
        second = stack[stack.length - 1];
        first = stack[stack.length - 2];
        stack.pop();
        stack.pop();
        stack.push(second * first);
      }
    }
  }

  return stack[0]
};


// const calcInPolishNotation = function(array) {
//     const stackNumbers = [];
//     const collection = {
//         '+': (x,y) => x + y,
//         '-': (x,y) => x - y,
//         '*': (x,y) => x * y,
//         '/': (x,y) => x / y,
//     }
    
//     return array.reduce((acc, value) => {
//         if (value === +value) stackNumbers.push(value);
//         else {
//             const secondNumber = stackNumbers.pop();
//             const firstNumber = stackNumbers.pop();
//             const newValue = collection[value](firstNumber, secondNumber);
//             stackNumbers.push(newValue);
//         }
        
//         return stackNumbers.at(-1);
//     }, 0)
// }

console.log(calcInPolishNotation([1, 2, "+", 3, "+", 14, "+"])); //  20
console.log(calcInPolishNotation([1, 2, "+", 4, "*", 3, "+"])); // 15
console.log(calcInPolishNotation([7, 2, 3, "*", "-"])); // 1 / [7,2,3] -> [7,6] i =  -> [1]
// 1 2 3 * + => Это (2 * 3) + 1
