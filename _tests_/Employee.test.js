const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const example = new Employee();
    expect(typeof(example)).toBe('object');
});

test("Can Construct Employee name", () => {
    const exName = 'Nick'
    const example = new Employee(exName);
    expect(example.name).toBe(exName);
});
test("Can construct employee ID", () => {
    const exID = 45;
    const example = new Employee("dummy", exID);
    expect(example.id).toBe(exID);
});
test("Can construct Employee Email", () => {
    const exEmail = 'test@email.com';
    const example = new Employee("John", 12, exEmail);
    expect(example.email).toBe(exEmail);
});
test("Can get name with employee method getName()", () => {
    const example = new Employee('Nick', 64, 'test@email.com')
    expect(example.getName()).toBe('Nick');
});
test("Can get Role with Employee method gerRole()", () => {
    const example = new Employee();
    expect(example.getRole()).toBe("Employee");
})