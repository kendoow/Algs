Promise.allSettled1 = function promiseAllIterative(promises) {
  let wrappedPromises = promises.map((p) =>
    Promise.resolve(p)
      .then((val) => ({ status: "fulfilled", value: val }))
      .catch((err) => ({ status: "rejected", reason: err }))
  );
  return Promise.all(wrappedPromises);
};

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

Promise.allSettled1(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);

// Expected output:
// "fulfilled"
// "rejected"
