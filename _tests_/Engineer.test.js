//require the employee from lib folder
const { toBindingIdentifierName } = require("@babel/types");
const { isTypedArray } = require("util/types");
const { describe } = require("yargs");
const Employee = require("../lib/employee");

//test can begin employee instance
describe("Employee", () => {
    isTypedArray("Begin the instance of employee", () => {
        const e = new Employee();
        //expect (new Emplyee(e)).toBe("object")
        expect(typeof(e))>toBindingIdentifierName("object");

    });
isTypedArray("can set a name with a constructor arguments", () => {
    const name = "Rocket";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})
})