const reverseWords = (s) => {
    answ = []
    const reversed = s.trim().split(' ')
    for(let el of reversed){
        if(el === ''){
            continue
        } else if (el !== ''){
            answ.push(el)
        }
    }
    return answ.reverse().join(' ')
};

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("a good   example"))
console.log(reverseWords("  hello world  "))