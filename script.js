
let array = [5, 17, 11, 9, 9, 9, 12, 12, 12, 12, 8, 16, 10, 300];
let search = function (array) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.round((right + left) / 2);
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
  // нема
  return -1;
};

 let res = search(array);
 console.log(res);

//    static int BinarySearch(int[] array, int left, int right)
//  {

//      while (left <= right)
//      {

//          var middle = (left + right) / 2;

//          if (array[middle] % 2 == 0)
//          {
//              if(array[middle-1] % 2 != 0)
//              {
//                  return middle;
//              }
//              else if(array[middle-1] % 2 == 0)
//              {
//                  right= middle;
//              }

//          }
//          else
//          {

//              left = middle + 1;

//          }
//      }
//      //ничего не нашли
//      return -1;
//  }
//  int[] array = new int[17] { 3,3,3,3,3,3,3,3,3,3,12,12,12,8,16,10,300 };
//  int first = 0;
//  int result = BinarySearch(array, first, array.Length-1);
//  Console.WriteLine(result);
