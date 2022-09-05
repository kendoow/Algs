const merge = (nums1, m, nums2, n) => {
  let numsUp1 = nums1.slice(0, m);
  let numsUp2 = nums2.slice(0, n);
  let result = [...numsUp1, ...numsUp2];
  return result.sort((a, b) => a - b);
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
