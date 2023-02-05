const countSubstrings = (s) => {
  let answ = 0;

  for (let i = 0; i < s.length; i++) {
    let leftPointer = i;
    let rigthPointer = i;
    while (
      leftPointer >= 0 &&
      r < s.length &&
      s[leftPointer] === s[rigthPointer]
    ) {
      answ++;
      leftPointer--;
      rigthPointer++;
    }
    leftPointer = i;
    rigthPointer = i + 1;
    while (
      leftPointer >= 0 &&
      r < s.length &&
      s[leftPointer] === s[rigthPointer]
    ) {
      answ++;
      leftPointer--;
      rigthPointer++;
    }
  }
  return answ
};
