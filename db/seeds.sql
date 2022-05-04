USE employee_db;

INSERT INTO employees(id, first_name, last_name, roles_id, manager_id)
VALUES 
(1, 'Mike', 'Sands', '1', '1'),
(2, 'Joan', 'Shelly', '2', '2'),
(3, 'John', 'Malone', '3', '3'),
(4, 'Andrew', 'Burnstine', '4', '4');

INSERT INTO roles(title, salary, department_id)
VALUES 
("Web Developer", 100000, 1), 
("HR Business Partner", 150000, 2),
("Operations Manager", 130000, 3),
("Lawyer", 180000, 4);

INSERT INTO department(department_name, roles_id)
VALUES 
("Engineering", "1"),
("Human Resources", "2"), 
("Operations", "3"),
("Legal", "4");
