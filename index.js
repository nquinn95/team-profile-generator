//including inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML')
//including class
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

inquirer.prompt([
{
    type: "input",
    name: "manName",
    message: "What is your name? "
},
{
    type:"input",
    name: "manID",
    message: "What is your ID? "
},
{
    type: "input",
    name: "manEmail",
    message: "What is your email?"
},
{
    type: "input",
    name: "manOffice",
    message: "What is your office number?"
}])
.then((answers) => {
    var manInput = new Manager(
        answers.manName,
        answers.manId,
        answers.manEmail,
        answers.manOffice
    );
    team.push(manInput);
    buildTeam();
})


const addEngineer = function() {
    inquirer
        .prompt([
            {
            type: "input",
            name: "engName",
            message: "What is their name? ",
            },
            {
                type: "input",
                name: "engId",
                message: "What is their ID? ",
            },
            {
                type: "input",
                name: "engEmail",
                message: "What is their email? ",
            },
            {
                type: "input",
                name: "engGit",
                message: "What is their gitHub? ",
            },
        ])
        .then((answers) => {
            var engInput = new Engineer(
                answers.engName,
                answers.engId,
                answers.engEmail,
                answers.engGit,
            );
            
            team.push(engInput);
            buildTeam();
        });
};

function addIntern(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "intName",
            message: "What is their name? "
        },
        {
            type: "input",
            name: "intId",
            message: "What is their ID? "
        },
        {
            type: "input",
            name: "intEmail",
            message: "What is their email? "
        },
        {
            type: "input",
            name: "intSchool",
            message: "What is their school? "
        }
    ])
    .then((answers) => {
        var intInput = new Intern(
            answers.intName,
            answers.intId,
            answers.intEmail,
            answers.intSchool
        );

        team.push(intInput);
        buildTeam();
    });
}




function buildTeam(){
    inquirer
    .prompt([
        {
        type: "list",
        name: "teamMem",
        message: "What would you like to do next? ",
        choices: ["Add Engineer", "Add Intern", "Finish"]
        }
    ])
    .then((data) => {
        if (data.teamMem == "Add Engineer"){
            addEngineer();
        }
        else if (data.teamMem == "Add Intern") {
            addIntern(); 
        }
        else {
            const html = generateHTML(team);
            fs.writeFile(`./dist/index.html`, html, (err) =>
            err ? console.log(err) : console.log("Success!")
            );
        }
    });
};


// const baseQues = [
// {
//     type: "input",
//     name: "empName",
//     message: "What is the employee's name? "
// },
// {
//     type: "input",
//     name: "empID",
//     message: "What is their emplyee ID? "
// }
// ]


// const managerQues = [{
//     type: "input",
//     name: "officeNum",
//     message: "What is their office number?"
// }        
// ]
// //do an inquirer prompt and then check to see what the employee's title.  
// //then do a switch case depending on the employee title

// function roleQuestion() {inquirer.prompt({
//     type: "input",
//     name: "empRole",
//     message: "Please choose the employee's role: "
// })
//     .then((data) => {
//         console.log(data.empRole)
//         return data.empRole;
//     })
// }


// const roles =   roleQuestion();

// bigFunc(roles) => {


// }