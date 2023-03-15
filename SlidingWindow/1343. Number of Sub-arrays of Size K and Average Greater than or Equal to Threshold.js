const calcAverage = (arr) => {
  let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
  return totalSum / arr.length;
};

const numOfSubarrays = (arr, k, threshold) => {
  let counter = 0;
  const array = [];

  // first fill
  for (let i = 0; i < k; i++) {
    array.push(arr[i]);
  }

  if (calcAverage(array) >= threshold) {
    counter++;
  }

  for (let i = k; i < arr.length + 1; i++) {
    console.log(array);
    array.push(arr[i]);
    array.shift();
    if (calcAverage(array) >= threshold) {
      counter++;
    }
  }
  return counter;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
