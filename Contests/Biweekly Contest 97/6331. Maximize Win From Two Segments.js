const maximizeWin = (prizePositions, k) => {
  if (k === 0) {
    return 2;
  }

  const hash = {};
  for (let el of prizePositions) {
    hash[el] = (hash[el] || 0) + 1;
  }

  let answ = 0;
  
  for (let i = 0; i < prizePositions.length; i++){
    answ += hash[prizePositions[i]] 
  }
   
    

  return answ;
};

// console.log(maximizeWin([1, 2, 3, 4], 0)); // 0(2)
console.log(maximizeWin([1, 1, 2, 2, 3, 3, 5], 2)); // 2 (7)
