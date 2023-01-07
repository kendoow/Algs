const subarraySum = (nums, k) => {
  const map = {}; // cumulative sum: frequency
  let output = 0;
  let sum = 0; // running path sum

  map[0] = 1; // initialize with cumulative sum of 0

  for (const num of nums) {
    sum += num; // add to current path sum

    const prefix = sum - k;
    if (map[prefix]) output += map[prefix]; // add count of current prefix sum

    // add current sum to map
    if (!map[sum]) map[sum] = 1;
    else map[sum]++;
  }

  return output;
};
