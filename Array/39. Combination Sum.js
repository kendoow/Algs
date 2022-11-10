const combinationSum = (candidates, target) => {
  const output = [];
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i] === target) {
      output.push([candidates[i]]);
    } else if (target % candidates[i] === 0) {
        if(candidates[i]   )
      output.push([candidates[i]]);
    }
  }
  return output;
};

console.log(combinationSum([2, 3, 6, 7], 7));
