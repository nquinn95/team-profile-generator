const Manager = require('../lib/Manager');


test("Can instatiate Manager instance", () => {
    const example = new Manager();
    expect(typeof(example)).toBe('object');
})

test("All parametrs of manager return proper value", () =>{
    const exName = "Nick";
    const exId = 99;
    const exEmail = "test@email.com";
    const exOffice = 113;
    const example = new Manager(exName, exId, exEmail, exOffice);

    expect(example.name).toBe(exName) && expect(example.id).toBe(exId) && expect(example.email).toBe(exEmail) && expect(example.officeNumber).toBe(exOffice);    
});

test("Test that getOfficeNumber returns the correct value", () => {
    const exName = "Nick";
    const exId = 99;
    const exEmail = "test@email.com";
    const exOffice = 113;
    const example = new Manager(exName, exId, exEmail, exOffice);
    expect(example.getOfficeNumber()).toBe(exOffice);
});

test("Test that getRole value matches Manager", () => {
    const example = new Manager();
    expect(example.getRole()).toBe('Manager');
});