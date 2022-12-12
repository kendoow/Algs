const answ = (arr) => {
  let seqGrow = 0;
  for (let i = 1; i < arr.length; i++) {
    const pairGrow = Math.sign(arr[i] - arr[i - 1]);

    if (pairGrow === 0) {
      continue;
    }

    seqGrow = seqGrow || pairGrow;

    if (pairGrow !== seqGrow) {
      return false;
    }
  }
  return true;
};
const array = [1, 2, 3, 4];

console.log(answ(array));

