// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

const pivotIndex = (nums) => {
  const sum1 = nums.reduce((partialSum, a) => partialSum + a, 0); // sum of array
  let leftSide = 0;
    
  for (let i = 0; i < nums.length; i++) {
    let rightSide = sum1 - (nums[i] + leftSide);
    console.log(rightSide)
    if (leftSide == rightSide) {
      return i;
    } else {
      leftSide += nums[i];
    }
  }
  
  return -1;
};


console.log(pivotIndex([1,7,3,6,5,6]))