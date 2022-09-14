const partitionString = (s) => {
  let set = new Set();
  let count = 1;

  for (const c of s) {
    console.log(c)
    if (!set.has(c)) set.add(c);
    else {
      set = new Set([c]);
      count++;
    }
  }

    return count;
  };

console.log(partitionString("ssssss"));
