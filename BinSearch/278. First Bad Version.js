const solution = (isBadVersion) => {
  return function (n) {
    let left = -1;
    let right = n + 1;
    while (right - left > 1) {
      const mid = Math.round((right + left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid;
      }
    }
    return left + 1;
  };
};

