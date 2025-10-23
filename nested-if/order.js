// E-commerce Order Processing using nested-If
/* Process an order with multiple checks:
● Check if item is in stock
● If in stock, check payment method (credit card or PayPal)
● For credit card, verify card validity
● For PayPal, check if account is verified
● If payment approved, check shipping address
● Domestic: Process immediately
● International: Check if country is supported
● Calculate final price with shipping */

const prompt = require('prompt-sync')();
let stock = prompt("Is the item in stock? (Yes or No) ");
let price = 100

if (stock === "Yes") {
    let payment = prompt("What's the payment form? (Credit card or PayPal) ");
    if (payment === "Credit card") {
        let card = prompt("Is your card valid? (Yes or No) ");
        if (card === "Yes") {
            let shipping = prompt("Is shipping International or Domestic? ");
            if (shipping === "Domestic") {
                price = price + 10
                console.log("Proccessed. Your total is $" + price)
            } else if (shipping === "International") {
                let country = prompt("What country? ")
            if (country === "Canada") {
                price = price + 20
                console.log("Proccessed. Your total is $" + price)
            } else {
                console.log("Country not supported")
            }
            } else {
                console.log("Invalid input")
            }
        } else {
            console.log("Payment declined - card not valid")
        }
    } else if (payment === "PayPal" || payment === "Paypal") {
        payPal = prompt("Is your PayPal account verified? (Yes or No) ")
            if (payPal === "Yes") {

                let shipping = prompt("Is shipping International or Domestic? ");
            if (shipping === "Domestic") {
                price = price + 10
                console.log("Proccessed. Your total is $" + price)
            } else if (shipping === "International") {

                let country = prompt("What country? ")
            if (country === "Canada") {
                price = price + 20
                console.log("Proccessed. Your total is $" + price)
            } else {
                console.log("Country not supported")
            }
            } else {
                console.log("Invalid input")
            }
            } else {
                console.log("Payment declined - PayPal account unverified")
            }
    } else {
        console.log("Invalid form of payment")
    }  
} else {
   console.log("Item not in stock")
}
        