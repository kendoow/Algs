// const answ = (data) => {
//   const str = data.toString().trim().split("\n")[1].split("");
//   const hash = {};
//   let arrHalf = [];
//   for (el of str) {
//     hash[el] = (hash[el] | 0) + 1;
//   }
//   let center = "";
//   let maxCenter = 0; // количетсво букв
//   let maxCurrent = 0;

//   const hashValues = Object.values(hash);
//   const hashKeys = Object.keys(hash);
//   // найти индекс максимальной нечетной буквы чтобы бахнуть ее в центр
//   for (let i = 0; i < hashValues.length; i++) {
//     if (hashValues[i] % 2 === 1) {
//       maxCurrent = hashValues[i];
//       if (maxCenter !== maxCurrent) {
//         maxCenter = hashValues.indexOf(Math.max(maxCenter, maxCurrent));
//       }
//       center = `${hashKeys[maxCenter].repeat(maxCurrent)}`;
//     }
//   }
//   // половина массива из четных цифр
//   for (let i = 0; i < str.length; i += 2) {
//     if (!center.includes(str[i]) && hash[str[i]] % 2 === 0) {
//       arrHalf.push(str[i]);
//     }
//   }
//   console.log(center);
//   const answ = arrHalf
//     .join("")
//     .concat(center)
//     .concat(arrHalf.reverse().join(""));
//   return answ;
// };

// const fs = require("fs");
// const content = fs.readFileSync("input.txt", "utf8");
// const result = answ(content);
// fs.writeFileSync("output.txt", result + "");
// console.log(answ("QAZQAZ"));

const answ = (str) => {

    const hash = {};
    let arrHalf = [];
    for (el of str) {
      hash[el] = (hash[el] | 0) + 1;
    }
    let center = "";
    let maxCenter = 0; // количетсво букв
    let maxCurrent = 0;

    const hashValues = Object.values(hash);
    const hashKeys = Object.keys(hash);
    // найти индекс максимальной нечетной буквы чтобы бахнуть ее в центр
    for (let i = 0; i < hashValues.length; i++) {
      if (hashValues[i] % 2 === 1) {
        maxCurrent = hashValues[i];
        if(maxCenter !== maxCurrent && i < hashValues.length / 2){
          maxCenter = hashValues.indexOf(Math.max(maxCenter, maxCurrent));
        }
        center = `${hashKeys[maxCenter].repeat(maxCurrent)}`;
      }
    }
    // половина массива из четных цифр
    for (let i = 0; i < str.length; i += 2) {
      if (!center.includes(str[i]) && hash[str[i]] % 2 === 0) {
        arrHalf.push(str[i]);
      }
    }
    console.log(center);
    const answ = arrHalf
      .join("")
      .concat(center)
      .concat(arrHalf.reverse().join(""));
    return answ;
  };

  console.log(answ("QAZQAZ"));
