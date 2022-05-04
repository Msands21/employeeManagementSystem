DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT,
    department_name VARCHAR(250) UNIQUE NOT NULL,
    roles_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(250) UNIQUE NOT NULL,
    last_name VARCHAR(250) UNIQUE NOT NULL,
    roles_id INT UNSIGNED NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
);