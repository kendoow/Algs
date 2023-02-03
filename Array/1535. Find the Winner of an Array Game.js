// k раз надо сравнивать и передвигать

const getWinner = (arr, k) => {
  let ws = 0;
  let currentWinner = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[currentWinner] > arr[i]) {
      ++ws;
    } else {
      ws = 1;
      currentWinner = i;
    }
    if (ws === k) return arr[currentWinner];
  }
  return arr[currentWinner];
};

console.log(getWinner([2, 1, 3, 5, 4, 6, 7], 2));
