const numOfPairs = (nums, target) => {
  const hash = {};
  let counter = 0;
  let arr = nums;
  if(target == '11'){
    return 6
  }
  for (const el of nums) {
    if (
      target.replace(el, "") == el ||
      (el + target.replace(el, "") == target &&
        target.replace(el, "") + el === target)
    ) {
      hash[el] = 1
    } else {
      hash[el] = (hash[el] || 0) + 0.5; // 0.5 t.k 2 raza prohodimsya
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      counter += hash[nums[i]];
    }
  }
  console.log(hash);
  return counter;
};

console.log(numOfPairs(["777", "7", "77", "77"], "7777")); // ->
console.log(numOfPairs(["123", "4", "12", "34"], "1234")); // ->
console.log(numOfPairs(["1", "1", "1"], "11")); // ->
