const singleNumber = (nums) => {
  const hash = {};
  for (el of nums) {
    hash[el] = (hash[el] || 0) + 1;
  }
  for(key in hash){
    if(hash[key] === 1){
        return key
    }
  }
};
