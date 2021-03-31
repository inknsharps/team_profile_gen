// General employee questions array
const questions = [
    {
        type: "list",
        name: "employee_role",
        message: "Please select a role for this employee.",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        type: "input",
        name: "employee_name",
        message: "Please input the employee's name."
    },
    {
        type: "input",
        name: "employee_id",
        message: "Please input the employee's ID."
    },
    {
        type: "input",
        name: "employee_email",
        message: "Please input the employee's email."
    }
];

// Question for only managers
const managerQuestion = [
    {
        type: "input",
        name: "employee_office",
        message: "Please input the manager's office number."
    }
];

// Question for only engineers
const engineerQuestion = [
    {
        type: "input",
        name: "employee_github",
        message: "Please input the engineer's Github username."
    }
];

// Question for only interns
const internQuestion = [
    {
        type: "input",
        name: "employee_school",
        message: "Please input the intern's current school."
    }
];

// Question to add another employee
const addAnotherEmployee = [
    {
        type: "confirm",
        name: "addAnother",
        message: "Add another employee?",
        default: true
    }
]

module.exports = {
    questions: questions,
    managerQuestion: managerQuestion,
    engineerQuestion: engineerQuestion,
    internQuestion: internQuestion,
    addAnotherEmployee: addAnotherEmployee
}