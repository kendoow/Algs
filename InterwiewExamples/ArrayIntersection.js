// Даны два массива: [1, 2, 3, 2, 0] и [5, 1, 2, 7, 3, 2]
// Надо вернуть [1, 2, 2, 3] (порядок неважен)

const answer = (nums1, nums2) => {
  return [...nums1, ...nums2]
};

const answerWithOrder = (nums1, nums2) => {
    return [...nums1, ...nums2].sort((a, b) => a - b);
};

console.log(answerWithOrder([1, 2, 3, 2, 0], [5, 1, 2, 7, 3, 2]));
