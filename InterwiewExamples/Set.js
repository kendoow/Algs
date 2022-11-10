module.exports = YetAnotherSet;

function YetAnotherSet(iterator = []) {
  const array = [];

  if (typeof iterator === "string") iterator = iterator.split("");

  for (const item of iterator) if (!array.includes(item)) array.push(item);

  const newSet = {
    add(item) {
      if (!array.includes(item)) array.push(item);
      
      return this;
    },

    has(item) {
      return array.includes(item) ? true : false;
    },

    delete(item) {
      if (array.includes(item)) {
        if (Number.isNaN(item)) {
          array.splice(
            array.findIndex((e) => e != e),
            1
          );
        } else {
          array.splice(array.indexOf(item), 1);
        }

        return true;
      }

      return false;
    },

    clear() {
      array.length = 0;

      return this;
    },

    get size() {
      return array.length;
    },

    entries() {
      return array.map((item) => [item, item]);
    },

    values() {
      return Array.from(array);
    },

    keys() {
      return this.values();
    },

    forEach(cb, thisArg) {
      array.forEach(cb, thisArg);
    },


    [Symbol.iterator]() {
      return {
        index: 0,
        to: newSet.size,

        next() {
          if (this.index < this.to)
            return { done: false, value: array[this.index++] };
          return { done: true };
        },
      };
    },

    [Symbol.toStringTag]: "^_^",
  };

  return newSet;
}

YetAnotherSet.prototype[Symbol.iterator] = function () {
  return this[storage][Symbol.iterator]();
};

YetAnotherSet.prototype.toString = function () {
  return "[object ^_^]";
};

YetAnotherSet.prototype[Symbol.toStringTag] = "^_^";

YetAnotherSet.prototype.constructor = YetAnotherSet;

YetAnotherSet.prototype.size = function () {
  return [...this[storage].length()];
};

// вспомогательные функции
// ...

// ТЕСТЫ

let object = null;
let array = null;
let set = null;

let res = null;

// преобразования
set = YetAnotherSet([]);
console.assert(String(set) === "[object ^_^]", "String(set)");
console.assert(
  Object.prototype.toString.call(set) === "[object ^_^]",
  "Object.prototype.toString.call(set)"
);

// работает в цикле for-of
array = [3, 14, 15];
set = YetAnotherSet(array);
for (const item of set) {
  console.assert(item === array.shift(), "for-of");
}

// хранит только уникальные значения
array = [4, 4, 8, 15, 15, 16, 23, 42];
set = YetAnotherSet(array);
console.assert(
  String([...set]) === String([...new Set(array)]),
  "unique value"
);

// есть свойство size
array = [1, 2, 3, 4, 5];
set = YetAnotherSet(array);
console.assert(set.size === array.length, "size property");

// есть методы has, add, delete, clear
object = {};
array = [{}, object, 42, NaN, undefined];
set = YetAnotherSet(array);

console.assert(set.has(23) === false, "has not 23");
console.assert(set.has({}) === false, "has not {}");

console.assert(set.has(42) === true, "has 42");
console.assert(set.has(NaN) === true, "has NaN");
console.assert(set.has(object) === true, "has object");
console.assert(set.has(undefined) === true, "has undefined");

set.add(NaN).add(undefined);
console.assert(set.size === array.length, "add NaN & undefined");

set.add({});
array.push({});
console.assert(set.size === array.length, "add {}");

res = set.delete(23);
console.assert(res === false, "23 is not deleted");
console.assert(set.size === array.length, "same size after delete 23");

res = set.delete({});
console.assert(res === false, "{} is not deleted");
console.assert(set.size === array.length, "same size after delete {}");

res = set.delete(42);
console.assert(res === true, "42 is deleted");
console.assert([...set].includes(42) === false, "do not includes 42");

res = set.delete(object);
console.assert(res === true, "object is deleted");
console.assert([...set].includes(object) === false, "do not includes object");

res = set.delete(NaN);
console.assert(res === true, "NaN is deleted");
console.assert([...set].includes(NaN) === false, "do not includes NaN");

res = set.delete(undefined);
console.assert(res === true, "undefined is deleted");
console.assert(
  [...set].includes(undefined) === false,
  "do not includes undefined"
);

set.clear();
console.assert(set.size === 0, "empty after clear");

set.add(4).add(4).add(8).add(15).add(16).add(23).add(42).add(42);
console.assert(set.size === 6, "add handels not unique values");

set.clear();
set.add({}).add({}).add({});
set.add(object).add(object).add(object).add(object).add(object);
console.assert(set.size === 4, "add handels not unique refs");

// работает без new и инициализатора
set = YetAnotherSet();
console.assert(set.has(undefined) === false, "has nothing");
console.assert(set.delete(undefined) === false, "nothing to delete");
console.assert(set.size === 0, "size is zero for emply");

// работает для интерируемых объектов
set = YetAnotherSet("hello");
console.assert(
  String([...set]) === String(["h", "e", "l", "o"]),
  "works with string"
);

// forEach
array = [23, 42];

set = YetAnotherSet(array);
set.forEach((item, index) => {
  console.assert(item === array[index], "forEach for values");
});

set = YetAnotherSet(array);
set.forEach(
  function (item, index) {
    this.value = item;
    console.assert(this.getValue() === array[index], "forEach with context");
  },
  {
    getValue() {
      return this.value;
    },
  }
);

// есть методы keys, values, entries
array = [4, 8, 15, 16, 23, 42];
set = YetAnotherSet(array);

const keys = [...array];
for (const item of set.keys()) {
  console.assert(item === keys.shift(), "for-of keys");
}

const values = [...array];
for (const item of set.values()) {
  console.assert(item === values.shift(), "for-of values");
}

const entries = [...array];
for (const [key, value] of set.entries()) {
  const elem = entries.shift();
  console.assert(key === elem && value === elem, "for-of entries");
}
