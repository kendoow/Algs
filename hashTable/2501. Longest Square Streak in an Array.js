const longestSquareStreak = (nums) => {
  nums.sort((a, b) => b - a);
  const hash = {};
  let answer = -1;
  for (let el of nums) {
    let element = el * el;
    if (element in hash) {
      hash[el] = hash[element] + 1;
      answer = Math.max(answer, hash[el]);
    } else {
      hash[el] = 1;
    }
  }

  return answer;
};

console.log(longestSquareStreak([4, 3, 6, 16, 8, 2]));
console.log(longestSquareStreak([2, 3, 5, 6, 7]));
