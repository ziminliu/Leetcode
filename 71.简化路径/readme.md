# [71. 简化路径](https://leetcode-cn.com/problems/simplify-path/)
以 Unix 风格给出一个文件的绝对路径，你需要简化它。或者换句话说，将其转换为规范路径。

在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。更多信息请参阅：Linux / Unix中的绝对路径 vs 相对路径

请注意，返回的规范路径必须始终以斜杠 / 开头，并且两个目录名之间必须只有一个斜杠 /。最后一个目录名（如果存在）不能以 / 结尾。此外，规范路径必须是表示绝对路径的最短字符串。

> 思路：本题的主要思想是**栈**的使用由于使用unix 风格，以`/` 分隔路径，因此，我们先将这样一个字符串，用split方法分割成一个数组，然后就可以对数组进行遍历，我们创建一个栈用于保存规范路径，然后按照出入栈规则操作。当我们遇到`.`,` `时，我们不进行相应操作，退出本次循环 `continue`,当遇到`..`时，我们出栈，其他情况下我们入栈。   

需要注意以下几点：
1. 边界值
   1. 起始只能以`/` 开头，往下可以不断接力，当我们不断退栈，退到根目录，即`res` 栈内没有元素时，我们要及时`continue`终止本次循环，放置栈的`pop` 操作，虽然当栈内没有元素时也进行pop操作不会报错，但是，我们必须培养良好的错误处理思维。

2. 分隔符
   1. 参数作为的路径我们以`/`分开后，多个相邻的`/`,在数组内会转变成`''`,与`.`的作用一致，并不需要单独设置判断条件