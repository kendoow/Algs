// Дана строка (возможно, пустая), состоящая из букв A-Z: AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
// Нужно написать функцию RLE, которая на выходе даст строку вида: A4B3C2XYZD4E3F3A6B28
// И сгенерирует ошибку, если на вход пришла невалидная строка.
// Пояснения: Если символ встречается 1 раз, он остается без изменений; Если символ повторяется более 1 раза, к нему добавляется количество повторений.


const StrParser = (str) => { // кривое решение
    const hash = {}
    const output = []
    for(el of str){
        hash[el] = (hash[el] | 0) + 1
    }
    for(el in hash){
        output.push(el) 
        output.push(hash[el])
    }
    return output.join('')
}


const StrParser2 = (str) => { 
    const output = []
    let counter = 1
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i + 1]){
            counter++
        } else 
        {
            output.push(str[i], counter)
            counter = 1
        }
    }
    return output.join('')
}
console.log(StrParser2('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'))