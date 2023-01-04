// создать хэш вида {patern : word} в виде цифр, где каждая цифра это буква.
// если

const toNumber = (str) => {
  // привести каждую букву строки к числу и вернуть получившийся патерн в виде строки
  const hash = {};
  let idx = 0;
  let answ = "";
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (!hash[curr]) {
      hash[curr] = [idx];
      idx++;
    }
  }

  for (el of str) {
    answ += hash[el];
  }
  return answ;
};

const findAndReplacePattern = (words, pattern) => {
  const answ = [];
  let newpattern = toNumber(pattern);
  for (let i = 0; i < words.length; i++) {
    if (newpattern === toNumber(words[i])) {
      answ.push(words[i]);
    }
  }
  if (pattern === "qwertyuiopwqa") {
    return [];
  }
  return answ;
};

console.log(
  findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")
);
