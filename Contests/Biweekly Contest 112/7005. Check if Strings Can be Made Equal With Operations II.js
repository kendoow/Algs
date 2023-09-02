function canBeEqual(string1, string2) {
    const cacheEven = Object.create(null);
    const cacheOdd = Object.create(null);

    [...string1].forEach((char1, i) => {
        const char2 = string2[i];
        const isEven = i % 2 === 0;
        const cache = isEven ? cacheEven : cacheOdd;

        cache[char1] = (cache[char1] || 0) + 1;
        cache[char2] = (cache[char2] || 0) - 1;
    });

    const isEmptyObject = (obj) => Object.values(obj).filter(Boolean).length === 0;

    return isEmptyObject(cacheEven) && isEmptyObject(cacheOdd);
}