var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "aws.kairos",
  user: "sa",
  password: "0330",
  database: "dev_db",
});

connection.connect();

connection.query("SELECT * from topic", function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

connection.end();
//node mysql.js
