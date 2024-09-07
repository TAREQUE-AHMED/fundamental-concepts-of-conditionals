/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let ticketPrice = 800;
let age = 12;
let isStudents = false;
if (age < 10) {
    console.log("You ticket price is free");
    
}
else {
    if (isStudents === true) {
        const discount = ticketPrice * 50 / 100;
        const payAble= ticketPrice-discount
        console.log(payAble);
        
    }
    else {
        if (age >= 60) {
            const discount = ticketPrice * 15 / 100;
            const payAble = ticketPrice - discount;
            console.log(payAble);
            
            
        }
        else {
            console.log('Regular ticket fare 800 tk');
            
        }
    }
    
}
