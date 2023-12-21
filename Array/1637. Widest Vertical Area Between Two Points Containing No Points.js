/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    points.sort((p1, p2) => p1[0] - p2[0]);
    let width = -1;

    for (let i = 1; i < points.length; i++) {
        width = Math.max(width, points[i][0] - points[i - 1][0])
    }
    return width;
};