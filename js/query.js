const mysql = require('mysql2')

function view (db, option) {
    switch(option) {
        case `View all departments`:
            db.query(`SELECT * FROM department`,(err, result) => {
                if (err) {
                    console.error(err)
                } else {
                    console.log(result)
                }
            })
            break;
        case 'View all roles'

    }
}


