// University Admission System using nested-If
/* Determine admission status:
● Check if GPA is 3.0 or above
● If GPA requirement met, check SAT score (minimum 1200)
● If both met, check extracurricular activities
● If has activities, check if leadership role
● Leadership: "Admitted with Honors"
● No leadership: "Admitted"
● No activities but high SAT (1400+): "Admitted on probation"
● Otherwise: provide specific rejection reason */

const prompt = require('prompt-sync')();
let GPA = parseInt(prompt("Enter GPA "));

if (GPA >= 3.0) {
    let SAT = parseInt(prompt("Enter SAT score "));
    if (SAT >= 1200) {
        let activities = prompt("Did you have any extracurricular activites? (Yes or No) ");
        if (activities === "Yes") {
            let leadership = prompt("Did you have any leadership roles? (Yes or No) ");
            if (leadership === "Yes") {
                console.log("Admitted with Honors")
            } else if (leadership === "No") {
                console.log("Admitted")
            }
        } else if ( SAT >= 1400) {
            console.log("Admitted on probation")
        } else {
            console.log("Rejected - No extracurricular activities")
        }
    } else {
        console.log("Rejected - SAT too low")
    }
} else {
    console.log("Rejected - GPA too low")
}