/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let arr = path.split("/");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === "") | (arr[i] === ".")) {
      continue;
    } else if (arr[i] === "..") {
      if (res.length === 0) continue;
      res.pop();
    } else {
      res.push(arr[i]);
    }
  }
  return ('/'+res.join('/'));
};


let path='/a//b////c/d//././/..'
console.log(simplifyPath(path));
