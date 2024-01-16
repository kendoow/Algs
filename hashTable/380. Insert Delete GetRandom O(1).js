var RandomizedSet = function () {
    this.hash = {}
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.hash[val] === undefined) {
        this.hash[val] = val
        return true
    }
    return false
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.hash[val] === undefined) {
        return false
    } else {
        delete this.hash[val]
        return true
    }

};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return Object.values(this.hash).length ? Object.values(this.hash)[Math.floor(Math.random() * Object.values(this.hash).length)] : []
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */