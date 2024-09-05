// const age = 17;
// if (age >= 18) {
//     console.log("You can vote");


// }
// else{
//     console.log('You can not vote');
    
// }
// const age = 12;
// age>=18?console.log('You can vote') : console.log("You can not vote");

let price = 5000;
const isLeader = true;
// if (isLeader === true) {
//     price = 0;
// }
// else {
//     price = price + 1000;
// }
// console.log(price);

// price = isLeader === true ? 0 : price + 1000;
// console.log(price);
// if (isLeader === true) {
//     if (price > 1000) {
//         price = price / 2;
//     }
//     else {
//         price = 0;
//     }
// }
// else {
//     price = price + 1000;
// }

price = isLeader === true ? price > 1000 ? price / 2 : price = 0 : price + 1000;
console.log(price);
