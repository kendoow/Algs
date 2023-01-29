
Array.prototype.filter1 = function (callbackFn) {
    const arr = []
    for(let i = 0; i < this.length; i++){
        if(callbackFn(this[i])){
            arr.push(this[i])
        }
    }
    return arr
}




const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


// // Arrow function
// filter((element) => { /* … */ })
// filter((element, index) => { /* … */ })
// filter((element, index, array) => { /* … */ })

// // Callback function
// filter(callbackFn)
// filter(callbackFn, thisArg)

// // Inline callback function
// filter(function (element) { /* … */ })
// filter(function (element, index) { /* … */ })
// filter(function (element, index, array) { /* … */ })
// filter(function (element, index, array) { /* … */ }, thisArg)