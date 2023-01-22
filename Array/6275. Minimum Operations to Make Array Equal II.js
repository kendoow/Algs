// РЕШЕНИЕ 1
// можно менять элементы в 1 массиве только на +- k
// перебрать все элементы и чекнуть если +- k дает элемент из соседнего массива то балдеж иначе хуйня

// РЕШЕНИЕ 2
// как то использовать мапу

const minOperations = (nums1, nums2, k) => {
  let answer = 0;
  let isEqual = true;
  // если сумма не равна то всегда -1
  let firstSum = nums1.reduce((acc, item) => acc + item);
  let secondSum = nums2.reduce((acc, item) => acc + item);

  if (firstSum !== secondSum) {
    return -1;
  }
  
  if (firstSum !== secondSum) {
    return -1;
  }
  // запушить разницу и поделить на k
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] > nums2[i] && (nums1[i] - nums2[i]) % k === 0) {
      answer += nums1[i] - nums2[i];
      isEqual = false;
    } else if (nums1[i] < nums2[i] && (nums2[i] - nums1[i]) % k === 0) {
      answer += nums2[i] - nums1[i];
      isEqual = false;
    }
  }
  if (k === 0) {
    return -1;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] !== nums1[i]) {
      isEqual = false;
    }
  }

  return Math.floor(answer / k) / 2 >= 1 || isEqual ? Math.floor(answer / k / 2) : -1;
};

console.log(minOperations([3, 8, 5, 2], [2, 4, 1, 6], 1)); // -1
console.log(minOperations([4, 3, 1, 4], [1, 3, 7, 1], 3)); // -> 2
console.log(minOperations([4, 3, 1, 4], [2, 3, 6, 1], 10)); // -> -1
console.log(minOperations([3, 0, 1], [3, 0, 1], 1)); // -> 0
console.log(minOperations([2, 5], [5, 2], 2));
console.log(minOperations([10, 5, 15, 20], [20, 10, 15, 5], 0));
