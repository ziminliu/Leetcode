# [1160. 拼写单词](https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters/
给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

注意：每次拼写时，chars 中的每个字母都只能用一次。

返回词汇表 words 中你掌握的所有单词的 长度之和。

 

示例 1：

输入：words = ["cat","bt","hat","tree"], chars = "atach"
输出：6
解释： 
可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
示例 2：

输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
输出：10
解释：
可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
 

提示：

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
所有字符串中都仅包含小写英文字母


思路：先将`chars`转化为数组，然后对`words`数组中的每一项中的字母进行遍历，判断该字母是否在`chars` 数组中，如果不在，就`break`判断下一个单词，如果存在，就将`chars`的副本中将该字母设置为`0`,标记该字母已不可用,设置一个`flag`来标记该单词中的所有字母是否都能都匹配到，若是，则加上该单词的长度。