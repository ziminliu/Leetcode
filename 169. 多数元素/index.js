/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 0) return;
  nums = nums.sort();
  let index = 0;
  while (index < nums.length) {
    // 第一次出现的元素和最后一次出现的元素得到元素个数
    if (
      nums.lastIndexOf(nums[index]) - nums.indexOf(nums[index]) + 1 >
      nums.length / 2
    ) {
      return nums[index];
    } else {
      index = nums.lastIndexOf(nums[index]) + 1;
    }
  }
};
nums = [1];
console.log(majorityElement(nums));
