/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 * 原问题：凑成总金额所需的最少的硬币个数
 * 子问题：凑成x(x<=s)金额所需最少的硬币个数
 * 状态：coins 硬币面额 amount 总金额
 * 状态转移方程：f(x) = min(f(x-5) +1 ,f(x-2)+1,f(x-1)+1)
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(-1);
  dp[0] = 0;
  for (i = 0; i <= amount; i++) {
    if (coins.includes(i)) {
      dp[i] = 1;
    } else {
      // 得到每种面额时的最优解
      let temp = coins.map((coin) =>
        dp[i - coin] && dp[i - coin] !== -1 ? dp[i - coin] + 1 : -1
      );
      let min = Math.min(...temp.filter((item) => item !== -1));
      if (min !== Infinity) {
        dp[i] = min;
      }
    }
  }
  return dp[amount];
};
(coins = [1, 5, 11, 20]), (amount = 15);
coinChange(coins, amount);
// @lc code=end
