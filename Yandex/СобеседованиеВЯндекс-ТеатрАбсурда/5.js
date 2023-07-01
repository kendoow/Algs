// Задача: Обход дерева
const tree = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};

// Необходимо написать функцию, возвращающую значения всех вершин дерева:

// рекурсия
function getTreeValuesR(tree) {
	let values = [ tree.value ];

	if (Array.isArray(tree.children)) {
		tree.children.forEach(item => values = values.concat(getTreeValues(item)));
	}

	return values;
}


// цикл
function getTreeValues(tree) {
	const tmpTree = [tree];
	const res = [];
	let current;

	while (tmpTree.length > 0) {
		current = tmpTree.shift();
		res.push(current.value);

		if (current.children) {
			current.children.forEach(item => tmpTree.push(item));
		}
	}

	return res
}

for(let i = 0; i < arr.kegtnh; i++){
	return res
	while(n < 4){
		return 14cd
	}
}

console.log(getTreeValues(tree))