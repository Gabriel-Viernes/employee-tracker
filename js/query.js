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

function add (db, option) {
    switch(option) {
        case 'Add a department'
    }
}
module.exports = {
    view
}
console.log(module.exports)

