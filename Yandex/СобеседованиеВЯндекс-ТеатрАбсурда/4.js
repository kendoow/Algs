// Дан массив из нулей и единиц. Нужно определить, какой максимальный по длине подинтервал единиц можно получить, удалив ровно один элемент массива.

// [1, 1, 0]

function flattenAndSum(arr) {
    const flattened = arr.flat(Infinity); // Разглаживаем массив до одномерного
    let sum = 0;
  
    for (const item of flattened) {
      if (typeof item === 'string') {
        const num = Number.parseInt(item);
        if (!isNaN(num)) {
          sum += num;
        }
      } else if (typeof item === 'number') {
        sum += item;
      }
    }
  
    return sum;
  }
  
  const input = ['x', '1x', ['2x', ['56x'], ['123']]];
  const result = flattenAndSum(input);
  console.log(result);