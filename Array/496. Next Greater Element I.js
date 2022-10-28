function nextGreaterElement(nums1, nums2) {
  const answ = [];
  for (let el of nums1) {
    let x = -1;
    for (let j = nums2.length - 1; nums2[j] != el; j--) {
      if (nums2[j] > el) x = nums2[j];
    }
    answ.push(x);
  }
  return answ;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
