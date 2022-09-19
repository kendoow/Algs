const reverseVowels = (s) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    const result = [...s];
    let start = 0;
    let end = s.length - 1;
    while (start < end){
        const leftChar = s[start].toLowerCase();
        const rightChar = s[end].toLowerCase();
        if(vowels.has(leftChar) && vowels.has(rightChar)){
            [result[start], result[end]] = [result[end], result[start]]
            start++
            end--
            continue
        }
        if (!vowels.has(leftChar)) {
            start ++;
        }
        
        if (!vowels.has(rightChar)) {
            end--;
        }
    }
    return result.join('')
};