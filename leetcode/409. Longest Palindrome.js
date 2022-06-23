// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

const longestPalindrome = (s) => {
    const hash = {};
    let result = 0;
    for (const char of s) {
      hash[char] = (hash[char] || 0) + 1;
      if (hash[char] % 2 == 0) {
        result += 2;
      }
      
    }
    if(s.length > result){
        result += 1
    }
      return result 
  };
console.log(longestPalindrome("abaaae"));
