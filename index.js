// Import variables
const classes = require("./lib/classes.js");
const ask = require("./lib/questions.js");
const inquirer = require("inquirer");

// Employee objects array
let employeeProfiles = [];
// Employee data array that will get values pushed into it from the prompts
let employeeData = [];

// Function to make a new object class for each role
function makeProfile(role, name, id, email, extra){
    if (role === "Manager"){
        let newManager = new classes.Manager(name, id, email, extra);
        return newManager;
    }
    if (role === "Engineer"){
        let newEngineer = new classes.Engineer(name, id, email, extra);
        return newEngineer;
    }
    if (role === "Intern"){
        let newIntern = new classes.Intern(name, id, email, extra);
        return newIntern;
    }
}

// Terminal prompt logic flow
async function askInit(){
    // Set the returned inquirer prompt object to const newEmployee
    const newEmployee = await inquirer.prompt(ask.questions);

    // If manager was selected in the prompts, add the employee_office to the newEmployee object with a new prompt
    if (newEmployee.employee_role === "Manager"){
        await inquirer.prompt(ask.managerQuestion)
            .then((response) => {
                newEmployee.employee_extra = response.employee_office;
            })
            .catch((error) => {
                if (error) throw error;
            })
    }
    // If engineer was selected int the prompts, add the employee_github to the newEmployee object with a new prompt
    if (newEmployee.employee_role === "Engineer"){
        await inquirer.prompt(ask.engineerQuestion)
            .then((response) => {
                newEmployee.employee_extra = response.employee_github;
            })
            .catch((error) => {
                if (error) throw error;
            })
    }
    // If intern was selected in the prompts, add the employee_school to the newEmployee object with a new prompt
    if (newEmployee.employee_role === "Intern"){
        await inquirer.prompt(ask.internQuestion)
            .then((response) => {
                newEmployee.employee_extra = response.employee_school;
            })
            .catch((error) => {
                if (error) throw error;
            })
    }
    // Push the new employee to the employeeData
    employeeData.push(newEmployee);
    console.log("Current employee array is:", employeeData);
    // Ask the user if they would like to add another employee, and loops this function if they say yes
    await inquirer.prompt(ask.addAnotherEmployee)
        .then((response) => {
            if (response.addAnother === true){
                askInit();
            } else {
                console.log("Generating employee profiles...");
                // For loop that makes a new employee class object based on the data in employeeData, and pushes it to the employeeProfiles array
                for (let i = 0; i < employeeData.length; i++){
                    const newProfile = makeProfile(employeeData[i].employee_role, employeeData[i].employee_name, employeeData[i].employee_id, employeeData[i].employee_email, employeeData[i].employee_extra)
                    employeeProfiles.push(newProfile);
                }
                console.log(employeeProfiles)
            }
        })
        .catch((error) => {
            if (error) throw error;
        })
}

askInit();