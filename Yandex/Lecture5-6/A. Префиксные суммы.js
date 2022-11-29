const answer = (arr, idx1, idx2) => {
  const answer = [];
  let left = idx1 - 1;
  let right = idx2 - 1;
  while (left <= right) {
    answer.push(arr[left]);
    left++;
  }
  return answer.reduce((acc,val) => {
    acc += val
    return acc
  });
};

console.log(answer([1, 2, 3, 4], 1, 4));
