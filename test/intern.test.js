const Intern = require("../lib/intern.js");

describe("Intern", () => {
    describe("Intern Class Properties and Methods", () => {
        it("Should be an instance of the Intern class when initialized with new.", () => {
            const employee = new Intern("David", "1", "david@email.com", "Awesome University");
            expect(employee instanceof Intern).toBeTruthy();
        })
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