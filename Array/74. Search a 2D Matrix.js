const searchMatrix = (matrix, target) => {
  const flat = matrix.flat();
  console.log(flat.includes(target))
  return flat.includes(target) ? true : false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
