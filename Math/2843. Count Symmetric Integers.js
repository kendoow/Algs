/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
	let counter = 0;
	for (let i = low; i <= high; i++) {
		const str = i.toString();
		let leftSum = 0;
		let rightsum = 0;
		let n = str.length; // variable to store the length of the string
		if (n % 2 == 0) {
			for (let i = 0; i < str.length; i++) {
				if (i < str.length / 2) {
					leftSum += +str[i];
				} else {
					rightsum += +str[i];
				}
				console.log(str, leftSum, rightsum, counter);
			}
		}

		if (leftSum === rightsum && leftSum !== 0) {
			counter++;
		}
	}
	return counter;
};
