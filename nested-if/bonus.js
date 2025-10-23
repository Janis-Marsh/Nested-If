// Employee bonus calculator using nested-If
/* Calculate year-end bonus:
● Base bonus: $1000
● Check years of service: 5+ years get 50% increase
● If 5+ years, check performance rating (1-5)
● Rating 5: Additional $2000
● Rating 4: Additional $1000
● Rating 3 or below: No performance bonus
● If less than 5 years, only get performance bonus if rating is 5
● Check if department head: Add 25% to final bonus */

const prompt = require('prompt-sync')();
let years = parseInt(prompt("Enter years of service "));
let performance = parseInt(prompt("Enter performance rating (1-5) "));
let department = prompt("Are you an department head? ");
let bonus = 1000;
let result

if (years >= 1) {
    if (years >= 5) {
        bonus = bonus *= 1.5
        if (performance === 5) {
            result = bonus += 2000
        } else if (performance === 4) {
            result = bonus += 1000
        } else {
            console.log("No performance bonus")
        } 
        
        } else if (years < 5) {
            if (performance === 5) {
                 result = bonus += 2000
            } else {
                 result = bonus
            }
            } if (department === "Yes") {
            result = bonus *= 1.25 
        }      
} 
    
 console.log("Your bonus is $" + result)