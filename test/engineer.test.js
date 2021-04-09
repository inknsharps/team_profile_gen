const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
    describe("Engineer Class Properties and Methods", () => {
        it("Should be an instance of the Engineer class when initialized with new.", () => {
            const employee = new Engineer("David", "1", "david@email.com", "dave_dash");
            expect(employee instanceof Engineer).toBeTruthy();
        })
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