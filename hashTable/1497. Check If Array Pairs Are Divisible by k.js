// если в массиве можно разбить все элменеты на пары которые без остатка делятся на k
// el + hash[el] == k //-> hash[el] = k - el
const canArrange = (arr, k) => {
    const hash = {};
  
    for (let el of arr) {
      if (el < k) {
        hash[el] = k + Math.abs(k - el)
      } else if(el > k){
        hash[el] = Math.abs(k - el);
      }else if(el === k){
          hash[el] = k * 2;
      }
    }
      console.log(hash)
    for(let el of arr){
      if(!arr.includes(hash[el]) ) return false
    }
    return true
  };
  