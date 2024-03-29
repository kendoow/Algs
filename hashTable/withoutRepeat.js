// Имеется строка s на входе. Так вот, разделение этой строки на 2 непустые подстроки p и q называется хорошим тогда и только тогда, когда конкатенация этих строк дает строку s и количество различных элементов в подстроке p равно количеству различных в q.
// На выходе нужно вернуть количество "хороших" разделений строки s.

const func1 = (nums) => {
    const hash = {}
    let ans = []
    for (const el of nums){
        hash[el] = (hash[el] || 0) + 1
    }
    for (key in hash){
        if(hash[key] === 1){
            ans.push(key)
        }
    }
    console.log(hash)
    return ans
}

console.log(func1([1,2,1,10,4,5,2,10]))