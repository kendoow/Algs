const uniquePaths = (m, n) => {
  const arr = Array.from(Array(m), () => new Array(n));

  for (let i = 0; i < arr.length; i++) arr[i][0] = 1;
  for (let i = 0; i < arr[0].length; i++) arr[0][i] = 1;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr[m - 1][n - 1];
};

console.log(uniquePaths(3, 4));
