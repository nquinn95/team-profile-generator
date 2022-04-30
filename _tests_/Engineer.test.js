//require the employee from lib folder

const { exportAllDeclaration } = require("@babel/types");
const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer instance", () => {
    const example = new Engineer();
    expect(typeof(example)).toBe('object');
});
test("Can construct an Engineer from super Employee", () => {
    const exName = "Tommy";
    const exId = 2;
    const exEmail = "email@test2.com";
    const example = new Engineer(exName, exId, exEmail)
    expect(example.name).toBe(exName) && expect(example.exId).toBe(id) && expect(example.email).toBe(exEmail);
});

test("Test that getGithub() returns github", () => {
    const exGit = "new34"
    const example = new Engineer("Juno", 5, "test@example.com", exGit)
    expect(example.getGitHub()).toBe(exGit);
});

test("Test that getRole() returns Engineer", () => {
    const role = "Engineer";
    const example = new Engineer("Juno", 10, "test@example.com", "test123")
    expect(example.getRole()).toBe(role);
});









// const { toBindingIdentifierName } = require("@babel/types");
// const { isTypedArray } = require("util/types");
// const { describe } = require("yargs");
// const Employee = require("../lib/employee");

// //test can begin employee instance
// describe("Employee", () => {
//     test("Begin the instance of employee", () => {
//         const e = new Employee();
//         expect(e).toBe("object")
//         // expect(typeof(e))>toBindingIdentifierName("object");

//     });
// // isTypedArray("can set a name with a constructor arguments", () => {
// //     const name = "Rocket";
// //     const e = new Employee(name);
// //     expect(e.name).toBe(name);
// // })
// })



