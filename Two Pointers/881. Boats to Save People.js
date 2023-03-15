const numRescueBoats = (people, limit) => {
  let answ = 0;
  let left = 0;
  let right = people.length - 1;
  people.sort((a, b) => a - b);

  while (left <= right) {
    answ++;
    if (people[left] + people[right] <= limit) {
      left++;
    }

    right--;
  }

  return answ;
};

console.log(numRescueBoats([3, 2, 2, 1], 3));
console.log(numRescueBoats([3, 2, 2, 1], 3));
