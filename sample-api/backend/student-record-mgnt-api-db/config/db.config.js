var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'adadmin',
  password: 'adadmin123',
  database: 'student'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

module.exports = connection;

/* MYSQL_USER
adadmin

MYSQL_PASSWORD
adadmin123

MYSQL_ROOT_PASSWORD
root@123

MYSQL_DATABASE
student
 */