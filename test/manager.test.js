const Manager = require("../lib/manager.js");

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