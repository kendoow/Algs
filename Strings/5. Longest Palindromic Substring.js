const longestPalindrome = (s) => {
  let left = 0;
  let rigth = 0;
  let answ = 0;
  const isPalindrome = (leftPos, rigthPos) => {
    while (
      leftPos >= 0 &&
      rigthPos < s.length &&
      s[leftPos] === s[rigthPos]
    ) {
      leftPos--;
      rigthPos++;
    }
    if (rigthPos - leftPos > answ) {
      left = leftPos + 1;
      rigth = rigthPos - 1;
      answ = rigth - left + 1;
    }
  };
  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i + 1);

    isPalindrome(i, i);

    if ((s.length - i) * 2 < answ) {
      break;
    }
  }
  return s.slice(left, rigth + 1);
};
