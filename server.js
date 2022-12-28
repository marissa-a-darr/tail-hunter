const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "employees_db",
  },
  console.log("Connected to the Tail Hunter Employee Database!")
);

function init() {
  function menu() {
    inquirer.prompt([
      {
        type: "list",
        name: "Menu"
        message: "Welcome to your Employee Database. Please select one of the options.",
        choices: [
          "View all Departments",
          "View All Roles",
          "View All Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Update an Employee Role",
          "Exit",
        ],
      },
    ])
    .then(function (input) {
      switch(input.action) {
        case "View All Departments":
          depView();
          break;
          case "View All Roles": 
          roleView();
          break;
          case "View All Employees": 
          employeeView();
          break;
          case "Add a Department":
            depAdd();
          break;
          case "Add a Role": 
          roleAdd();
          break;
          case "Add an Employee": 
          employeeAdd();
          break;
          case "Update an Employee":
            employeeUpdate();
            break;
            case "Exit":
              process.exit();
      }
    })
  }
}

function depView() {
  const sql = 'SELECT * FROM department';
  db.query(sql, (err, res) => {
    if (err) throw err;
    console.log(res);
    console.table(res);
    menu();
  })
}

function roleView () {
  const sql = 'SELECT * FROM role';
  db.query(sql, (err, res)=> {
    if (err) throw err;
    console.log(res);
    console.table(res);
    menu();
  })
}

function employeeAdd() {
inquirer
.prompt (
  [
    {
      type: "input",
      name: "employee-firstname",
      message: "What is the new employee's first name?"
    },
    {
      type: "input",
      name: "employee-lastname",
      message: "What is the new employee's last name?"
    },
    {
      type: "list",
      name:"role",
      message: "What is their role?",
      choices: 
    },
    {
      type: ""
    }
  ]
)
}