// const countMaxElFromRest = (nums) => {
//   // функция поиска максимума для подмассива
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//   }
//   return max;
// };

// const dailyTemperatures = (temperatures) => {
//   const answer = []; // result array
//   let stack = [];
//   let idx = 0; // idx for current element
//   for (let i = idx; i < temperatures.length; i++) {
//     if (temperatures[idx] > temperatures[i]) {
//       // esli element bolshe chem next el
//       console.log(stack)
//       console.log("curr > next", idx);
//       stack.push(temperatures[i]);
//     } else if(temperatures[idx] === temperatures[i]) {
//         stack.push(temperatures[i]);
//         console.log("curr === next", idx);
//     } else if (temperatures[idx] < temperatures[i]) {
//       // esli element men'she chem next el
//       console.log(stack);
//       console.log("curr < next", idx);

//       answer.push(stack.length);

//       stack = [];
//       i = idx;
//       idx++;
//     }
//     if (temperatures[i] == countMaxElFromRest(temperatures.slice(i))) {
//       console.log("nulik");
//         stack = []
//       answer.push(0);
//       idx++;
//     }
//   }
//   return answer;
// };


// // console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70])); // -> [8,1,5,4, !!!3,2,1,1,0,0]

// console.log(dailyTemperatures([34,80,80,34,34,80,80,80,80,34])) // -> [1,0,0,2,1,0,0,0,0,0]

const dailyTemperatures = (tes) => {
  const res = Array(tes.length).fill(0); // результирующий массив
  let stack = []; // в стеке хранятся индексы
  for (let i = 0; i < tes.length; i++) {
    console.log(stack, res)
    while (stack.length > 0 && tes[i] > tes[stack[stack.length - 1]]) {
     
      const idx = stack.pop(); // вытаскиваем верхний элмент стека(индекс) если  последовательность возрастает
      res[idx] = i - idx; // в массив по индексу записываем индекс - верх стека
    }
    stack.push(i); // пушу в стек индекс нового элемента
  }
  return res;
};


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // -> [1,1,4,2,1,1,0,0] vivelo
// console.log(dailyTemperatures([30, 40, 50, 60])); // -> [1,1,1,0]