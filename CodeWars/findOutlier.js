function findOutlier(integers) {
  let chet = 0;
  let nechet = 0;
  let elchet = 0;
  let elnech = 0;
  for (el of integers) {
    if (el % 2 !== 0) {
      nechet++;
      elnech = el;
    } else if (el % 2 === 0 || el === 0) {
      chet++;
      elchet = el;
    }
  }
  if (nechet <= 1) {
    return elnech;
  }
  if (chet <= 1) {
    return elchet;
  }
}


