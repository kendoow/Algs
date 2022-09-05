function duplicateCount(text) {
  const hash = {}
  let counter = 0
  for (word of text.toLowerCase()){
    if(!hash[word]){
        hash[word] = 1
    } else {
        hash[word]++
    }
  }
  for (i in hash){
    if (hash[i] > 1){
        counter++
    }
  }
  return counter
}
