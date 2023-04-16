const successfulPairs = (spells, potions, success) => {
	potions.sort((a, b) => a - b);
	const answ = [];
	for (let i = 0; i < spells.length; i++) {
		answ.push(upgratedBinSearch(spells[i], potions, success));
		
	}
	return answ;
};

// вернуть число подходящих решений.
//
const upgratedBinSearch = (spell, potions, product) => {
	let left = 0
	let	right = potions.length - 1
	let	mid;
	while (left <= right) {
		mid = parseInt((left + right) / 2);
		if (spell * potions[mid] < product) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return potions.length - left;
};

console.log(successfulPairs([3,1,2], [8,5,8], 16));
