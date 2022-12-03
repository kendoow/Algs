
// Дана строка (возможно, пустая), состоящая из букв A-Z: AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
// Нужно написать функцию RLE, которая на выходе даст строку вида: A4B3C2XYZD4E3F3A6B28
// И сгенерирует ошибку, если на вход пришла невалидная строка.
// Пояснения: Если символ встречается 1 раз, он остается без изменений; Если символ повторяется более 1 раза, к нему добавляется количество повторений.

const answer = (str) => {
    let count = 1 
    const arr = []
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            count++
        } else if(count !== 1 && str[i] !== str[i+1]){
            arr.push(str[i], count)
            count = 1
        } else {
            arr.push(str[i])
        }

    }
    return arr.join('')
}

console.log(answer('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'))

if('A4B3C2XYZD4E3F3A6B28' === 'A4B3C2XYZD4E3F3A6B28') {
    console.log(1)
}
