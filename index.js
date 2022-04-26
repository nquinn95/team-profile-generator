//including inquirer
const inquirer = require('inquirer');

//including class
const Employee = require('./lib/Employee');



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
.then((data) => {
    console.log(data.manName)
    console.log(data.manID)
    console.log(data.manEmail)
    console.log(data.manOffice)
})










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