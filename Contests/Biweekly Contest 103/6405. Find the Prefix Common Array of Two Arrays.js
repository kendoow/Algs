// надо найти количество пересекающихся цифр в 1 и 2 массиве и запушить его в 3
// каждый раз как нашел включение увеличиваю счетчик
const findThePrefixCommonArray = (A, B) => {
    const result = []
	const slicedArrayA = []
	const slicedArrayB = []
	let counter = 0

	for(let i = 0; i < A.length; i++){
		slicedArrayA.push(A[i])
		slicedArrayB.push(B[i])

		for(let j = 0; j < slicedArrayA.length; j++){
			if(slicedArrayB.includes(slicedArrayA[j])){
				counter++
			}
		}
		result.push(counter)
		counter = 0
	}

	return result
};
A = [2,3,1], B = [3,1,2]
console.log(findThePrefixCommonArray(A,B))