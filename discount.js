const age = 18;
const price = 5000;
if (age >= 40) {
    // 10% discount
    const discount = price * 10 / 100;
    const payableAmount = price - discount;
    console.log(payableAmount);
    
}
else if (price >= 4000) {
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
    
}
else {
    console.log("You need to pay your amount");
    
}