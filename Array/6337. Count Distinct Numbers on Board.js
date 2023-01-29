var distinctIntegers = function (n) {
  let numidx = n;
  const arr = [n];
 
    for (let i = 0; i < n; i++) {
      if (numidx % i == 1) {
        if (!arr.includes(i)) {
          arr.push(i);
        }
      }
    }
    
  return arr.length;
};

console.log(distinctIntegers(5));
