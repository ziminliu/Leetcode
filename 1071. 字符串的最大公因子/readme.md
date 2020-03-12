# [1071. 字符串的最大公因子](https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/)
官方题目如下：  
对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。

返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。

 

示例 1：

输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"
示例 2：

输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"
示例 3：

输入：str1 = "LEET", str2 = "CODE"
输出：""

提示：

1 <= str1.length <= 1000
1 <= str2.length <= 1000
str1[i] 和 str2[i] 为大写英文字母



思路：当我看到这题的时候我的内心是懵逼的，因为平时接触字符串比较少，话不多说，经过一番思考，觉得字符串的最大公因子和两个数的最大公因子有一些相似之处：
那就是长度

   1. 字符串的最大公因子的长度一般情况下不会大于这两个字符串的最大公因子，如示例2。为什么说一般情况下，稍后会介绍。
   2. 根据字符串长度得到的最大公约数作为字符串的最大公因子长度`com`，随意取其中一个字符串`str1.substr(0, com);`，得到子串`substr`，在利用字符串的`repeat`方法与原字符串比较
      ```js
        if (
          str1 === substr.repeat(str1.length / common) &&
          str2 === substr.repeat(str2.length / common)
        )
      ```
      如果满足条件，就说明`substr`是字符串的最大公因子
   3. 如果`com`等于1 就结束判断，返回空串，否则继续下一次循环

特殊测试用例：
1. `str1` 与 `str2` 当二者有一个为空串时，求最大公因数时就会出现错误，因此，需要在最前面加上字符创为空的判断。

2. `str1` 与 `str2` 长度相等时，由于最大公因数的判断时，给定的两个数字默认不同，当长度相同时，得到的最大公约数就会等于0,从而得到错误的结果，因此，我在求最大公因数的最后加了一个判断，当两个字符串长度相等时，`com`就等于字符串长度的一半，来降低后续的运算量。

3. `str1` 与 `str2` 相等时，由于我们上述情况，此时`com`就等于长度的一半，当`str1=360个A`时，返回的`substr`,就等于`180个A`。因此我们需要在最前面加上两字符串是否相等的判断条件。

  

  提交完后，发现用时44ms,在所有JavaScript提交中超过了100%的用户，内存击败81%，于是看了一下题解想找一下看有没有可以减少内存的更好的办法，于是发现一个[精选题解](https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/solution/1071-zi-fu-chuan-de-zui-da-gong-yin-zi-by-wonderfu/),这位大佬仅用了3行代码，就将问题解决了，感兴趣的同学可以看看这个解法，或者思考一下在我的解法上能不能在空间复杂度上有更佳的优化。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/greatest-common-divisor-of-strings