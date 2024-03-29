/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let j = 0
  let res = 0;
  for (let num of s) {
    if (num >= g[j]) res++, j++;
  }
  return res;
};