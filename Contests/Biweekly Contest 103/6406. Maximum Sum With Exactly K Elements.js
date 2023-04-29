const maximizeSum = function (nums, k) {
	nums.sort((a, b) => a - b);
	let i = k;
	let score = 0;
	while (i !== 0) {
		let lastel = nums.pop();
		score += lastel;
		nums.push(lastel + 1);

		i--;
		console.log(lastel, score);
	}
	return score;
};

console.log(maximizeSum([1, 2, 3, 4, 5], 3));
// console.log(maximizeSum([5, 5, 5], 2));
