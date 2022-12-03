// Дан список интов, повторяющихся элементов в списке нет.
//  Нужно преобразовать это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны. Примеры:
// [1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"
// [1,4,3,2] => "1-4"
// [1,4] => "1,4"

function range(arr) {
  arr.sort((a, b) => a - b);
  let str = arr[0];
  let iteration;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      iteration = true;
    } else {
      if (!iteration) {
        str += "," + arr[i];
      } else {
        str += "-" + arr[i];
        if (arr[i + 1] + 1 === arr[i + 2]) {
          str += "," + arr[i + 1];
        }
        iteration = false;
      }
    }
  }
  return str;
}

console.log(range([1, 4, 5, 2, 3, 9, 8, 11, 0]));
