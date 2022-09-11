// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = function (s) {
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack = [];

  for (let ch of s) {
    if (brackets[ch]) {
      // есть чем открыть закидываем чем открыть
      
      stack.push(brackets[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      // последний элемент закрывающий -> выкинуть со стека ибо есть пара
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("{}()[]"));
