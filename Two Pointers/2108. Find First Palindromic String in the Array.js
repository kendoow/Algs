const firstPalindrome = (words) => {
    for(let i = 0; i < words.length; i++){
        console.log(words[i])
        if (words[i] === words[i].split('').reverse().join('')) {
            return words[i]
        } 
    }
    return ""
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))