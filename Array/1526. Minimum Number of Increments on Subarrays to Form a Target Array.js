const minNumberOperations = (target) => {
  let result = 0;
  let curr = 0; 
  for (let i = 0; i < target.length; i++) {
    if (target[i] > curr) {
      result = result + target[i] - curr;
    }
    curr = target[i];
  }
  return result;
};

console.log(minNumberOperations([3, 1, 1, 2]));
