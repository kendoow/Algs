var coloredCells = function (n) {
  // предыдущее + n - 1 * 4
  if (n === 1) {
    return 1;
  }
  return coloredCells(n - 1) + ((n - 1) * 4);
};


console.log(coloredCells(3))