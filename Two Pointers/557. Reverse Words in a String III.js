const reverseWords = (s) => {
    let reversed = s.split(' ')
    
    for (let i = 0; i <reversed.length;i++ ) {
        
        reversed[i] = reversed[i].split('').reverse().join('')
    }
    
    return reversed.join(' ')
};

console.log(reverseWords('qweq qq22'))