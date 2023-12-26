/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let items = arr1.concat(arr2);

    let result = {};
    console.log(items)
    for (const obj of items) {
        console.log(1, obj)
        if (!result[obj.id]) {
            result[obj.id] = obj;
            continue;
        }
        console.log(2, obj)
        result[obj.id] = {...result[obj.id], ...obj};
    }

    return Object.values(result);
};
arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
]
arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
console.log(join(arr1, arr2))