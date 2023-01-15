const maxProduct =  (words)  =>{
  let valid = (a, b) => {
    for (let char of a) {
      if (b.includes(char)) return false;
    }
    return true;
  };

  let maxLen = 0;

  for (let i = 0; i < words.length; i++) {
    for (let nxtWord of words.slice(i)) {
      let product = words[i].length * nxtWord.length;

      if (valid(words[i], nxtWord) && product > maxLen) {
        maxLen = product;
      }
    }
  }
  return maxLen;
};

words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];

console.log(maxProduct(words));
