## [169. 多数元素](https://leetcode-cn.com/problems/majority-element/)

官方题目描述如下：

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



当我看到这题的时候，惯性思维让我直接想到了暴力法，但是一般迫不得已不会用暴力法(因为想不出别的办法:(了)，想了一会儿，突然脑海里冒出一个点子，利用数组排序，就可以将一样的值放在相邻位置，再利用`indexOf`与`lastIndexOf`得到某一个元素在数组中个数，判断如果这个数大于`n/2`,就返回这个数。正当我沾沾自喜以为将O(n2)降为了O(n)的时候我突然看到这样一个答案。

```js
var majorityElement = function(nums) {
  nums.sort((a,b)=>a-b);
  return nums[Math.floor(nums.length/2)]
}
```

害，我突然发现我竟然再一次循环去寻找这个值，却忘了题目中这个数值的特性！题解中发现了这样三种解法，我放在了`better.js` 中,感兴趣的可以查看官网相关解法https://leetcode-cn.com/problems/majority-element/solution/mei-ri-yi-ti-ep13-majorityelementduo-shu-yuan-su-j/