const flipAndInvertImage = (image) => {
  for (el of image) {
    el.reverse();
    for (let i = 0; i < el.length; i++ ) {
      if (el[i] === 1) el[i] = 0;
      else el[i] = 1;
    }
  }
  return image;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
