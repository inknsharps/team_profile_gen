const Employee = require("./employee");

// Engineer subclass, which changes the role to Engineer, adds a github username parameter, and adds a function to return that github username parameter
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;