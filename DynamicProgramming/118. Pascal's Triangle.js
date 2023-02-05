const generate = (numRows) => {
  const output = [];
  if (!numRows) return [];
  for (let i = 1; i < numRows; i++) {
    let row = [1],
      j = 1;
    while (j < i) {
      row.push(output[i - 1][j - 1] + output[i - 1][j]);
      j++;
    }
    row.push(1);
    output.push(row);
  }
  return output;
};
