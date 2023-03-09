const minEatingSpeed = (piles, h) => {
  let left = 1;
  let rigth = Math.max(...piles);
  let result = rigth;
  while (left <= rigth) {
    let mid = Math.round((left + rigth) / 2);
    let hours = 0;
    for (let el of piles) {
      hours += Math.ceil(el / mid);
    }
    if (hours <= h) {
      result = Math.min(res, mid);
      rigth = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
};
