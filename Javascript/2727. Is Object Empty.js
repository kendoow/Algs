/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let counter = 0
    for(const el in obj){
        if(el !== undefined){
            counter++
        }
    }
    return !counter
};