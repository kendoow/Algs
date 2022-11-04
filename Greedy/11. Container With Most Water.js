const maxArea = (height) => {
  let SMax = 0;
  let start = 0;
  let end = height.length - 1;
  while (start < end) {
    let width = end - start;
    SMax = Math.max(SMax, Math.min(height[start], height[end]) * width);

    if (height[start] <= height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return SMax;
};
