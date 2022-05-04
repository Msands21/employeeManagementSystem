const inquirer = require('inquirer');
const mysql = require('mysql2');
const { mainMenu } = require('../index')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employee_db'
});

// When view all employees is selected
const viewAllEmployees = () => {
    connection.query(
        // SQL to merge employee info
        `SELECT employee.id, employee.first_name, employee.last_name, roles.title AS role, roles.salary AS salary, manager.first_name AS manager,
        department.name AS department 
        FROM employee
        LEFT JOIN roles
        ON employee.role_id = roles.id
        LEFT JOIN department
        ON roles.department_id = department.id
        LEFT JOIN manager
        ON employee.manager_id = manager.id`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }
            // Results shown in a table
            console.table(results);
            // Show mainMenu
            mainMenu();
        }
    );
};

// When add new employee is selected
const addEmployee = () => {
    connection.query(
        `SELECT * FROM roles`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }
            //array to store info
            let roleArr = [];

            // name of role will be pushed to new role array
            results.forEach(item => {
                roleArr.push(item.name)
            })
            connection.query(
                //SQL to retrieve manager info
                `SELECT * FROM manager`,
                function (err, results, fields) {
                    if (err) {
                        console.log(err.message);
                        return;
                    }

                    // Empty array to store names of managers
                    let managerArr = [];

                    // pushing name of manager from results into new array
                    results.forEach(item => {
                        managerArr.push(item.first_name)
                    });

                    // Prompt the user
                    inquirer
                        .prompt([
                            {
                                type: 'text',
                                name: 'first_name',
                                message: 'What is the employees first name?'
                            },
                            {
                                type: 'text',
                                name: 'last_name',
                                message: 'What is the employees last name?'
                            },
                            {
                                type: 'list',
                                name: 'role',
                                message: 'What will the employees role be?',
                                choices: roleArr
                            },
                            {
                                type: 'list',
                                name: 'manager',
                                message: 'Who will the employees manager be?',
                                choices: managerArr
                            }
                        ])
                        .then((data) => {
                            // obtain new role id from array
                            let role_id;
                            for (i = 0; i < roleArr.length; i++) {
                                if (data.role === roleArr[i]) {
                                    role_id = i + 1
                                }
                            }

                            connection.query(
                                // insert values from user input into database
                                `INSERT INTO employee (first_name, last_name, role_id, manager_id, manager_confirm)
                                    VALUES (?, ?, ?, ?, ?)`,
                                [data.first_name, data.last_name, role_id, manager_id, manager_confirm],
                                function (err, results, fields) {
                                    if (err) {
                                        console.log(err.message);
                                        return;
                                    }
                                    console.log('Employee added!');
                                    // back to main menu
                                    mainMenu();
                                }
                            );
                        });
                }
            );
        }
    );
};

module.exports = { viewAllEmployees, addEmployee}