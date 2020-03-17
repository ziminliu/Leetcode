/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  if (chars.length === 0) return 0;
  let count = 0;
  chars = chars.split("");
  let flag = true;
  for (let item of words) {
    let str = [].concat(chars);
    for (const letter of item) {
      if (str.indexOf(letter) === -1) {
        flag = false;
        break;
      } else {
        str[str.indexOf(letter)] = "0";
      }
    }
    if (flag) {
      count = count + item.length;
    }
    flag = true;
    str = chars;
  }
  return count;
};
let words = ["hello","world","leetcode"], chars = "welldonehoneyr"
console.log(countCharacters(words, chars));