/* const num = [23, 32, 34, 54, 57, 65, 3, 21];
function sotorArray(num) {
    const myArray = [];
    for (const element of num) {
        if (typeof element != "number") {
            return "Please check your num again"
        }
        else if (element > 30) {
            myArray.push(element);
        }
    }
    return myArray;
}
const myArrayList = sotorArray(num);
console.log(myArrayList); */
/* 
let sum = 0;
for (let i = 6; i >= 1; i--) {
    sum = sum + i;
}
console.log(sum) */


function sum(i){
    if(i == 1){
        return 1;
    }
    return i + sum(i-1);
}
console.log(sum(6));