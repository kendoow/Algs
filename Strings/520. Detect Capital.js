const isCapital = (sign) => {
  return sign.toUpperCase() === sign;
};

const detectCapitalUse = (word) => {
  let lower = 0;
  let upper = 0;

  for (let i = 0; i < word.length; i++) {
    if (isCapital(word[i])) {
        upper++
    } else {
        lower++
    }
   
  }
    console.log(upper, lower)

  if(upper === 0 || lower === 0){
    return true
  }
  if(isCapital(word[0]) && upper === 1){
    return true
  }
  return false
};


console.log(detectCapitalUse('ABOBA'))