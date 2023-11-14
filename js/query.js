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
                        console.log('Table empty!')
                    } else {
                        console.log(result)
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
                        console.log('Table empty!')
                    } else {
                        console.log(result)
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
                        console.log('Table empty!')
                    } else {
                        console.log(result)
                    }
                }
            })
            break;
    }
}

// values will be an array
function add (db, option, values) {
    switch(option) {
        case 'Add a department':
            db.query(`
            INSERT INTO department (name)
            VALUES (${values[0]});
            `, (err, results) => {
                if (err) {
                    console.log('Something went wrong, please check the debug console')
                    console.debug(err)
                } else {
                    if(result.length === 0) {
                        console.log('Table empty!')
                    } else {
                        console.log(result)
                    }
                }
            })
            break;
        case 'Add a role':
            db.query(`
            INSERT INTO role (title, salary)
            VALUES (${values[0], values[1]});
            `, (err, results) => {
                if (err) {
                    console.log('Something went wrong, please check the debug console')
                    console.debug(err)
                } else {
                    if(result.length === 0) {
                        console.log('Table empty!')
                    } else {
                        console.log(result)
                    }
                }
            })
            break;
        case 'Add an employee':
            db.query(`
            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES (${values[0], values[1], values[2], values[3]});
            `, (err, results) => {
                if (err) {
                    console.log('Something went wrong, please check the debug console')
                    console.debug(err)
                } else {
                    if(result.length === 0) {
                        console.log('Table empty!')
                    } else {
                        console.log(result)
                    }
                }
            })
            break;
    }
}
module.exports = {
    view
}
console.log(module.exports)

