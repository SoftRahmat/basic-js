/* function maxNum(num1, num2, num3){
    var max = 0;
    if((num1 >= num2) && (num1 >= num3)){
        max = num1;
    }
    else if((num2 >= num1) && (num2 >= num3)){
        max = num2;
    }
    else{
        max = num3;
    }
return max;
}

var result = maxNum(23, 45, 52);
console.log(result) */
// var arr = [];
// for(i=0;i<3;i++){
//     arr[i] = parseInt(prompt("Enter a number"));
// }

// document.write(maxNum.apply(this, arr));

function maxNum(num1, num2, num3) {
  var max = 0;
  if (num1 >= num2 && num1 >= num3) {
    max = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    var max = num2;
  } else {
    var max = num3;
  }
  return max;
}
var result = maxNum(100, 500, 200);
console.log(result);

var first = 5;
var second = 7;
console.log(first, second);
// first approach
// var temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// destructuring
[first, second] = [second, first];
console.log(first, second);