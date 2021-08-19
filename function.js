function testFunOn() {
    console.log("Test Done");
}
testFunOn();

function buyBooks(taka) {
    console.log("Buy Three books", taka);
    var bookPrice = 10;
    var bookQuantity = taka / bookPrice;

    return bookQuantity;
}
var money = 100;
var books = buyBooks(money);

console.log("Ai nen bal", books);

function add(num1, num2) {
    console.log(num1, num2);
    var total = num1 + num2;
    return total;
}

var firstNum = 45;
var secondNum = 50;
var result = add(firstNum, secondNum);
console.log("The result is: ", result);

var mahiya = {
    mahi: 'apon',
}

mahiya.mahi = 'real'
// mahiya["mahi"] = 'haha';

console.log(mahiya);

var nums = [4, 5, 7, 6, 8, 2, 4, 1, 15];

console.log(nums[6]);
