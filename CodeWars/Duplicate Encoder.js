function duplicateEncode(word) {
  const letterCount = {};
  const letters = word.toLowerCase().split("");

  letters.forEach(function (letter) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });

  return letters
    .map(function (letter) {
      return letterCount[letter] === 1 ? "(" : ")";
    })
    .join("");
}
