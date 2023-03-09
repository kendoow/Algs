const replaceElements = (arr) => {
  const answ = [];
 
  for (let i = 0; i < arr.length - 1; i++) {
    answ.push(Math.max(...arr.slice(i + 1, arr.length)))
  }
  answ.push(-1);
  return answ;
};


console.log(replaceElements( [17,18,5,4,6,1]))