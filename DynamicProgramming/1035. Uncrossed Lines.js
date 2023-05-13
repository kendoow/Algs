var maxUncrossedLines = function (nums1, nums2) {
	const n = nums1.length,
		m = nums2.length;
	const dp = [...new Array(n + 1)].map(() => new Array(m + 1).fill(0));

	for (let i = n - 1; i >= 0; i--) {
		for (let j = m - 1; j >= 0; j--) {
			if (nums1[i] === nums2[j]) {
				dp[i][j] = 1 + dp[i + 1][j + 1];
			} else {
				dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
			}
		}
	}
	return dp[0][0];
};
