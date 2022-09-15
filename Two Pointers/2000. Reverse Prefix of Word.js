const reversePrefix = (word, ch) => {
    const idx = word.indexOf(ch) + 1;
    return word.slice(0, idx).split(``).reverse().join(``) + word.slice(idx);
}

console.log(reversePrefix("abcdefd", "d"))