const restoreString = (s, indices) => {
    let answ = [];
    for (let i = 0; i < indices.length; ++i) {
        answ[indices[i]] = s.charAt(i);
    }
    return answ.join('');
  };

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
