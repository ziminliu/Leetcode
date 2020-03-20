/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let arr = s.split("").sort();
  console.log(arr)
  if (arr[0] === arr[arr.length - 1]) return arr.length;
  let length = 0;
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[index] === arr[i]) {
      length++;
    } else {
      if ((i - index) % 2 === 0 && i - 1 != index) {
        length++;
      }
      index = i;
    }
  }
  if (arr[arr.length - 1] === arr[arr.length - 2]) length++;
  // length=(length<arr.length&&length%2===0)?length+1:length
  // console.log(length)
  return (length<arr.length&&length%2===0)?length+1:length;
};
let s = "abccccdd";
console.log(longestPalindrome(s));
