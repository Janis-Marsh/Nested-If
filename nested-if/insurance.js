// Insurance Premium Calculator using nested-If
/* Calculate car insurance premium:
● Base premium: $1000
● If age under 25, add $500
● If age under 25 AND has accidents, add another $300
● If age 25 or above, check years of experience
● Less than 5 years experience: add $200
● 5+ years experience with no accidents: subtract $150
● If premium exceeds $1500, check if multiple cars
● Multiple cars: 10% discount on total */

const prompt = require('prompt-sync')();
let age = parseInt(prompt("How old are you? "));
let base = 1000
let result 

if (age > 18) {
    if (age < 25) {
        result = base += 500;
        let accidents = prompt("Have you been in any accidents? ");
        if (accidents === "Yes" && age < 25) {
            result = base += 300; 
            let cars = prompt("Do you have multiple cars? ")
            if (base > 1500 && cars === "Yes") {
                result = base *= 0.9
            }
        } 
    } else if (age >= 25) {
        let experience = parseInt(prompt("How many years of driving experience do you have? "));
        let accidents = prompt("Have you been in any accidents? ");
    if (experience >= 5 && accidents === "No") {
        result = base -= 150;
    } else if (experience < 5) {
        result = base += 200;
    } 
    } console.log("Your insurance premium is $" + result)
} else {
    console.log("Invalid input")
}