const validPalindrome = (s) => {
  let left = 0;
  let rigth = s.length - 1;
  let counter = 0;
  if (s[left] === s[rigth]) {
    left++;
    rigth++;
  } else if (s[left + 1] === s[rigth]) {
    counter++;
    left += 2;
  } else if (s[left] === s[rigth + 1]) {
    counter++;
    rigth += 2;
  }
  return counter >= 1 ? false : true;
};
