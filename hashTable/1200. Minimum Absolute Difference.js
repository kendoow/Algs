const minimumAbsDifference = (arr) => {
  arr.sort((a, b) => a - b);
  let minDifference = Infinity;
  const result = []
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] - arr[i - 1] < minDifference){
        minDifference = arr[i] - arr[i - 1]
    }
  }
  // после того как нашли минимальную разницу надо добавить в результрующий массив элмементы которые дают такую разницу(в виде пар)
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] - arr[i - 1] === minDifference){
        result.push([arr[i - 1], arr[i]]) 
    }
  }
  return result
};
