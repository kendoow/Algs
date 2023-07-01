/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
	let sum = new Array(k).fill(0);
	let ans = Infinity;
	const dfs = (n) => {
		if (n === cookies.length) {
			const max = Math.max(...sum);
			ans = Math.min(ans, max);
			return;
		}
		for (let i = 0; i < k; i++) {
			sum[i] += cookies[n];
			dfs(n + 1);
			sum[i] -= cookies[n];
		}
	};

	dfs(0);
	return ans;
};
