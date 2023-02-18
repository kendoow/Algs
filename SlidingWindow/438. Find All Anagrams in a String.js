const findAnagrams = function(s, p) {
    let str = s.slice(0,p.length)
    idx = 0
    const hash = {}
    let pSorted = p.split('').sort().join('')

    for(let i = p.length ; i < s.length + p.length; i++){
       let el = s[i]
     
       if(str.split('').sort().join('') == pSorted){
        hash[idx] = i - p.length
        idx++
       } 
      
       str = str.substring(1)
       str += el 
    }
   
    return Object.values(hash).sort((a,b) => a - b)
};


// console.log(findAnagrams("abacbabc","abc")) // -> [1,2,3,5]
// console.log(findAnagrams("abab","ab")) // -> [0,1,2]
