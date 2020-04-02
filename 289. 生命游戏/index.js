/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 判断以该细胞为中心周围存货的细胞数
var getLiveCell = function(board, i, j) {
  let count = 0;
  // 先暴力 8 if 方向数组
  // 左上
  if (board[i - 1] && board[i - 1][j - 1] === 1) {
    count++;
  }
  // 上
  if (board[i - 1] && board[i - 1][j] === 1) {
    count++;
  }
  // 右上
  if (board[i - 1] && board[i - 1][j + 1] === 1) {
    count++;
  }

  // 左
  if (board[i] && board[i][j - 1] === 1) {
    count++;
  }
  // 右
  if (board[i] && board[i][j + 1] === 1) {
    count++;
  }

  // 左下
  if (board[i + 1] && board[i + 1][j - 1] === 1) {
    count++;
  }
  // 下
  if (board[i + 1] && board[i + 1][j] === 1) {
    count++;
  }
  // 右下
  if (board[i + 1] && board[i + 1][j + 1] === 1) {
    count++;
  }
  return count;
};
var gameOfLife = function(board) {
  if (board.length === 0) return 0;
  let temp = JSON.parse(JSON.stringify(board));
  // console.log(getLiveCell(temp, 2, 0));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (getLiveCell(temp, i, j) < 2) {
        board[i][j] = 0;
      } else if (getLiveCell(temp, i, j) > 3) {
        board[i][j] = 0;
      } else if (getLiveCell(temp, i, j) === 3) {
        board[i][j] = 1;
      }
    }
  }
  // console.log({ temp });
  return board;
};
let board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
];
console.log(gameOfLife(board));
