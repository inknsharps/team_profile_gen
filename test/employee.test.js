const Employee = require("../lib/employee.js");

describe("Employee", () => {
    describe("Employee Class Properties and Methods", () => {
        it("Should be an instance of the Employee class when initialized with new.", () => {
            const employee = new Employee("David", "1", "david@email.com");
            expect(employee instanceof Employee).toBeTruthy();
        })
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