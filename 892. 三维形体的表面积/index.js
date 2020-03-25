/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let n = grid.length;
  let area = 0;
  if (n === 0) return 0;
  // 两层循环的同时也判断高度
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 先根据是否有方块计算每个单独的面积
      if (grid[i][j] != 0) {
        // 一层的面积
        area += 2 + 4 * grid[i][j];
      }
      // 方块右边相邻减去2个面
      if (j < n - 1) {
        area -= 2 * Math.min(grid[i][j + 1], grid[i][j]);
      }
      // 方块下边相邻减去2个面
      if (i < n - 1) {
        area -= 2 * Math.min(grid[i + 1][j], grid[i][j]);
      }
    }
  }
  return area;
};
let grid = [
  [2, 2, 2],
  [2, 1, 2],
  [2, 2, 2]
]; //18
console.log(surfaceArea(grid));
// console.log(Math.min(1,2))
