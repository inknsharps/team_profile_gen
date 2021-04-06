const Employee = require("./employee");

// Intern subclass, which changes the role to Intern, adds a school parameter, and adds a function to return that school
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.role = "Intern";
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;