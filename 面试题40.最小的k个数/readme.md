# [面试题40. 最小的k个数](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)
输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]
 

限制：

0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000


题解：
思路，排序取前k 个数
1. 使用内置排序 sort((a,b)=>a-b)   时间复杂度 取决于内部机制，会全部排序，我们只需用到前k 个
2. 冒泡排序  时间复杂度 k*n
3. 选择排序  时间复杂度 k*n
4. 