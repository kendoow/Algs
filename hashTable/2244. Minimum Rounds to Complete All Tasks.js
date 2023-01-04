const minimumRounds = (tasks) => {
  const hash = {};
  let counter = 0;
  for (let el of tasks) {
    hash[el] = (hash[el] | 0) + 1;
  }

  for (let obj in hash) {
    if (hash[obj] === 1) return -1;
    else {
      counter += Math.ceil(hash[obj] / 3.0);
    }
  }
  return counter;
};

// есть случай когда надо вычесть 2 -> % 3 === 1 => -2 и потом -3 остаток 1
// остаток 2 -> вычесть 2 уже 2 раза. Если ушли в нолики то похуй

console.log(minimumRounds([2, 3, 3]));
