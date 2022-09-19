const reverseStr =  (s, k) => {
  for (let i = 0; i < s.length; i = i + 2 * k)
    s =
      s.slice(0, i) +
      s
        .substring(i, i + k)
        .split("")
        .reverse()
        .join("") +
      s.slice(i + k);
  return s;
};
