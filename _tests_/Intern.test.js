const Intern = require('../lib/Intern');

test ("Test that intern is an object", () => {
    const exInt = new Intern();
    expect(typeof(exInt)).toBe('object')
});
test("Test that constructing an intern works properly", () => {
    const intName = "Nick"
    const intId = 20;
    const intEmail = "test@email.com"
    const intSchool = "Hofstra"
    const exInt = new Intern(intName, intId, intEmail, intSchool)
    expect(exInt.name).toBe(intName) && expect(exInt.id).toBe(intId) && expect(exInt.email).toBe(intEmail) && expect(exInt.school).toBe(intSchool); 
});
test("Test that getSchool returns the correct output", () => {
    const intName = "Nick"
    const intId = 20;
    const intEmail = "test@email.com"
    const intSchool = "Hofstra"
    const exInt = new Intern(intName, intId, intEmail, intSchool)
    expect(exInt.getSchool()).toBe(intSchool)
});
test("test that getRole returns string intern", () => {
    const exInt = new Intern();

    expect(exInt.getRole()).toBe('Intern');
});

