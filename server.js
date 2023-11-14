const inquirer = require('inquirer');
const mysql = require('mysql2');
const query = require('./js/query.js')

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
        },
        {   
            type:'input',
            message:'Please enter the department name',
            name: 'department_name',
            when: (answers) => {
                if(answers.menuSelect === 'Add a department') {
                    return true;
                }

            }
        },
        {
            type:'input',
            message:'Please enter the name of the role',
            name:'role_name',
            when: (answers) => {
                if (answers.menuSelect === 'Add a role') {
                    return true;
                }

            }
        },
        {
            type:'input',
            message:"Please enter the employee's name",
            name:'employee_name',
            when: (answers) => {
                if(answers.menuSelect === 'Add an employee') {
                    return true;
                }

            }
        }
    ]).then((answers) => {

    })
}
uiStart()