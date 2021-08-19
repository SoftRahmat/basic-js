const number = 5;

console.log(number % 2 == 0);



function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}
const numberLarge = 1052;
const checkNumber = isEven(numberLarge);

console.log(checkNumber);


function isOdd(number) {
  if (number % 2 != 0) {
    return true;
  }
  return false;
}
const numberLargeOdd = 5;
const checkNumberOdd = isOdd(numberLargeOdd);

console.log(checkNumberOdd);

for (let i = 0; i <= 10; i++){
    console.log(i);
}