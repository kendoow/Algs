var SnapshotArray = function(length) {
    this.arr = [];
    this.snapId = 0;
    this.snapshots = {};
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.arr[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snapshots[this.snapId] = [...this.arr];
    this.snapId++;
    
    return this.snapId - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let val = this.snapshots[snap_id][index];
    
    return val === undefined ? 0 : val;
};