/* ⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳Problem No1 ⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳ */
/* ⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜Solution⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜⁜*/
function seerToMon(seer) {
    const mon = seer / 40;        /* Fomula = ser/40  */
    return mon;
}
const weight = seerToMon(1);
console.log(weight);
/* 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Question's 1 Answers end here 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️ */


/* ⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳Problem No2 ⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳ */
/* 🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇🎇 Solution 🎇🎇🎇🎇🎇🎇🎇🎇🎇 */
function totalSales(shirtQuantity,  pantQuantity, shoeQuantity) {
    perShirtprice = 100;
    perPantPrice = 200;          // the data is from the question
    perShoePrice = 500;
    const shirtPrice =  perShirtprice * shirtQuantity;
    const pantprice = perPantPrice * pantQuantity;
    const shoePrice = perShoePrice * shoeQuantity;
    const totalprice = shirtPrice + pantprice + shoePrice;
    return totalprice;
}
const total = totalSales(1,1,1);
console.log(total);
/* 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Question's 2 Answers end here 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️ */

/* ⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳Problem No3 ⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳⏳ */
/※※※※※※※※※※※※※※ Solution ※※※※※※※※※※※※※※※/
function deliveryCost(quantity) {
    const firstDelivery = 100;
    const secondDelivery = 80;
    const thirdDelivery = 50;
    if (quantity <= 100) {
        const costCount = quantity * firstDelivery;
        return costCount;
    }
    else if (quantity <= 200) {
        const firstQuantity = 100 * firstDelivery;   // As the condition is simillar like  first step so this line will be same 
        const restQuantity = quantity - 100;
        const secondQuantity = restQuantity * secondDelivery;
        const totalQuantity = firstQuantity + secondQuantity;
        return totalQuantity;
    }
    else{
        const firstQuantity = 100 * firstDelivery;
        const secondQuantity = 100 * secondDelivery;
        const restQuantity = quantity-200;
        const restCost = restQuantity * thirdDelivery;
        const totalCost = firstQuantity + secondQuantity + restCost;
        return totalCost;
    }
}
const tshirt = deliveryCost(201);
console.log(tshirt);
/* 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Question's 3 Answers end here 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️ */

/* 🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈  Problem No 4 🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈 */
/* 🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆 Solution 🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆🎆 */
// friend name in array
const names = ["Jenifer", "Lotia", "anifer", "janifer", "Momen", "Maruf"];
function perfectFriend(names) {
    const myBestFriend = [];
    for (const element of names) {
        if (typeof element != "string") {
            return "Please check your friends names again"
        }
        else if (element.length == 5) {
            myBestFriend.push(element);
        }
    }
    return myBestFriend[0];
}
const myBestFriendName = perfectFriend(names);
console.log(myBestFriendName);
/* 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Question's 4 Answers end here 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️ */