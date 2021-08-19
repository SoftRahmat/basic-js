/* Assignment-4 problem solution */

// .......problem 1.......//

function seerToMon(seer) {
    // check user input type avoid error
    if (typeof seer != "number") {
        return 'please enter numbers only'
    } else {
        // 1 mon == 40 seer 
        let mon = seer / 40;
        return mon;
    }

}
console.log(seerToMon(40));

// .......problem 2.......//

function totalSales(shirtQuantiy, pantQuantity, jutaQuantity) {
    const oneShirt = 100;
    const onePant = 200;
    const oneJuta = 500;
    // for input type check to avoid error
    if (typeof shirtQuantiy != "number" || typeof pantQuantity != "number" || typeof jutaQuantity != "number") {
        return "Please input the quantity in numbers only";
    } else {
        // total product price calculation
        const totalShirtPrice = shirtQuantiy * oneShirt;
        const totalPantPrice = pantQuantity * onePant;
        const totalJutaPrice = jutaQuantity * oneJuta;

        // totalSales calculation

        const totalPrice = totalShirtPrice + totalPantPrice + totalJutaPrice;
        return totalPrice;
    }
}
console.log(totalSales(8, 4, 2));


// .......problem 3.......//

function deliveryCost(quantity) {
    // declare dellivery cost based on quantity

    const firstOneHandredCost = 100;
    const nextOneHandredCost = 80;
    const restQuantityCost = 50;

    // check the input parameter type for avoiding error
    if (typeof quantity != "number") {
        return 'Please enter T-shirt quantity in numbers only';
    }
    // check the delivery price based on quantity
    else if (quantity <= 100) {
        const totalCost = quantity * firstOneHandredCost;
        return totalCost;
    } else if (quantity >= 101 && quantity <= 200) {
        const firstOneHandred = 100 * firstOneHandredCost;
        const secondOneHandred = quantity - 100;
        const secondOneHandredCost = secondOneHandred * nextOneHandredCost;
        const totalCost = firstOneHandred + secondOneHandredCost;

        return totalCost;
    } else {
        const firstOneHandred = 100 * firstOneHandredCost;
        const secondOneHandred = 100 * nextOneHandredCost;
        const restQuantity = quantity - 200;
        const restQuantityTotal = restQuantity * restQuantityCost;
        const restQuantityTotalCost =
            firstOneHandred + secondOneHandred + restQuantityTotal;

        return restQuantityTotalCost;
    }
}

const totalCost = deliveryCost(201);
console.log(totalCost);


// .......problem 4.......//

// friend name in array
const names = ["Jenifer", "Jasmi", "Stanifer", "Sanifer", "Momen", "Rahmat"];
// declare function to find my perfect friend
function perfectFriend(names) {
    // store the name in empty array
    const myBestFriend = [];
    // check the friend from friends list
    for (const element of names) {
        // check the friends name type in string or not
        if (typeof element != "string") {
            return "Please check your friends names again"
        }
        // check the friend name.length
        else if (element.length == 5) {
            myBestFriend.push(element);
        }
    }
    return myBestFriend[0];
}
const myBestFriendName = perfectFriend(names);
console.log(myBestFriendName);