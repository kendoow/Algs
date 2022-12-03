// Сортировка нечётных.

// Необходимо написать функцию, принимающую в аргументах массив и возвращающую новый массив,
// в котором отсортированы все нечетные числа по возрастанию, в то время как чётные остаются на своих местах.

const answer = (arr) => {
  let hash = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      // записываю key - элемент value - индекс
      hash[arr[i]] = i;
    }
  }
  
  const sortedOdd = Object.keys(hash).sort((a, b) => a - b);
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === hash[arr[i]]) {
      result.push(+sortedOdd[idx]);
      idx++;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(answer([7, 3, 4, 9, 5, 2, 17]));
