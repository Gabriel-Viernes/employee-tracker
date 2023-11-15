



INSERT INTO department(name)
VALUES 
    ('Management'),
    ('Human Resources'),
    ('Delivery'),
    ('Fleet Management');


INSERT INTO role(title, salary, department_id)
VALUES
    ('Driver', 19.00, 3),
    ('Mechanic', 21.00, 4),
    ('Human Resources', 25.00, 2),
    ('Fleet Manager', 30.00, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Smith', 4, 1),
    ('Joohn', 'Smiith', 1, 1),
    ('Jooohn', 'Smith', 2, 1),
    ('Joooohn', 'Smith', 3, 1);