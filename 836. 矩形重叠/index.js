/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  // 上
  if (rec2[1] >= rec1[3] ) {
    // console.log("1");
    return false;
  }
  // 右
  else if (rec2[0] >= rec1[2] ) {
    // console.log("2");
    return false;
  }
  // 下
  else if (rec2[3] <= rec1[1] ) {
    // console.log("3");
    return false;
  }
  // 左
  else if (rec2[2] <= rec1[0] ) {
    // console.log("4");
    return false;
  } else {
    return true;
  }
};
// 矩形以列表 [x1, y1, x2, y2] 的形式表示，
// 其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。
(rec1 = [4, 4, 14, 7]), (rec2 = [4, 3, 8, 8]);
console.log(isRectangleOverlap(rec1, rec2));
