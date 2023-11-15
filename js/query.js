const mysql = require('mysql2')

function view (db, option) {
    switch(option) {
        case `View all departments`:
            db.query(`SELECT * FROM department`,(err, result) => {
                if (err) {
                    console.log('Something went wrong, please check the debug console')
                    console.debug(err)
                } else {
                    if(result.length === 0) {
                        console.log('\n')
                        console.log('Table empty!')
                    } else {
                        console.log('\n')
                        console.table(result)
                    }
                }
            })
            break;
        case 'View all roles':
            db.query(`SELECT * FROM role`, (err, result) => {
                if(err) {
                    console.log('Something went wrong, please check the debug console')
                    console.debug(err)
                } else {
                    if(result.length === 0) {
                        console.log('\n')
                        console.log('Table empty!')
                    } else {
                        console.log('\n')
                        console.table(result)
                    }
                }
            })
            break;
        case 'View all employees':
            db.query('SELECT * FROM employee', (err, result) => {
                if (err) {
                    console.log('Something went wrong, please check the debug console')
                    console.debug(err)
                } else {
                    if(result.length === 0) {
                        console.log('\n')
                        console.log('Table empty!')
                    } else {
                        console.log('\n')
                        console.table(result)
                    }
                }
            })
            break;
        case 'View all roles':


    }
}


function add (db, option, answers) {
    switch(option) {
        case 'Add a department':
            db.query(`
            INSERT INTO department (name)
            VALUES ('${answers.department_name}');
            `, (err, results) => {
                if (err) {
                    console.log('Something went wrong!')
                    console.log(err)
                } else {
                    console.log('Role added')
                }
            })
            break;
        case 'Add a role':
            db.query(`
            INSERT INTO role (title, salary, department_id)
            VALUES ('${answers.role_title}','${answers.role_salary}','${answers.role_department_id}');
            `, (err, results) => {
                if (err) {
                    console.log('Something went wrong!')
                    console.log(err)
                } 
            })
            break;
        case 'Add an employee':
            db.query(`
            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ('${answers.employee_first_name}', '${answers.employee_last_name}', '${answers.employee_role_id}', '${answers.employee_manager_id}');
            `, (err, results) => {
                if (err) {
                    console.log('Something went wrong!')
                    console.log(err)
                } 
            })
            break;
    }
}

function update(db, answers) {
    db.query(`
    UPDATE employee
    SET role_id = '${answers.employee_update_role_id}'
    WHERE id = '${answers.employee_update_id}';
    `)
}
module.exports = {
    view,
    add,
    update
}
console.log(module.exports)

