const canPlaceFlowers = (flowerbed, n) => {
  let podryadmax = 1;
  for (let i = 0; i < flowerbed.length; i++) {
    console.log(podryadmax);
    if (flowerbed[i] === 1 && flowerbed[i + 1] === 1) {
      podryadmax++;
    }
  }
  return podryadmax >= n ? true : false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));
