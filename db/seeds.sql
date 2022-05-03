USE employee_db;

INSERT INTO department 
    (name)
VALUES 
    ("Engineering"),
    ("Human Resources"), 
    ("Operations"),
    ("Legal");

INSERT INTO role 
    (title, salary, department_id)
VALUES 
    ("Web Developer", 100000, 1), 
    ("HR Business Partner", 150000, 2),
    ("Operations Manager", 130000, 3),
    ("Lawyer", 180000, 4)

INSERT INTO employees 
    (first_name, last_name, role_id,)
VALUES 
    ("Mike", "Sands", 1),
    ("Joan", "Shelly", 2),
    ("John", "Malone", 3),
    ("Andrew", "Burnstine", 4);

