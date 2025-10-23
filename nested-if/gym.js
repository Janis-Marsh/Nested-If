// Gym Membership Pricing using nested-If
/* Calculate monthly membership fee:
● Base price: $50/month
● Check membership type (Basic, Premium, VIP)
● Basic: No change
● Premium: +$30, includes group classes
● VIP: +$70, includes personal trainer
● Check if student (must be under 25)
● Student discount: 20% off total
● Check if signing up for annual contract
● Annual contract: 2 months free (calculate as discount)
● If premium or VIP with annual contract: Free gym bag */

const prompt = require('prompt-sync')();
let membership = prompt("What membership would you like? (Basic, Premium, VIP) ");
let base = 50
let price

if (membership === "Basic") {
    price = base
    let student = parseInt(prompt("How old ar you? "));
    if (student <= 25) {
        price = base *= 0.8
        console.log("20% student discount")
    } else if (student > 25) {
        console.log("No student discount")
    } else {
        console.log("Invalid")
    } let annual = prompt("Would you like to sign up for our annual contract? (Yes or No) ")
    if (annual === "Yes") {
        price = price *= 10
        console.log("2 months free for signing up with our annual contract")
    } else if (annual == "No") {
        console.log("No annual contract discount")
    } else {
        console.log("Invalid")
    }
} else if (membership === "Premium") {
    price = base  += 30
    let student = parseInt(prompt("How old ar you? "));
    if (student <= 25) {
        price = base *= 0.8
        console.log("20% student discount")
    } else if (student > 25) {
        console.log("No student discount")
    } else {
        console.log("Invalid")
    } let annual = prompt("Would you like to sign up for our annual contract? (Yes or No) ")
    if (annual === "Yes") {
        price = price *= 10
        console.log("2 months free for signing up with our annual contract")
        console.log("Free gym bag with membership")
    } else if (annual == "No") {
        console.log("No annual contract discount")
    } else {
        console.log("Invalid")
    }
    console.log("Group classes included")
} else if (membership === "VIP") {
    price = base  += 70
    let student = parseInt(prompt("How old ar you? "));
    if (student <= 25) {
        price = base *= 0.8
        console.log("20% student discount")
    } else if (student > 25) {
        console.log("No student discount")
    } else {
        console.log("Invalid")
    } let annual = prompt("Would you like to sign up for our annual contract? (Yes or No) ")
    if (annual === "Yes") {
        price = price *= 10
        console.log("2 months free for signing up with our annual contract")
        console.log("Free gym bag with membership")
    } else if (annual == "No") {
        console.log("No annual contract discount")
    } else {
        console.log("Invalid")
    }
    console.log("Personal trainer included")
} else {
    console.log("Invalid")
}
console.log("Your membership is $" + price.toFixed(2))