// найти самую большую уменьш последовательность
const findLengthOfShortestSubarray = (arr) => {
  let n = arr.length;
  let start = 0;
  let end = n - 1;
  // non decreasing order moving from left to right
  while (arr[start] <= arr[start + 1]) start++;
  if (start === n - 1) return 0;
  // non decreasing portion of the right side
  while (end >= start && arr[end] >= arr[end - 1]) end--;

  let result = Math.min(n - start - 1, end);

  let s = 0;
  let e = end;
  // Check if merge is possible
  while (s <= start && e < n) {
    if (arr[s] <= arr[e]) {
      result = Math.min(result, e - s - 1);
      s++;
    } else e++;
  }

  return result;
};
