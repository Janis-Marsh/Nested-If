// Job Application Filter using nested-If
/* Filter job applications:
● Check if candidate has required degree
● If yes, check years of experience (minimum 2 years)
● If experience requirement met, check certifications
● Has certifications: "Strong candidate"
● No certifications but 5+ years experience: "Qualified candidate"
● Has degree but less than 2 years: "Entry-level consideration"
● Check if willing to relocate (only matters for strong/qualified
candidates)
● Willing to relocate: Add "Priority review" flag */

const prompt = require('prompt-sync')();
let degree = prompt("Does candidate have required degree? ");

if (degree === "Yes") {
    let experience = parseInt(prompt("How many years of experience does candidate have? "));
    if (experience >= 2) { 
        let certifications = prompt("Does candidate have any certifications? ");
        if (certifications === "Yes") {
            console.log("Strong candidate")
            let relocate = prompt("Is candidate willing to relocate? ")
            if (relocate === "Yes") {
                console.log("Priority review")
            }
        } else if (certifications === "No" && experience >= 5) {
            console.log("Qualified candidate")
            let relocate = prompt("Is candidate willing to relocate? ")
            if (relocate === "Yes") {
                console.log("Priority review")
            }
        } else {
            console.log("Not qualified")
        }
               
    } else {
        console.log("Entry-level consideration")
    }
} else {
    console.log("Not qualified")
}