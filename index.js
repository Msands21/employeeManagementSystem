const { prompt } = require("inquirer");
const db = require("./db");
const mysql = require('mysql2');
require("console.table");

// Inquirer here
function mainMenu() {
    prompt ([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View ALL Employees",
                    value: "VIEW_EMPLOYEES"
                },
                //View Employees
                // View Departments
                //Vieew Roles
                //Add Employee
                //Add Department 
                //Update Employee Role
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choices = res.choices;
        //Call appropriate funchtion based on user choice
        //Organize? if conditional / switch cases
    })
}

// Conditional statement here - call corresponding function

// async function viewEmployees() {
    //let employees = await db.findAllEmployees();
    //console.table(employees);
//}

function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees)
    })
    .then(() => mainMenu());
}

function quit() {
    console.log("Goodbye!");
    process.exit();
};