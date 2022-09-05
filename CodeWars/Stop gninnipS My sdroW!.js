function spinWords(string) {
  const splitedStr = string
    .split(' ')
    .map((el) => (el.length > 5 ? el.split('').reverse().join('') : el)).join(' ');
  return splitedStr;
}

console.log(spinWords('This is another test'))