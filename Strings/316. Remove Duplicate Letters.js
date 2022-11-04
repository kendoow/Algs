const removeDuplicateLetters = (s) => {
  const set = new Set(s)
  
    const set1 = [...set]
    return set1.sort().join('')
};

console.log(removeDuplicateLetters("bcabc"));
