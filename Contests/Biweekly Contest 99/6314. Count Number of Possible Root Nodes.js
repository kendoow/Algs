/**
 * @param {number[][]} edges
 * @param {number[][]} guesses
 * @param {number} k
 * @return {number}
 */
function rootCount(edges, guesses, k) {
  let adj = [];
  let S = new Set();
  let res = 0;
  let K = k;
  let sum = [];
  let ans = new Set();

  function dfs(v, p = -1) {
    for (let to of adj[v]) {
      if (to === p) continue;
      if (S.has(`${v},${to}`)) sum[v]++;
      dfs(to, v);
      sum[v] += sum[to];
    }
  }

  function go(v, p = -1) {
    if (res >= K) {
      ans.add(v);
    }

    for (let to of adj[v]) {
      if (to === p) {
        continue;
      }

      if (S.has(`${v},${to}`)) res--;
      if (S.has(`${to},${v}`)) res++;

      go(to, v);

      if (S.has(`${v},${to}`)) res++;
      if (S.has(`${to},${v}`)) res--;
    }
  }

  K = k;
  let n = edges.length + 1;
  sum = new Array(n).fill(0);
  adj = new Array(n).fill(null).map(() => []);
  for (let e of edges) {
    adj[e[0]].push(e[1]);
    adj[e[1]].push(e[0]);
  }
  for (let v of guesses) {
    S.add(`${v[0]},${v[1]}`);
  }
  dfs(0);
  res = sum[0];
  go(0);
  return ans.size;
}
