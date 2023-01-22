const maxDistToClosest = (seats) => {
  let maxDist = 0;
  let currDist = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      currDist++;
    } else {
      maxDist = Math.max(maxDist, Math.ceil(currDist / 2));
      currDist = 0;
    }
  }
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      maxDist = Math.max(maxDist, i);
      break;
    }
  }
  let lcurrDist = 0;
  for (let i = seats.length - 1; i >= 0; i--) {
    if (seats[i] === 1) {
      maxDist = Math.max(maxDist, lcurrDist);
      break;
    } else {
      lcurrDist++;
    }
  }
  return maxDist;
};

// найти макс растояние между челиками
// по сути это макс дистанция (от 1 до следуюей 1 ) / 2

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])); // -> 2
console.log(maxDistToClosest([1, 0, 0, 0]));
console.log(maxDistToClosest([0, 1]));
