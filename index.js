const inquirer = require('inquirer');

const mainMenu = () => {
    inquirer
        .prompt ({
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                'View all departments',
                'View all roles', 
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Quit'
            ],
        })
        .then(answer => {
        switch (answer['choice']) {
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Quit':
                quit();
                break;
        }
    })
}

module.exports = { mainMenu }
const { viewAllEmployees, addEmployee, } = require('./lib/employees');
const { viewAllDepartments, addDepartment } = require('./lib/departments');
const { viewAllRoles, addRole } = require('./lib/roles');

mainMenu()