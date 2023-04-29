


const countOperationsToEmptyArray = function (nums) {
	let total = 0;

	while (nums.length !== 0) {
		console.log(nums);
		let first = nums.shift();
		// если самый маленбкий элемент -> удаляем
		if (first < Math.min(...nums)) {
			total++;
			// если не самый маленбкий элемент -> в конец
		} else {
			nums.push(first);
			total++;
		}
	}

	return total;
};

nums = [1, 2, 3];

console.log(countOperationsToEmptyArray(nums));
