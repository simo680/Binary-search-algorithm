// function sum(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return sum(n - 1) + sum(n - 2);
//   }
// }
// console.log(sum(50));
let b = 1;
function Fact(n) {
  
  if (n <= 1) {
    return b;
  } else {
    b *= n;
    return Fact(n - 1);
  }
}
console.log(Fact(4));

function sum(n,m) {
    if (m == 1 ) {
        return 1
    }
    else {
        return n * sum(n, m - 1)
    }
}
console.log(sum(2,3));



// function bukvoed(stroka, word){
    
//     if (stroka.length != 0){
//         if(num)
//     }
// }
// console.log();
