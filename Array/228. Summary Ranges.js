const summaryRanges = (nums) => {
	const answ = [];
	let start = null;
	let end = 0;
	let isSolo = true;
	for (let i = 0; i < nums.length; i++) {
		let curr = nums[i];
		let next = nums[i + 1];
		if(start == null){
			start = curr
		}
		
		if (curr + 1 === next) {
			end = next;
			isSolo = false;
		} else if (curr + 1 !== next) {
			isSolo ? answ.push(String(curr)) : answ.push(`${start}->${end}`);
			start = next;
			isSolo = true;
		}
	}

	return answ;
};

console.log(summaryRanges([0,1,2,4,5,7]));
