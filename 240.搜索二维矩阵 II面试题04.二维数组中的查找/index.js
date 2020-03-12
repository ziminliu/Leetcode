/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  for (; right >= 0 && bottom >= 0; ) {
    if (matrix[0][right] > target) {
      right--;
      // console.log("right--");
    }else if(matrix[0][right] === target){
      return true
    }
    if (matrix[bottom][0] > target) {
      bottom--;
      // console.log("bottom--");
    }else if(matrix[bottom][0] === target){
      return true
    }
    if (right < 0 || bottom < 0) return false;
    if (matrix[bottom][0] < target && matrix[0][right] < target) {
      break;
    }
  }
  // console.log(right,bottom)
  for (; right >= 0 && bottom >= 0; right--, bottom--) {
    // 对bottom行判断
    for (let col = right; col >= 0; col--) {
      // console.log(matrix[bottom][col]);
      if (matrix[bottom][right] < target) {
        return false;
      } else if (matrix[bottom][col] !== target) {
        continue;
      } else {
        return true;
      }
    }
    // 对right 列中判断
    for (let row = bottom; row >= 0; row--) {
      // console.log(matrix[row][right]);
      if (matrix[bottom][right] < target) {
        return false;
      } else if (matrix[row][right] !== target) {
        continue;
      } else {
        return true;
      }
    }
  }
};
let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
let ma = [[-5]];
let target = 9;
// console.log(ma.length)
console.log(findNumberIn2DArray(ma, -10));
