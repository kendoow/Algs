const numUniqueEmails = (emails) => {
 
  const hash = {};
  for (let el of emails) {
    let newel = deleteAllSigns(el);
    hash[newel] = (hash[newel] || 0) + 1;
  }
  return Object.keys(hash).length
};
// ни 1 из правил не работает после @
//
const deleteAllSigns = (email) => {
  const arr = [];

  let firstPlus = false;
  let isDomain = false;
  for (let el of email) {
    arr.push(el);
    if (el === "@") {
      isDomain = true;
    } else if (!isDomain && el === ".") {
      arr.pop();
    } else if (!isDomain && el === "+") {
      arr.pop();
      firstPlus = true;
    } else if (firstPlus && el === "+") {
      firstPlus = false;
    } else if (firstPlus && !isDomain) {
      arr.pop();
    }
  }
  return arr.join('');
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
