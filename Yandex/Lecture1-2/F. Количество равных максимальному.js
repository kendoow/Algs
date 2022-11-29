const answer = (nums) => {
  const hash = {};
  for (el of nums) {
    hash[el] = (hash[el] | 0) + 1;
  }

  return sorted = Object.values(hash).sort((a, b) => b - a)[0]

};

console.log(answer([1, 3, 3,3,3, 1]));
