var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // db password
    password: 'Anshul@2021',
    // db instance name 
    database: 'insta_pp'
})
connection.connect();
console.log("connected to db");
module.exports = connection;