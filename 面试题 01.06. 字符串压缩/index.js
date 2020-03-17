/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  let newstr = "";
  let count = 0;
  let index = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[index] === S[i]) {
      count++;
    } else {
      newstr = newstr+S[index] + count;
      count = 1;
      index = i;
    }
  }
  newstr = newstr+S[index] + count;
  if (newstr.length >= S.length) {
    return S;
  } else {
    return newstr;
  }
};
let str = "abbccd";
console.log(compressString(str));
