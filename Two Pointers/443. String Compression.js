const compress = (chars) => {
    const answ = []
    let counter = 1
    for(let i = 0; i < chars.length; i++){
        if(chars[i] === chars[i + 1]){
            counter++
        } else {
            counter > 1 ? answ.push(chars[i], String(counter)) : answ.push(chars[i])
            counter = 1
        }
    }
    return answ
};

console.log(compress(["a","a","b","b","c","c","c"]))