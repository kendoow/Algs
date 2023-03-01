const mergeArrays = function (nums1, nums2) {
  const hash = {};

  for (let el of nums1) {
    let [id, num] = el;
    hash[id] = hash[id] ? (hash[id] += num) : num;
  }

  for (let el of nums2) {
    let [id, num] = el;
    hash[id] = hash[id] ? (hash[id] += num) : num;
  }

  return Object.entries(hash);
};

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
);
