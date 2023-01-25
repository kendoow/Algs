const minSteps = function (s, t) {
  const mapForS = {};
  const mapForT = {};

  sSort = s.split('').sort().join('')
  tSort = t.split('').sort().join('')

  for (let el of sSort) {
    mapForS[el] = (mapForS[el] || 0) + 1;
  }
  for (let el of tSort) {
    mapForT[el] = (mapForT[el] || 0) + 1;
  }

  let answer = 0
  let set = new Set(s)
 
  console.log(mapForT, mapForS)
  for (let el of set) {
  
    if( mapForT[el]) {
        mapForS[el] = mapForS[el] - mapForT[el];
    }
    if( mapForS[el] > 0 ) {
        answer += mapForS[el];
    }
  
  }
  return answer
};
console.log(minSteps("anagram","mangaar"))
console.log(minSteps("leetcode","practice")) // не работает
console.log(minSteps("bab","aba"))
