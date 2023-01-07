var wordPattern = function (pattern, s) {
  const arr = s.split(" ");
  const hash = {};

  if (
    arr.length !== pattern.length ||
    new Set([...pattern]).size !== new Set(arr).size
  )
    return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!hash[pattern[i]]) {
      hash[pattern[i]] = arr[i];
    } else if (hash[pattern[i]] !== arr[i]) {
      return false;
    }
  }
  return true;
};
