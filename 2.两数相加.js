/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let p3 = {
    val: undefined,
    next: null,
  };
  let node ={}
  let flag = false;
  while (p1 || p2) {
    if (flag) {
      p3.val = p1.val + p2.val + 1;
      flag = false;
    } else {
      p3.val = p1.val + p2.val;
    }
    if (p3.val > 9) {
      p3.val = p3.val - 10;
      flag = true;
    }
    if (p1.next === null) {
      p1 = null;
    }
    if (p2.next === null) {
      p2 = null;
    }
    console.log(p3.val);
    p1 = p1.next;
    p2 = p2.next;
    p3.next = p3;
  }
  return p1;
};
// @lc code=end
