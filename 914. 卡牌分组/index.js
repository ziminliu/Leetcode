/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  deck = deck.sort((a, b) => a - b);
  let length = [];
  for (
    let item = deck[0];
    item != undefined;
    item = deck[deck.lastIndexOf(item) + 1]
  ) {
    length.push(deck.lastIndexOf(item) - deck.indexOf(item) + 1);
  }
  // 保存各元素长度的数组
  length = length.sort((a, b) => a - b);
  for (let i = 2; i <= length[0]; i++) {
    if (length.every(value => value % i === 0) === true) {
      return true;
    }
  }
  return false;
};
let deck =[1,1,2,2,2,2];
console.log(hasGroupsSizeX(deck));
