const maximumWealth = (accounts) => {
  let max = 0;
  // el - matrix array
  for (const el of accounts) {
    max = Math.max(
      max,
      el.reduce((a, b) => a + b)
    );
  }
  return max;
};
