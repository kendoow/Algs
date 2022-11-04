const backspaceCompare = (s, t) => {
    let str1 = []
    let str2 = []
    for(el of s){
        str1.push(el) 
        if(el === '#'){
            str1.pop()
            str1.pop()
        }
    }
    for(el of t){
        str2.push(el) 
        if(el === '#'){
            str2.pop()
            str2.pop()
        }
    }
    return str1.join('') === str2.join('')
};

console.log(backspaceCompare("ab#c", "ad#c"))