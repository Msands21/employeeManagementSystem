const { mainMenu } = require('../index');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employee_db'
});

// populate all roles into table
const viewAllRoles = () => {
    connection.query(
        `SELECT roles.id, roles.title, roles.salary, department.name
            FROM roles
            LEFT JOIN department
            ON roles.department_id = department.id `,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.table(results);
            mainMenu();
        }
    );
};

const addRole = () => {
    connection.query(
        `SELECT * FROM department`,
        function (err, results, fields) {
            if (err) {
                console.log(err);
                return;
            }
            let departmentArr = [];
            results.forEach(item => {
                departmentArr.push(item.name)
            })
            inquirer
                .prompt([
                    {
                        type: 'text',
                        name: 'role',
                        message: 'Enter new role name: '
                    },
                    {
                        type: 'number',
                        name: 'salary',
                        message: 'Enter the salary for the above role, do not use commas or periods: '
                    },
                    {
                        type: 'list',
                        name: 'department',
                        message: 'Which department will your role be a part of: ',
                        choices: departmentArr
                    }
                ])
                .then((data) => {
                    let department_id;

                    for (let i = 0; i < departmentArr.length; i++) {
                        if (departmentArr[i] === data.department) {
                            department_id = i + 1;
                        };
                    };
                    connection.query(
                        `INSERT INTO roles (title, salary, department_id)
                            VALUES(?,?,?)`,
                        [data.role, data.salary, department_id],
                        function (err, results, fields) {
                            if (err) {
                                console.log(err.message);
                                return;
                            }
                            console.log('Role added!')
                            mainMenu();
                        }
                    );
                });
        }
    );
};

module.exports = { viewAllRoles, addRole };