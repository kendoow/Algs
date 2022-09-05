// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false; 
//     return num > 1;
// }

const countOdds = (low, high) => {
  let counter = 0;
  for (let i = low; i <= high; i++) {
    if(i % 2 === 1){
       counter++
    }
  }
  return counter
};

console.log(countOdds(8,10))