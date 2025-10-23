// loan eligibilty checker using nested If
/* Check if someone is eligible for a loan:
● Age must be 21 or above
● If age requirement met, check income
● Income must be at least $30,000
● If income requirement met, check credit score
● Credit score must be 650 or above
● Print "Approved" or specific rejection reason */

const prompt = require('prompt-sync')();
let age = parseInt(prompt("Enter age "));
let income = parseInt(prompt("Enter income "));
let credit = parseInt(prompt("Enter credit score "));

if (age >= 21) {
    if (income >= 30000) {
        if (credit  >= 650) {
            console.log("Approved")
        } else {
           console.log("Rejected - your credit score is too low")
        }
    } else {
        console.log("Rejected - your income is too low")
    }
    
} else {
    console.log("Not eligible - your not old enough")
}