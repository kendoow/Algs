Array.prototype.splice1 = function (start, count) {
  if (typeof count == "undefined") count = 1;

  while (count--) {
    let index2remove = start + count;
    this[index2remove] = this.pop();
  }

  return this;
};


const months = ['Jan', 'March', 'April', 'June'];
months.splice1(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice1(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]