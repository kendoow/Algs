let classNames = [
  "header",
  "menu",
  "menu-item",
  "menu-item",
  "menu-item",
  "footer",
  "menu",
  "link",
  "link",
  "link",
  "link",
];

const answ = (arr) => {
  const hash = {};
  let answ = [];
  for (let el of arr) {
    hash[el] = (hash[el] | 0) + 1;
  }
  let arr1 = Object.entries(hash).sort((a, b) => b[1] - a[1]);
  for (el of arr1) {
    answ.push(el[0]);
  }
  return answ;
};

// function arr(array) {
//   let object = {};
//   for (let i = 0; i < array.length; i++) {
//     object[array[i]] = object[array[i]] + 1 || 1;
//   }
//   return Object.keys(object).sort((a, b) => object[b] - object[a]);
// }

console.log(answ(classNames));
