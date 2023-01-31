Promise.all1 = function promiseAllIterative(values) {
    return new Promise((resolve, reject) => {
       let results = [];
       let completed = 0;
       
       values.forEach((value, index) => {
            Promise.resolve(value).then(result => {
                results[index] = result;
                completed += 1;
                
                if (completed == values.length) {
                    resolve(results);
                }
            }).catch(err => reject(err));
       });
    });
}



const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all1([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]