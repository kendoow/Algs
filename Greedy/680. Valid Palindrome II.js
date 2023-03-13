const validPalindrome = (s) => {
  let left = 0;
  let rigth = s.length - 1;
  while (left < rigth) {
    if (s[left] !== s[rigth]) {
      return (
        isPalindrome(s, left + 1, rigth) || isPalindrome(s, left, rigth - 1)
      );
    }
    left++;
    rigth--;
  }
  return true;
};

const isPalindrome = (s, left, rigth) => {
  while (left < rigth) {
    if (s[left] !== s[rigth]) {
      return false;
    }
    left++;
    rigth--;
  }
  return true;
};
