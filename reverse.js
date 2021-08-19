// const greetings = 'abul babul';

// function reverseString(text) {
//     let reverse = '';
//     for (const letter of text) {
//         reverse = letter + reverse;
//     }
// }
// const reversed = reverseString(greetings);
// console.log(reversed);

function reverseString(s){
    return s.split("").reverse().join("");
}
const chnage = reverseString("Hello");
console.log(chnage);