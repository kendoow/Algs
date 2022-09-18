const isSymmetric = (root) => {
  const hash = {}
  let sliced = root.slice(1)
  for (el of sliced) {
    hash[el] = (hash[el] || 0) + 1;
  }
  console.log(hash)
  for (key in hash){
    if(hash[key] % 2 !== 0){
        return false
    }
  }
  console.log(hash)
  return true
};

console.log(isSymmetric([1,2,2,3,4,4,3]));