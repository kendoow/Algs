const argsReminder = (arr) => {
  const ans = [];
  return function(...args) {
    const result = {};
    for (let i = 0; i < args.length; i++) {
      result[`arg${i + 1}`] = args[i];
    }
    ans.push(result);
    return ans;
  };

};
let counter1 = argsReminder();
console.log(counter1([1]));
console.log(counter1([2]));
console.log(counter1([3]));
// arr[{name,material,price}]

{name:{aa :1}}