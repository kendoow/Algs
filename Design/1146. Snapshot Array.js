/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.arr = [];
	this.snaps = [];
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.arr[index] = val
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snaps.push([...this.arr]);
	return this.snaps.length - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    const value = this.snaps[snap_id][index];
	return value === undefined ? 0 : value;
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */