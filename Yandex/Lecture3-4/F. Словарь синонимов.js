const answer = (data) => {
  const list = data.toString().trim().split("\n");
  const last = +list[list.length - 1];
  const hash = {};
  for (let i = 0; i < list.length - 1; i += 2) {
    hash[list[i]] = list[i + 1];
  }
  for (el in hash) {
    if (hash[el] === last) {
      return el;
    } else if (el === last) {
      return hash[el];
    }
  }
};


console.log(
  answer(["Hello", "Hi", " Bye", "Goodbye", "List", "Array", "Goodbye"])
);
