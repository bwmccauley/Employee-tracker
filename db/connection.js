const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "rootroot",
  database: "employeesDB"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
