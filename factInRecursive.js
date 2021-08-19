// *****************Recursion ***************

function factorialRecursive(n){
    if (n == 1){
        return 1;
    }
    return n * factorialRecursive(n-1);
}

const myFact = factorialRecursive(1);
console.log(myFact);