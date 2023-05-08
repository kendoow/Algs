var longestObstacleCourseAtEachPosition = function (obstacles) {
	let dp = [],
		res = [];
	for (let i = 0; i < obstacles.length; i++) {
		let j = upperBound(dp, obstacles[i]);
		if (j == dp.length) {
			dp.push(obstacles[i]);
		} else {
			dp[j] = obstacles[i];
		}
		res.push(j + 1);
	}
	return res;
};
function upperBound(arr, target) {
	let left = 0,
		right = arr.length - 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] <= target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return left;
}
