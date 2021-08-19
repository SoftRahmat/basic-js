/*
3! = 3 * 2 * 1 
4! = 4 * 3 * 2 * 1
*/

/************************
 * multification a i = 1 hobe and adition a i = 0 hobe **
 * **************************/

// var factorial = 1;
// for (var i = 1; i < 7; i++){
//     console.log(i);
//     factorial = factorial * i;
// }
// console.log(factorial);

//********************for  loop*********** */

// function factorial (number){
//     let fact = 1;
//     for(let i = 1; i < number; i++){
//         fact = fact * i;
//     }
//     return fact;
// }

// let factNum = 9;
// let getFact = factorial(factNum);

// console.log(getFact);

//********************while  loop*********** */

// function factorial (number){
//     let fact = 1;
//     let i = 1;
//     while( i < number){
//         fact = fact * i;
//         i++;
//     }
//     return fact;
// }

// let factNum = 9;
// let getFact = factorial(factNum);

// console.log(getFact);

//********************while decrementing loop *********** */

function factorial(number) {
  let fact = 1;
  let i = number;
  while (i >= 1) {
    fact = fact * i;
    i--;
  }
  return fact;
}

let factNum = 1;
let getFact = factorial(factNum);

console.log(getFact);

