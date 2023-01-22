const getCommon = (nums1, nums2) => {
  const hash = {};
  for (let el in nums1) {
    hash[el] = (hash[el] || 0) + 1;
  }

  for (let i = 0; i < nums1.length; i++) {
    if (hash[nums2[i]]) {
      return nums2[i];
    }
  }
  console.log(hash)
  return -1;
};

// console.log(getCommon([1, 2, 3],[2, 4]));
console.log(getCommon([1, 2],[2, 4]));
