let array = [5, 17, 11, 9, 9, 9, 12,12,12,12,12,12, 12, 12, 8, 16, 10, 300];
let search = function (array) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (array[mid] % 2 == 0) {
      if (array[mid - 1] % 2 != 0) {
        return mid;
      } else if (array[mid - 1] % 2 == 0) {
        right = mid;
      }
    } 
    else {
      left = mid + 1;
    }
  }
  return -1;
};
 let res = search(array);
 console.log(res);
 