/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    // for(let j=i+1;j<nums.length;j++){
    //     if(nums[i]+nums[j]===target){
    //         return [i, j]
    //     }
    // }
    if (obj.hasOwnProperty([target - nums[i]])) {
      return [obj[target - nums[i]], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};
// @lc code=end
