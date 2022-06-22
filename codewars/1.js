function makeCounter() {
    let count = 0;
  
    return function() {
      return ++count; // есть доступ к внешней переменной "count"
    };
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2