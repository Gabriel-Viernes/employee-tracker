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

query.view(db, "View all departments")


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
            name:'role_title',
            when: (answers) => {
                if (answers.menuSelect === 'Add a role') {
                    return true;
                }

            }
        },
        {
            type:'input',
            message:'Please enter the salary of the role',
            name:'role_salary',
            when: (answers) => {
                if (answers.menuSelect === 'Add a role') {
                    return true;
                }

            }
        },
        {
            type:'input',
            message:'Please enter the department id of the role',
            name:'role_title',
            when: (answers) => {
                if (answers.menuSelect === 'Add a role') {
                    return true;
                }

            }
        },
        {
            type:'input',
            message:"Please enter the employee's first name",
            name:'employee_first_name',
            when: (answers) => {
                if(answers.menuSelect === 'Add an employee') {
                    return true;
                }

            }
        },
        {
            type:'input',
            message:"Please enter the employee's last name",
            name:'employee_last_name',
            when: (answers) => {
                if(answers.menuSelect === 'Add an employee') {
                    return true;
                }

            }
        },
        {
            type:'input',
            message:"Please enter the employee's role id",
            name:'employee_role_id',
            when: (answers) => {
                if(answers.menuSelect === 'Add an employee') {
                    return true;
                }

            }
        },        {
            type:'input',
            message:"Please enter the employee's manager_id",
            name:'employee_manager_id',
            when: (answers) => {
                if(answers.menuSelect === 'Add an employee') {
                    return true;
                }

            }
        },
        {
            type:'input',
            message:"Please enter the employee's id",
            name:'employee_update_id',
            when: (answers) => {
                if(answers.menuSelect === 'Update an employee role') {
                    return true;
                }

            }
        },
        {
            type:'input',
            message:"Please enter the employee's new role id",
            name:'employee_update_role_id',
            when: (answers) => {
                if(answers.menuSelect === 'Update an employee role') {
                    return true;
                }

            }
        },
    ]).then((answers) => {

    })
}
uiStart()


// function uiStart () {
//     inquirer.prompt([
//         {
//             type:'list',
//             message:'What would you like to do?',
//             name:'menuSelect',
//             choices: [
//                 'View all departments',
//                 'View all roles',
//                 'View all employees',
//                 'Add a department',
//                 'Add a role',
//                 'Add an employee',
//                 'Update an employee role'
//             ]
//         }
//     ])
// }
// uiStart()

