const data = [1, 4, 5, 2, 3, 9, 8, 11, 0];

const ziping = (arr) => {
  let rs = [];
  let start = null
  let end = null

  arr.sort((a, b) => a - b);
  
  for (let i = 0; i < arr.length; ++i) {
    if (start === null) start = arr[i];

    if (arr[i] + 1 === arr[i + 1]) end = arr[i + 1];
    else {
      rs.push(start !== null && end ? `${start}-${end}` : start);
      start = end = null;
    }
  }

  return rs.join(' => ')
};

console.log(ziping(data));