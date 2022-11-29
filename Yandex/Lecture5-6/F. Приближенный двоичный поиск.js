const answer = (arr1, arr2) => {
  let pointer1 = 0;
  let pointer2 = 0;
  let stack = [];
  let min = Infinity;
  let superMin = Infinity;
  while (stack.length !== arr2.length) {
    console.log(pointer1, pointer2, superMin, stack)
    if (arr1[pointer1] - arr2[pointer2] === 0) {
      stack.push(arr1[pointer1]);
    } else if ( arr1[pointer1] > arr2[pointer2]){
      min = arr1[pointer1] - arr2[pointer2];
      superMin = Math.min(min, superMin);
      pointer1++;
    } else {
        pointer1++
    }
    if (pointer1 === arr1.length) {
      stack.push(superMin);
      pointer1 = 0;
      pointer2++;
    }
  }
  return stack;
};

console.log(answer([1, 3, 5, 7, 9], [2, 4, 8, 1, 6]));
