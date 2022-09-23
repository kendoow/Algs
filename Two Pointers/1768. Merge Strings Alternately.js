const mergeAlternately = (word1, word2) => {
  let arr1 = word1.split("");
  let arr2 = word2.split("");
  let ans = [];
  console.log(arr1, arr2)
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
   arr1[1]
    ans.push(arr1[i]);
    ans.push(arr2[i]);
  }
  console.log(ans)
  return ans.join("");
};

console.log(mergeAlternately("abc", "pqr"));
