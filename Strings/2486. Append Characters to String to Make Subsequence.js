const appendCharacters = function (s, t) {
  let j = 0
  for (let i = 0; i < s.length; i++) {
    s[i] === t[j] && j++;
    if (t.length === j) return 0;
  }
  return t.length - j;
};
