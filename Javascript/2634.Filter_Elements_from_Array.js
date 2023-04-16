var filter = function (arr, fn) {
	let newArray = [];
	let i = 0;
	for (const x of arr) {
		if (fn(x, i)) {
			newArray.push(x);
		}
		i++;
		a;
	}
	return newArray;
};
