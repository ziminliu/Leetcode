/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  let n = board.length;
  let count = 0;
  let col = 0;
  let row = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "R") {
        row = i;
        col = j;
        // 上
        for (let i = row - 1; i >= 0; i--) {
          if (board[i][j] === "B") {
            break;
          }
          if (board[i][j] === "p") {
            count++;
            break;
          }
        }
        // 下
        for (let i = row + 1; i < n; i++) {
          if (board[i][j] === "B") {
            break;
          }
          if (board[i][j] === "p") {
            count++;
            break;
          }
        }
        // 左
        for (let j = col - 1; j >= 0; j--) {
          if (board[i][j] === "B") {
            break;
          }
          if (board[i][j] === "p") {
            count++;
            break;
          }
        }
        // 右
        for (let j = col + 1; j < n; j++) {
          if (board[i][j] === "B") {
            break;
          }
          if (board[i][j] === "p") {
            count++;
            break;
          }
        }
        return count;
      }
    }
  }
  return 0;
};
let board = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  ["p", "p", ".", "R", ".", "p", "B", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "B", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]
];
console.log(numRookCaptures(board));
