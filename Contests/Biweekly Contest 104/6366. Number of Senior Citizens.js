const countSeniors = (details) => {
    let counter = 0
	for(const el of details){
		let newEl = +`${el.slice(11, -2)}`
		newEl > 60 ? counter++ : null
	}
	return counter
};

details = ["7868190130M7522","5303914400F9211","9273338290F4010"]

console.log(countSeniors(details))