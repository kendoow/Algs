const characterReplacement = (s, k) => {
    const hash = {}
    for (el of s){
        if(!hash[el]){
            hash[el] = 1
        } else {
            hash[el]++
        }
    }

    arrOfS = s.split('')
    let maxInHash = 0
    let maxInHashKey = ''
    let otherEl = 0

    for (key in hash){
        if(hash[key] > maxInHash){
            maxInHash = hash[key]
            maxInHashKey = key
            otherEl = arrOfS.length - maxInHash
        }
    }

    while(otherEl > 0 && k > 0){
        k--
        hash[maxInHashKey]++
    }
    
    return hash[maxInHashKey]

    
};


console.log(characterReplacement('abbbcaac', 2))