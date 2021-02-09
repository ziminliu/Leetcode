/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let flag = x < 0;
  let res = Number(String(Math.abs(x)).split("").reverse().join(""));
  res = flag ? -res:res;
  if(res<=Math.pow(2,31)-1&&res>=-Math.pow(2,31)){
      return res;
  }
  return 0;
};
// @lc code=end
