/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

const isCorrect = (arr, m) => {
	return new Set(arr).size >= m;
};
// поймал TL - решение не проходит
// надо двигаиься и добавлять в массив подходящие по m и k ответы потом просто пробежать по массивам и найти макс сумму
var maxSum = function (nums, m, k) {
	let sum = 0;
	let startIdx = 0;
	let endIdx = k;
	let temp = [];
	while (endIdx <= nums.length) {
		for (let i = startIdx; i < endIdx; i++) {
			temp.push(nums[i]);
		}

		if (isCorrect(temp, m)) {
			sum = Math.max(
				sum,
				temp.reduce((a, b) => a + b, 0)
			);
		}
		temp = [];
		startIdx++;
		endIdx++;
	}
	return sum;
};

// nums = [5,9,9,2,4,5,4], m = 1, k = 3
// nums = [2,6,7,3,1,7], m = 3, k = 4
// nums = [1] ,m = 1 ,k = 1
(nums = [1, 1, 2, 2]), (m = 1), (k = 3);
console.log(maxSum(nums, m, k));
