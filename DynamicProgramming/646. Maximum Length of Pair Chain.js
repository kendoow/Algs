/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
	pairs.sort((a, b) => a[1] - b[1]);

	let cur = -10000000000;
	let ans = 0;

	for (const [start, end] of pairs) {
		if (cur < start) {
			cur = end;
			ans++;
		}
	}

	return ans;
};
