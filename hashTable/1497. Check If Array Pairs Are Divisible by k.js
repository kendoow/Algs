// если в массиве можно разбить все элменеты на пары которые без остатка делятся на k
// el + hash[el] == k //-> hash[el] = k - el
const canArrange = (arr, k) => {
  const hash = {};

  for (let el of arr) {
    hash[el] = Math.abs(k - el) 
  }

  for(let el of arr){
    if() return false
  }
  return true
};
