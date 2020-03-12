/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  let strLen1 = str1.length;
  let strLen2 = str2.length;
  if (strLen1 === 0 || strLen2 === 0) return "";
  // 当两字符串相等时
  if (str1 === str2) return str1;
  while (strLen1 * strLen2) {
    //当其中一个为0时，终止循环
    if (strLen1 > strLen2) {
      //将较大数模较小数的结果（余数）赋给较大的值，直到两个数相等
      strLen1 %= strLen2;
    } else if (strLen1 < strLen2) {
      strLen2 %= strLen1;
    } else {
      //两字符串相等
      break;
    }
  }
  let common = strLen1 > strLen2 ? strLen1 : strLen2;
  // 字符长度相等，但不相等，最大公因数取一半来参与计算
  if (str1.length === str2.length) common = str1.length / 2;
  let substr;
  for (let com = common; com > 0; com--) {
    substr = str1.substr(0, com);
    if (
      str1 === substr.repeat(str1.length / common) &&
      str2 === substr.repeat(str2.length / common)
    ) {
      return substr;
    } else if (com === 1) {
      return "";
    } else continue;
  }
};

let str1 =
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
str2 =
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

console.log(gcdOfStrings(str1, str2));
