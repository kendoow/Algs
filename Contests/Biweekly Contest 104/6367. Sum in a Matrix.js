const matrixSum = (nums) => {
	let answ = 0;
	let highest = [];
	while (nums[0].length) {
		for (let el of nums) {
			el.sort((a, b) => a - b);

			let highel = el.pop();
			highest.push(highel);
		}
		answ += highest.sort((a, b) => b - a)[0];
		highest = [];
	}

	return answ;
};
nums = [
	[7, 2, 1],
	[6, 4, 2],
	[6, 5, 3],
	[3, 2, 1],
];

console.log(matrixSum(nums));
