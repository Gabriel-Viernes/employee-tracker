const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./js/query.js')

const db = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'spottedleaf',
        database:'employees_db'
    },
    console.log(`Connected to database`)
)


function uiStart () {
    inquirer.prompt([
        {
            type:'list',
            message:'What would you like to do?',
            name:'menuSelect',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'
            ]
        }
    ])
}
uiStart()