const minSetSize = (arr) => {
  const hash = {};
  const arrLength = arr.length / 2;

  let amountOfRemoved = 0;
  let removedSeq = 0;
  for (el of arr) {
    if (!hash[el]) {
      hash[el] = 0;
    }
    hash[el]++;
  }

  const sortedHash = Object.values(hash).sort((a, b) => b - a);


  for (let i = 0; i < sortedHash.length; i++) {
    amountOfRemoved += sortedHash[i];
    if (amountOfRemoved >= arrLength) return i + 1;
  }
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
