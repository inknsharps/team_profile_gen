// Import variables
const classes = require("./lib/classes.js");
const ask = require("./lib/questions.js");
const templates = require("./src/renderhtml.js");
const inquirer = require("inquirer");
const fs = require("fs");

// Employee objects array
let employeeObjects = [];
// Employee data array that will get values pushed into it from the prompts
let employeeData = [];
// Declare employee cards array
let employeeCards = [];

// Function to make a new object class for each role
function makeProfile(role, name, id, email, extra){
    switch (role){
        case "Manager":
            let newManager = new classes.Manager(name, id, email, extra);
            return newManager;
        case "Engineer":
            let newEngineer = new classes.Engineer(name, id, email, extra);
            return newEngineer;
        case "Intern":
            let newIntern = new classes.Intern(name, id, email, extra);
            return newIntern;
    }
}

// Terminal prompt logic flow
async function askInit(){
    // Set the returned inquirer prompt object to const newEmployee
    const newEmployee = await inquirer.prompt(ask.questions);

    // Switch statement that adds an additional property to the object, based on the role
    switch (newEmployee.employee_role){
        case "Manager":
            await inquirer.prompt(ask.managerQuestion)
            .then((response) => {
                newEmployee.employee_extra = response.employee_office;
            })
            .catch((error) => {
                if (error) throw error;
            })
            break;
        case "Engineer":
            await inquirer.prompt(ask.engineerQuestion)
            .then((response) => {
                newEmployee.employee_extra = response.employee_github;
            })
            .catch((error) => {
                if (error) throw error;
            })
            break;
        case "Intern":
            await inquirer.prompt(ask.internQuestion)
            .then((response) => {
                newEmployee.employee_extra = response.employee_school;
            })
            .catch((error) => {
                if (error) throw error;
            })
            break;
    }

    // Push the new employee to the employeeData
    employeeData.push(newEmployee);
    console.log("Current employee array is:", employeeData);

    // Ask the user if they would like to add another employee, and loops this function if they say yes, otherwise, proceed with making the html
    await inquirer.prompt(ask.addAnotherEmployee)
        .then((response) => {
            if (response.addAnother === true){
                askInit();
            } else {
                console.log("Generating employee profiles...");
                // For of statement that makes a new employee class object based on the data in employeeData, and pushes it to the employeeObjects array
                for (const index of employeeData){
                    const newProfile = makeProfile(index.employee_role, index.employee_name, index.employee_id, index.employee_email, index.employee_extra);
                    employeeObjects.push(newProfile);
                }
                console.log("Current employee objects array is:", employeeObjects);
                // For of statement that iterates through the array of employee objects, and runs the renderTeamCards function based on the role, and pushes the returned card into the employeeCards array
                for (const index of employeeObjects){
                    let card;
                    switch (index.role){
                        case "Manager":
                            card = templates.renderTeamCards(index.name, index.role, index.id, index.email, index.officeNumber);
                            employeeCards.push(card);
                            break;
                        case "Engineer":
                            card = templates.renderTeamCards(index.name, index.role, index.id, index.email, index.github);
                            employeeCards.push(card);
                            break;
                        case "Intern":
                            card = templates.renderTeamCards(index.name, index.role, index.id, index.email, index.school);
                            employeeCards.push(card);
                            break;
                    }
                }
                console.log("Employee cards HTML data is:", employeeCards);
                console.log("Rendering HTML...")

                // Join together the employeeCards array data, and make a HTML file from that data
                let employeeCardsHTML = employeeCards.join("");
                let finalHTMLData = templates.renderBoilerplateHTML(employeeCardsHTML);
                fs.writeFileSync("./dist/teams.html", finalHTMLData);
            }
        })
        .catch((error) => {
            if (error) throw error;
        })
}

askInit();