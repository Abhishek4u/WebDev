var mysql = require("mysql");
var connection = mysql.createConnection( {

    host : 'localhost',
    user : 'root',
// change password here when (mysql password)
    password : "password",
    database : "insta_pp"
})

connection.connect();
module.exports = connection;