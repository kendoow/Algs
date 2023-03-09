const canPlaceFlowers = (flowerbed, n) => {
  for (let i = 0; i < flowerbed.length && n !== 0; i++) {
    const prev = flowerbed[i - 1];
    const curr = flowerbed[i];
    const next = flowerbed[i + 1];
    if (curr === 0 && prev !== 1 && next !== 1) {
      n--;
      i++;
    }
  }
  return n === 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
