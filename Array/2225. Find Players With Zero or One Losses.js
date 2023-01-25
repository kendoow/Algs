var findWinners = function (matches) {
  const oneMore = [];
  const zero = [];

  const hash = {};

  for (let [winner, loser] of matches) {
    if (!hash[loser]) {
      hash[loser] = "lost once";
    } else if (hash[loser]) {
      hash[loser] = "lost more than once";
    }
  }

  for (let [winner, loser] of matches) {
    console.log(winner, loser);
    if (!hash[winner] && !zero.includes(winner)) {
      zero.push(winner);
    }
    if (hash[winner] == "lost once" && !oneMore.includes(winner)) {
      oneMore.push(winner);
    }
    if (hash[loser] == "lost once" && !oneMore.includes(loser)) {
      oneMore.push(loser);
    }
  }
  console.log(hash, oneMore);
  return [zero.sort((a, b) => a - b), oneMore.sort((a, b) => a - b)];
};

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
);
console.log(findWinners([[1, 100000]]));
