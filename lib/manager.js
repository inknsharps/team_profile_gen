const Employee = require("./employee.js");

// Manager subclass, which changes the role to Manager and adds an office number
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.role = "Manager";
        this.officeNumber = officeNumber; 
    }
}

module.exports = Manager;