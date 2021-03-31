// Import variables
const classes = require("./lib/classes.js");
const ask = require("./lib/questions.js");
const inquirer = require("inquirer");

// Employee array that will get values pushed into it from the prompts
let employeeArray = [];

// Terminal prompt logic flow
function askInit(){
    inquirer.prompt(ask.questions)
        .then((response) => {
            const newEmployee = response;
            // If manager was selected, add the employee_office to the newEmployee object with a new prompt
            if (newEmployee.employee_role === "Manager"){
                inquirer.prompt(ask.managerQuestion)
                    .then((response) => {
                        newEmployee.employee_office = response.employee_office;
                        console.log(newEmployee);
                        return newEmployee;
                    })
            }
            // If engineer was selected, add the employee_github to the newEmployee object with a new prompt
            if (newEmployee.employee_role === "Engineer"){
                inquirer.prompt(ask.engineerQuestion)
                    .then((response) => {
                        newEmployee.employee_github = response.employee_github;
                        console.log(newEmployee);
                        return newEmployee;
                    })
            }
            if (newEmployee.employee_role === "Intern"){
                inquirer.prompt(ask.internQuestion)
                    .then((response) => {
                        newEmployee.employee_school = response.employee_school;
                        console.log(newEmployee);
                        return newEmployee;
                    })
            }
            return newEmployee;
        })
        .then((response) => {
            employeeArray.push(response);
            console.log("Current employee array is:", employeeArray);
            inquirer.prompt(ask.addAnotherEmployee)
                .then((response) => {
                    if (response.addAnother === true){
                        askInit();
                    } else {
                        console.log("Thanks for ending my suffering")
                    }
                })
        })
}

askInit();