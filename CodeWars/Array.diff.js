function arrayDiff(a, b) {
  const hash = {}
  const hash2 = {}
  const answ = []
  for (let el of a){
    hash[el] = 1
    if(!hash[el]){
        hash[el] = 0
    }
  }
  for(let el of b){
    hash2[el] = 1
    if(!hash2[el]){
        hash2[el] = 0
    }
  }
  
}