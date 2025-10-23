// Hotel pricing system using nested-If
/* Calculate hotel room price:
● Base price: $100/night
● Check room type (Standard, Deluxe, Suite)
● Deluxe: +$50, Suite: +$150
● Check season (Peak, Regular, Off-peak)
● Peak season: 50% increase on room price
● Off-peak: 20% discount on room price
● Check length of stay
● 7+ nights: 15% discount on total
● 14+ nights: 25% discount on total
● Check loyalty status (None, Silver, Gold, Platinum)
● Silver: Free breakfast ($20 value per night)
● Gold: Free breakfast + room upgrade to next tier
● Platinum: Free breakfast + free parking + 10% additional discount
● Calculate total for entire stay */

const prompt = require('prompt-sync')();
let room = prompt("What room would you like? (Standard, Deluxe, Suite) ");
let base = 100;
let price 

 if (room === "Standard") {
    price = base
    let duration = parseInt(prompt("How many days will you be staying? "));
    if (duration >= 7) {
        price = base *= 0.85;
        price = base *= duration
    } else if (duration >= 14) {
        price = base *= 0.75
        price = base *= duration
    } else if (duration < 7) {
        price = base *= duration
    } else {
        console.log("Invalid")
    }
    let season = prompt("What season will you be staying with us? (Peak, Regular, Off-peak) ")
        if (season === "Peak") {
            price = base *= 1.5
        } else if (season === "Off-peak") {
            price = base *= 0.8;
        } else if (season === "Regular") {
            price = base
        } else {
            console.log("Invalid")
        }
        let loyalty = prompt("What is your loyalty status? (None, Silver, Gold, Platinum) ");
        if (loyalty === "Platinum") {
            console.log("Free breakfast + free parking + 10% off")
            price = base *= 0.9
        } else if (loyalty === "Gold") {
            console.log("Free breakfast + room upgrade to next tier")
        } else if (loyalty === "Silver") {
            console.log("Free breakfast")
        } else if (loyalty === "None") {
            console.log("No loyalty rewards")
        } else {
            console.log("Invalid")
        }
    } else if (room === "Deluxe") {
        price = base += 50
    let duration = parseInt(prompt("How many days will you be staying? "));
    if (duration >= 7) {
        price = base *= 0.85;
        price = base *= duration
    } else if (duration >= 14) {
        price = base *= 0.75
        price = base *= duration
    } else if (duration < 7) {
        price = base *= duration
    } else {
        console.log("Invalid")
    }
    let season = prompt("What season will you be staying with us? (Peak, Regular, Off-peak) ")
        if (season === "Peak") {
            price = base *= 1.5
        } else if (season === "Off-peak") {
            price = base *= 0.8;
        } else if (season === "Regular") {
            price = base
        } else {
            console.log("Invalid")
        }
        let loyalty = prompt("What is your loyalty status? (None, Silver, Gold, Platinum) ");
        if (loyalty === "Platinum") {
            console.log("Free breakfast + free parking + 10% off")
            price = base *= 0.9
        } else if (loyalty === "Gold") {
            console.log("Free breakfast + room upgrade to next tier")
        } else if (loyalty === "Silver") {
            console.log("Free breakfast")
        } else if (loyalty === "None") {
            console.log("No loyalty rewards")
        } else {
            console.log("Invalid")
        }
    } else if (room === "Suite") {
        price = base += 150
    let duration = parseInt(prompt("How many days will you be staying? "));
    if (duration >= 7) {
        price = base *= 0.85;
        price = base *= duration
    } else if (duration >= 14) {
        price = base *= 0.75
        price = base *= duration
    } else if (duration < 7) {
        price = base *= duration
    } else {
        console.log("Invalid")
    }
    let season = prompt("What season will you be staying with us? (Peak, Regular, Off-peak) ")
        if (season === "Peak") {
            price = base *= 1.5
        } else if (season === "Off-peak") {
            price = base *= 0.8;
        } else if (season === "Regular") {
            price = base
        } else {
            console.log("Invalid")
        }
        let loyalty = prompt("What is your loyalty status? (None, Silver, Gold, Platinum) ");
        if (loyalty === "Platinum") {
            console.log("Free breakfast + free parking + 10% off")
            price = base *= 0.9
        } else if (loyalty === "Gold") {
            console.log("Free breakfast + room upgrade to next tier")
        } else if (loyalty === "Silver") {
            console.log("Free breakfast")
        } else if (loyalty === "None") {
            console.log("No loyalty rewards")
        } else {
            console.log("Invalid")
        }
    }
    else {
        console.log("Invalid")
    } 
    console.log("Your total is $" + price.toFixed(2))