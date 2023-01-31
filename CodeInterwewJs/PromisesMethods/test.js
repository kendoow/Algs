const rejectOnTimeout = (promise, ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject("timeout_error"), ms);
    promise.then(resolve).catch(reject);
  });
  
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 10, "foo");
});

rejectOnTimeout(promise3, 110)

