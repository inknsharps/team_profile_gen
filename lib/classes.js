// Employee class, with the base methods
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

// const employee = new Employee("Neil", "NC", "nc@gmail.com");
// console.log(employee);

// Manager subclass, which changes the role to Manager and adds an office number
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.role = "Manager";
        this.officeNumber = officeNumber; 
    }
}

// const manager = new Manager("Neil", "NC", "nc@gmail.com", "100");
// console.log(manager);

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

// const engineer = new Engineer("Neil", "NC", "nc@gmail.com", "inknsharps");
// console.log(engineer);
// console.log(engineer.getGithub());

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

// const intern = new Intern("Neil", "NC", "nc@gmail.com", "Juilliard");
// console.log(intern);
// console.log(intern.getSchool());

module.exports = {
    Employee: Employee,
    Manager: Manager,
    Engineer: Engineer,
    Intern: Intern
}
