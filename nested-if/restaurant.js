// Restaurant Bill Calculator using nested-If
/* Calculate total bill with these rules:
● Base bill amount provided
● If bill is over $50, check party size
● Party of 6+ people: automatic 18% gratuity
● Party under 6: customer decides tip (15%, 18%, or 20%)
● If bill is $50 or under: suggest 15% tip
● Check if customer has rewards card
● Rewards card: 10% discount on bill before tip
● Display final total */

const prompt = require('prompt-sync')();
let bill = parseInt(prompt("What is the bill amount? $"));
let rewards = prompt("Do you have a rewards card? ");

if (rewards === "Yes") {
    bill *= 0.9
    console.log("Your discounted amount is $" + bill)
}
if (bill > 0) {
    if (bill > 50) {
        let party = parseInt(prompt("How many people in your party? "));
        if (party >= 6) {
              bill = bill *= 1.18;
        console.log("Automatic 18% gratuity")
        } else if (party < 6) {
            let choose = prompt("Please select tip amount: (15%, 18%, or 20%) ")
            if (choose === "15%") {
            bill = bill *= 1.15
        } else if (choose === "18%") {
            bill = bill *= 1.18
        } else if (choose === "20%") {
            bill = bill *= 1.20
        } else {
            console.log("Invalid tip option")
        }
        } 
    } else if (bill <= 50) {
        console.log("15% tip suggested")
         let choose = prompt("Please select tip amount: (15%, 18%, or 20%) ")
            if (choose === "15%") {
            bil = bill *= 1.15
        } else if (choose === "18%") {
            bill = bill *= 1.18
        } else if (choose === "20%") {
            bill = bill *= 1.20
        } else {
            console.log("Invalid tip option")
        }
    }  
    console.log("Bill total is $" + bill.toFixed(2))
} else {
    console.log("Invalid input")
}