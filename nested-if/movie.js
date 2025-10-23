// Movie ticket Pricing using nested-If
/* Create a ticket pricing system:
● If it's a weekend, check the time
● Matinee (before 5 PM): $10
● Evening (5 PM or after): $15
● If it's a weekday, flat rate of $8
● Then apply a senior discount (age 65+): additional 20% off */

const prompt = require('prompt-sync')();
let day = prompt("What day is it? ");
let time = parseInt(prompt("Enter time "));
let age = parseInt(prompt("Enter age "));

if (day === "Sunday" || day === "Saturday") {
if (age >= 65 && time >=5) {
    console.log("Evening - Senior discount applied: $12")
}
else if (age >= 65 && time < 5) {
    console.log("Matinee - Senior discount applied: $8")
 } else if (time < 5 ) {
    console.log("Matinee: $10")
} 
else if (time >= 5) {
    console.log("Evening: $15")
} 
} else {
    console.log("Weekday: $8")
}

