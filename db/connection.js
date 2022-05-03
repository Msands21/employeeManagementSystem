const mysql = require("mysql2");

// Connect to database
const connection = mysql.createConnection(
    {
    host: 'localhost',
      // MySQL username,
    user: 'root',
      // TODO: Add MySQL password
    password: 'rootroot',
    database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

// error handling
connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;