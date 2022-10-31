const findMedianSortedArrays = (nums1, nums2) => {
  const nums3 = [...nums1, ...nums2].sort((a, b) => a - b);
  let midIndex = Math.floor(nums3.length / 2);
  let answ;

  if ((nums3.length % 2 === 0 && nums3[midIndex + 1]) || nums3.length === 2) {
    answ = (nums3[midIndex - 1] + nums3[midIndex]) / 2;
  } else {
    answ = nums3[midIndex];
  }

  return answ;
};

console.log(findMedianSortedArrays([], [2, 3]));
