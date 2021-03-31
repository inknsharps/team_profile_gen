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

const employee = new Employee("Neil", "NC", "nc@gmail.com");
console.log(employee);

// Manager Subclass, whicih changes the role to Manager and adds an office number
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.role = "Manager"
        this.officeNumber = officeNumber; 
    }
}

const manager = new Manager("Neil", "NC", "nc@gmail.com", "100");
console.log(manager);