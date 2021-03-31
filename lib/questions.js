const questions = [
    {
        type: "list",
        name: "employee_role",
        message: "Please select a role for this employee.",
        choices: [
            "Employee",
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

const managerQuestion = [
    {
        type: "input",
        name: "employee_office",
        message: "Please input the manager's office number."
    }
];

const engineerQuestion = [
    {
        type: "input",
        name: "employee_github",
        message: "Please input the engineer's Github username."
    }
];

const internQuestion = [
    {
        type: "input",
        name: "employee_school",
        message: "Please input the intern's current school."
    }
];

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