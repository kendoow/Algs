const maxNumberOfBalloons = function (text) {
  const hash = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  for (let el of text) {
    hash[el]++;
  }

  return Math.floor(Math.min(hash.b, hash.a, hash.l / 2, hash.o / 2, hash.n));
};
