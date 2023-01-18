const peakIndexInMountainArray = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(start + (end - start) / 2);
  while (start < end) {
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return start;
};

console.log(peakIndexInMountainArray([0, 1, 0]));
