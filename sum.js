/* let sum =0;
const number = [44, 55, 654, 425, 45, 86, 85]
for (let i = 0; i < number.length; i++){
    const element = number[i];
    sum = sum + element;
}
console.log(sum); */

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const total = arrayTotal([32, 45, 67]);
console.log('array total', total)