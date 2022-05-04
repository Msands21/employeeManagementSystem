const { mainMenu } = require('../index');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employee_db'
});

// view all departments
const viewAllDepartments = () => {
    connection.query(
        `SELECT * FROM department`,
        function (err, results, fields) {
            if (err) {
                console.log(err.message);
                return;
            }

            console.table(results);
            mainMenu();
        }
    )
}

// Add a department
const addDepartment = () => {
    inquirer
        .prompt({
            type: 'text',
            name: 'department_name',
            message: 'Enter the name of the department you would like to add: '
        })
        .then((data) => {
            connection.query(
                `INSERT INTO department (name)
                VALUES(?)`,
                [data.dep_name],
                function (err, results, fields) {
                    if (err) {
                        console.log(err.message);
                        return;
                    }

                    console.log('Department added!');
                    mainMenu();
                }
            )
        })
}

module.exports = { viewAllDepartments, addDepartment }