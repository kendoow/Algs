var firstCompleteIndex = function (arr, mat) {
	const hash = {};
	// длина ответа
	let len = mat[0].length;
	for (let i = 0; i < arr.length; i++) {
		const el = arr[i];
		for (let j = 0; j < len; j++) {
			if (el === mat[i][j]) {
				hash[el] = j;
			}
		}
		countIndex(Object.values(hash), len) !== -1 ? countIndex(Object.values(hash), len) : 1
	}
};

const checkIfSubarray = () => {};

// функция подсчета индексов(одинаковых) j
// получаю макс кол-во по индексу и сраниваю с длинной массива
const countIndex = (arrOfIdx,len ) => {
	const hash = {}
	let counter = 0
	for(const el of arrOfIdx){
		counter++
		hash[el] = (hash[el] || 0) + 1
	}
	return len == Object.keys(values).sort((a,b) => a - b)[0] ? counter : -1
}
// по сути вывести длину мапы(индекс элемента на котром закрашивается row || col)
// Идея :
// 1 случай - j
// Проходимся по массиву, сохраняем элемент:индекс j
// когда индекс встречается длина поддмассива раз -> выводим индекс
// 2 случай - i
// Проверяем если каждое из чисел подмассива есть в Object.keys(hash) -> выводим индекс
const arr = [1, 3, 4, 2];
const mat = [
	[1, 4],
	[2, 3],
];

console.log(firstCompleteIndex(arr, mat));
