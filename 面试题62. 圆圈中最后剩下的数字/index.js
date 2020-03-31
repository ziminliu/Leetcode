/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 * 暴力法
 */
var lastRemaining = function(n, m) {
  // let arr = new Array(n);
  // let index = 0;
  // let len = 0;
  // let count = 0;
  // for (; len <=n; index++, index = index % n) {
  //   // console.log(index, len);
  //   // 该元素为剔除 算入一次运算
  //   if (arr[index] === undefined) {
  //     count++;
  //   }
  //   // 一个m次循环后， 下标为index 的被剔除
  //   if (count % m === 0 && arr[index] === undefined) {
  //     arr[index] = 1;
  //     len++;
  //   }
  //   if(len===n){
  //     return index
  //   }
  // }
  let ans = 0;
  for (let i = 2; i <= n; i++) {
    ans = (ans + m) % i;
  }
  return ans;
};
console.log(lastRemaining(70866, 116922));
