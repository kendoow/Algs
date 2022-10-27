reverse = function (array) {
  let arr = [];
  let right = array.length;
  while (right !== 0) {
    right--;
    arr.push(array[right]);
  }
  return arr;
};
