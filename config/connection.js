// Set up MySQL connection.
require('dotenv').config();
var mysql = require("mysql");
var connection;

// setup for heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: process.env.port,
    host: process.env.host,
    user: process.env.user,
    database: process.env.database
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
