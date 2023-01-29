Array.prototype.join1 = function (spliter) {
  let str = "";
  for (let i = 0; i < this.length; i++) {
    if (spliter !== undefined) {
      str += `${this[i]}${spliter}`;
    } else if (spliter === undefined && i !== this.length - 1) {
      str += `${this[i]},`;
    } else {
      str += `${this[i]}`;
    }
  }
  return str;
};

const elements = ["Fire", "Air", "Water"];

console.log(elements.join1());
// Expected output: "Fire,Air,Water"

console.log(elements.join1(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
