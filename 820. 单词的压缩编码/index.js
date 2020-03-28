/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  // 将字符数组按长度排序
  words = words.sort((a, b) => b.length - a.length);
  // console.log(words);
  let s = "";
  // 数组遍历每一项
  words.forEach(value => {
    // console.log({ value });
    // console.log(s.indexOf(value + "#"))
    if (s.indexOf(value + "#")===-1) {
      s += value + "#";
    }
  });
  // console.log(s);
  return s.length;
};
words = ["a", "a", "a"];
console.log(minimumLengthEncoding(words));