/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length;
  let res = "";
  //创建二维数组
  let dp = Array.from(new Array(len), () => new Array(len).fill(0));
  // 第i 个 字符 到 第j 个字符
  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      dp[j][i] = s[i] == s[j] && dp[j + 1][i - 1];
    }
  }
  console.log(dp);
  return res;
};
// @lc code=end
