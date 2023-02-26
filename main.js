// 1  N - 5

// X
// XXX
// XXXXX
// XXX
// X

let num = 5,
a = "";
var countX = 1;

function createRomb(num) {
  for (let row = 1; row <= num; row++) {
    if (row <= Math.floor(num / 2)) {
      for (var space = 0; space < (num - countX) / 2; space++) {
        a += " ";
      }
      for (let x = 0; x < countX; x++) {
        a += "x";
      }
      countX += 2;
      a += "\n";
    } else {
      for (var space = 0; space < (num-countX)/2; space++) {
        a += " ";
      }
      for (let x = 0; x < countX; x++) {
        a += "x";
      }
      countX -= 2;
      a += "\n";
    }
  }
}
createRomb(num);
console.log(a);



// =======================================================================================
// 2  N - 7

// _X_
// XXX
// XXXXX
// XXXXXXX
// XXXXX
// XXX
// _X_

// let num = 7,
//   a = "";
// var countX = 1;

// function createRomb(num) {
//   for (let row = 1; row <= num; row++) {
//     if (row <= Math.floor(num / 2)) {
//       for (var space = 0; space < (num - countX) / 2; space++) {
//         a += " ";
//       }
//       for (let x = 0; x < countX; x++) {
//         a += "x";
//       }
//       countX += 2;
//       a += "\n";
//     } else {
//       for (var space = 0; space < (num-countX)/2; space++) {
//         a += " ";
//       }
//       for (let x = 0; x < countX; x++) {
//         a += "x";
//       }
//       countX -= 2;
//       a += "\n";
//     }
//   }
// }
// createRomb(num);
// console.log(a);





// =======================================================================================

// 3  2 eded olsun (a, b). 3cu ededi istifade etmeden ededlerin yerini deyisin.


// let a = 3
// let b = 2

// let sum = a + b

// a = sum - a
// b = sum - b

// console.log(a)
// console.log(b)



// =======================================================================================

// 4  2 array olsun 1 dovr, 1 sert ile arraylerdeki diff elementleri tapin
// Var arr1 = [1, 2, 3, 4]
// Var arr2 = [1, 2, 3, 4, 5]
// Var diffArr = [5]

// let arr1 = [1, 2, 3, 4]
// let arr2 = [1, 2, 3, 4, 5]
// let diffArr = []

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i]!= arr1[i]) {
//         diffArr.push(arr2[i])
//     }
// }

// console.log(diffArr)