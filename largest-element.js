/* function largestNum(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [45, 52, 45, 70, 80, 65,];
const oldest = largestNum(ages);
const oldest2 = largestNum([-85, -56, -90]);
console.log(oldest);
console.log(oldest2); */

// find the smalest in array
function smallestNum(numbers){
    let min = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < min) {
            min = element;
        }
    }
    return min;
}

const ages = [45, 54, 12 , 56, 7]
const smallest = smallestNum(ages)
console.log(smallest);

/* function largestNum(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [45, 52, 45, 70, 80, 65,];
const oldest = largestNum(ages);
const oldest2 = largestNum([-85, -56, -90]);
console.log(oldest);
console.log(oldest2); */