const { Employee, Manager, Engineer, Intern } = require("../lib/classes");
const classes = require("../lib/classes");

describe("Employee", () => {
    describe("Employee Class Properties and Methods", () => {
        it("Should have properites of name, id, email, and the default employee role.", () => {
            const employee = new Employee("David", "1", "david@email.com");
            expect(employee.name).toEqual("David");
            expect(employee.id).toEqual("1");
            expect(employee.email).toEqual("david@email.com");
            expect(employee.role).toEqual("Employee");
        });
        it("Should have the methods of getName, getId, getEmail, and getRole.", () => {
            const employee = new Employee("David", "1", "david@email.com");
            expect(employee.getName).not.toBe(undefined);
            expect(employee.getId).not.toBe(undefined);
            expect(employee.getEmail).not.toBe(undefined);
            expect(employee.getRole).not.toBe(undefined);
        });
        test("Functionality of getName, getId, getEmail and getRole methods.", () => {
            const employee = new Employee("David", "1", "david@email.com");
            expect(employee.getName()).toEqual("David");
            expect(employee.getId()).toEqual("1");
            expect(employee.getEmail()).toEqual("david@email.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});

describe("Manager", () => {
    describe("Manager Class Properties and Methods", () => {
        it("Should have properites of name, id, email, the manager role and office number.", () => {
            const employee = new Manager("David", "1", "david@email.com", "Office 777");
            expect(employee.name).toEqual("David");
            expect(employee.id).toEqual("1");
            expect(employee.email).toEqual("david@email.com");
            expect(employee.officeNumber).toEqual("Office 777");
            expect(employee.role).toEqual("Manager");
        });
        it("Should have the methods of getName, getId, getEmail, and getRole.", () => {
            const employee = new Manager("David", "1", "david@email.com","Office 777");
            expect(employee.getName).not.toBe(undefined);
            expect(employee.getId).not.toBe(undefined);
            expect(employee.getEmail).not.toBe(undefined);
            expect(employee.getRole).not.toBe(undefined);
        });
        test("Functionality of getName, getId, getEmail and getRole methods.", () => {
            const employee = new Manager("David", "1", "david@email.com", "Office 777");
            expect(employee.getName()).toEqual("David");
            expect(employee.getId()).toEqual("1");
            expect(employee.getEmail()).toEqual("david@email.com");
            expect(employee.getRole()).toEqual("Manager");
        });
    });
});

describe("Engineer", () => {
    describe("Engineer Class Properties and Methods", () => {
        it("Should have properites of name, id, email, the engineer role, and GitHub username.", () => {
            const employee = new Engineer("David", "1", "david@email.com", "dave_dash");
            expect(employee.name).toEqual("David");
            expect(employee.id).toEqual("1");
            expect(employee.email).toEqual("david@email.com");
            expect(employee.github).toEqual("dave_dash");
            expect(employee.role).toEqual("Engineer");
        });
        it("Should have the methods of getName, getId, getEmail, getRole and getGithub.", () => {
            const employee = new Engineer("David", "1", "david@email.com", "dave_dash");
            expect(employee.getName).not.toBe(undefined);
            expect(employee.getId).not.toBe(undefined);
            expect(employee.getEmail).not.toBe(undefined);
            expect(employee.getRole).not.toBe(undefined);
            expect(employee.getGithub).not.toBe(undefined);
        });
        test("Functionality of getName, getId, getEmail getRole and getGithub methods.", () => {
            const employee = new Engineer("David", "1", "david@email.com", "dave_dash");
            expect(employee.getName()).toEqual("David");
            expect(employee.getId()).toEqual("1");
            expect(employee.getEmail()).toEqual("david@email.com");
            expect(employee.getRole()).toEqual("Engineer");
            expect(employee.getGithub()).toEqual("dave_dash");
        });
    });
});

describe("Intern", () => {
    describe("Intern Class Properties and Methods", () => {
        it("Should have properites of name, id, email, the intern role, and school name.", () => {
            const employee = new Intern("David", "1", "david@email.com", "Awesome University");
            expect(employee.name).toEqual("David");
            expect(employee.id).toEqual("1");
            expect(employee.email).toEqual("david@email.com");
            expect(employee.school).toEqual("Awesome University");
            expect(employee.role).toEqual("Intern");
        });
        it("Should have the methods of getName, getId, getEmail, getRole and getSchool.", () => {
            const employee = new Intern("David", "1", "david@email.com", "Awesome University");
            expect(employee.getName).not.toBe(undefined);
            expect(employee.getId).not.toBe(undefined);
            expect(employee.getEmail).not.toBe(undefined);
            expect(employee.getRole).not.toBe(undefined);
            expect(employee.getSchool).not.toBe(undefined);
        });
        test("Functionality of getName, getId, getEmail getRole and getGithub methods.", () => {
            const employee = new Intern("David", "1", "david@email.com", "Awesome University");
            expect(employee.getName()).toEqual("David");
            expect(employee.getId()).toEqual("1");
            expect(employee.getEmail()).toEqual("david@email.com");
            expect(employee.getRole()).toEqual("Intern");
            expect(employee.getSchool()).toEqual("Awesome University");
        });
    });
});