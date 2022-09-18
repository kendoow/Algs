// Имеется массив целых чисел. Необходимо написать функцию, которая будет принимать данный массив целых чисел. 
// Необходимо вернуть длину максимального непрерывного подмассива, в котором отсутствуют повторяющиеся элементы.

const answ = (nums) => {
    let maxCounter = 0
    let hash = {}
    let counter = 0
    for(el of nums){
        hash[el] = (hash[el] || 0) + 1;
        counter++
        console.log(hash, counter)
        if(hash[el] > 1){
            maxCounter = Math.max(counter, maxCounter)
            hash = {}
            counter = 0
        }
    }
    return maxCounter === 0 ? counter : maxCounter - 1
}

console.log(answ([1]))