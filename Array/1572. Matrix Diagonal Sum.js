const diagonalSum = function (mat) {
  let sum = 0;
  let firstIdx = 0;
  let lasIdx = mat.length - 1;

  for (let i = 0; i < mat.length; i++) {
    if (firstIdx === lasIdx) {
      sum += mat[i][firstIdx];
    } else {
      sum += mat[i][firstIdx];
      sum += mat[i][lasIdx];
    }

    firstIdx++;
    lasIdx--;
  }

  return sum;
};
