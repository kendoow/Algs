function debounce(fn, ms) {
  let timeout;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };

    clearTimeout(timeout);

    timeout = setTimeout(fnCall, ms);
  };
}

function doSomething(arg) {
  console.log(arg);
}

const debouncedDoSomething = debounce(doSomething, 5000);

debouncedDoSomething("uraaa!");
