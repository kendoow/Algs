const kthSmallestPrimeFraction = (arr, k) => {
  let leftIdx = 0;
  let rigthIdx = arr.length;
  let countIdx = 1;
  const arr1 = [];
  if (k === 1) return [arr[leftIdx], arr[rigthIdx]];
  arr1.push(arr[leftIdx], arr[rigthIdx]);
  while (countIdx < k) {
    if (arr[leftIdx + 1] / arr[rigthIdx] > arr[leftIdx] / arr[rigthIdx - 1]) {
      leftIdx++;
      countIdx++;
      arr1.pop();
      arr1.pop();
      arr1.push(arr[leftIdx], arr[rigthIdx]);
    } else {
      rigthIdx--;
      countIdx++;
      arr1.pop();
      arr1.pop();
      arr1.push(arr[leftIdx], arr[rigthIdx]);
    }
  }
  return arr1;
};

console.log(kthSmallestPrimeFraction([1,29,47],1));
