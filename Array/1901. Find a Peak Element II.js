const findPeakGrid = function (mat) {
  const max = Math.max(...mat.flat(Infinity));
  let len = mat.flat(1).length / mat.length;
  console.log(len);
  let maxIdx = [0, 0];
  let = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < len; j++) {
      console.log(mat[i][j]);
      if (max === mat[i][j]) {
        maxIdx = [i, j];
      }
    }
  }
  return maxIdx;
};

const mat = [
  [25, 37, 23, 37, 19],
  [45, 19, 2, 43, 26],
  [18, 1, 37, 44, 50],
];

console.log(findPeakGrid(mat));
