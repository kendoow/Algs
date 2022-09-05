// A - array
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(A) {
  const hash = {};
  for (el of A) {
    if (!hash[el]) {
      hash[el] = 1;
    } else {
      hash[el]++;
    }
  }
  for (el in hash) {
    if (hash[el] % 2 === 1) {
      return +el;
    }
  }
}

console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]));
