/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 1. 排列组合    C (m-1)/(m+n-2)
  // 2. 动态规划
  let dp = new Array(m).fill(new Array(n).fill(1));
  for(i=1;i<m;i++){
      for(j=1;j<n;j++){
        dp[i][j]= dp[i-1][j]+dp[i][j-1]
      }
  }
  return dp[m-1][n-1]
};

// @lc code=end
