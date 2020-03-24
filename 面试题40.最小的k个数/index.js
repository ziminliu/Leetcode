/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  // return  arr.sort((a, b) => a - b).slice(0,k)
   var len = arr.length;
   var minIndex, temp;
    for(var i = 0; i < k; i++) {
        minIndex = i;
        for(var j = i + 1; j < len; j++) {
            if(arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr.slice(0,k);
};

arr = [0,0,19,19,19,19,2,1,1,1,10,10,10,10,11,12,12,12,1,1,13,15,15,16,17,17,18,12,2,2,2,2,2,2,20,22,22,22,22,23,26,26,27,27,28,29,3,3,31,32,33,35,36,39,4,40,42,43,44,44,47,47,49,5,5,5,52,56,56,56,58,6,6,6],
 k = 7
console.log(getLeastNumbers(arr,k))