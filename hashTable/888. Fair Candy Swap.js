const fairCandySwap = (aliceSizes, bobSizes) => {
  let difference = Math.abs(
    aliceSizes.reduce((a, b) => a + b, 0) - bobSizes.reduce((a, b) => a + b, 0)
  );
  const hash = {};
  for (let i = 0; i < aliceSizes.length; i++) {
    hash[aliceSizes[i]] = i;
  }
  console.log(difference);
  for (let i = 0; i < bobSizes.length; i++) {
    if (hash[bobSizes[i] + difference / 2])
      return [bobSizes[i] + difference / 2, bobSizes[i]];
  }
};

console.log(fairCandySwap([1, 1], [2, 2]));


