function flatten(list) {
  const arr = [list];
  const result = [];
  while (arr.length) {
    const el = arr.pop();
    console.log(el)
    if (Array.isArray(el)) {
      for (let i = el.length - 1; i >= 0; i--) {
        arr.push(el[i]);
      }
    } else {
      result.push(el);
    }
  }

  return result;
}

console.log(flatten([0, [1, [2, 3]], 4]))
