// найти подмассив суммой равной k, вывести его начало и конец

const subArrayWSumEqualK = (arr, k) => {
  let firstIdx = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum < k) {
      sum += arr[i];
    }
    if (sum > k) {
      sum -= arr[firstIdx];
      firstIdx++;
      if (sum === k) {
        return [firstIdx, i];
      }
    }
    if (sum === k) {
      return [firstIdx, i];
    }
  }
  return -1;
};

console.log(subArrayWSumEqualK([1, 4, 3, 3, 4], 10));

// 1 
// 5 -> 4
// 8 -> 3
// 11 -> k = 10 => 11 - 1 = 10 

// sliding window 