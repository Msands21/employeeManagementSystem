USE employee_db;

INSERT INTO department(name)
VALUES 
("Engineering"),
("Human Resources"), 
("Operations"),
("Legal");

INSERT INTO roles(title, salary, department_id)
VALUES 
("Web Developer", 100000, 1), 
("HR Business Partner", 150000, 2),
("Operations Manager", 130000, 3),
("Lawyer", 180000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id, manager_confirm)
VALUES 
('Mike', 'Sands', 1, null, true),
('Joan', 'Shelly', 2, 2, false),
('John', 'Doe', 2, null, true),
('John', 'Malone', 3, 3, false),
('Jeff', 'Griffin', 3, null, true),
('Andrew', 'Burnstine', 4, null, true),
('Jermaine', 'Burnstine', 4, 4, false);

INSERT INTO manager (first_name, last_name)
SELECT first_name,
    last_name
FROM employee
WHERE manager_confirm = 1;




