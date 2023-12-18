// const answer = (data) => {
//     const arr = data.toString().trim().split('\n');
//     const [annCubes, borisCubes] = arr[0].split(' ').map(Number);
//   const Anya = arr.slice(arr[0], annCubes);
//   const Borya = arr.slice(borisCubes);

//   const onlyAnnColors = difference(Anya, Borya);
//   const onlyBorisColors = difference(Borya, Anya);

//   let rezult = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Borya.includes(Anya[i])) {
//       rezult.push(Anya[i]);
//     }
//   }
//   let otvet = [
//     rezult.length,
//     rezult.join(' '),
//     onlyAnnColors.length,
//     onlyAnnColors.join(' '),
//     onlyBorisColors.length,
//     onlyBorisColors.join(' '),
//   ].join('\n');
//   return otvet;
// };

// const difference = (set1, set2) => {
//   return [...set1].filter((a) => !set2.includes(a)).sort((a, b) => a - b);
// };
console.log(Math.random())

// const fs = require('fs');
// let fileContent = fs.readFileSync('input.txt', 'utf8');

// const result = answer(fileContent);

// fs.writeFileSync('output.txt', result);
// console.log(answer(4, 3, [0, 1, 10, 9, 1, 3, 0]));
