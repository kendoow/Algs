// Дан список интов, повторяющихся элементов в списке нет. Нужно преобразовать это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны. Примеры:
// [1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"
// [1,4,3,2] => "1-4"
// [1,4] => "1,4"

const Intervals = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    let end = i;
    while (sortedNums[end + 1] === sortedNums[end] + 1) {
      end += 1;
    }
    if (end > i) {
      output.push(`${sortedNums[i]} - ${sortedNums[end]}`);
    } else {
      output.push(`${sortedNums[i]}`);
    }
    i = end;
  }
  return output.join(",");
};

console.log(Intervals([1, 4, 5, 2, 3, 9, 8, 11, 0]));
