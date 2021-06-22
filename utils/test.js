//utils/database.js
const mysql = require("mysql2");
const pool = mysql.createPool({
host: "localhost",
user: "owner",
password: "Emphasize14L",
database: "coronavirusdb"
});
//Testing database connection
// const test = function (err,result) {
//   pool.query("SELECT * FROM daily", function(err, results) {
// //console.log(JSON.stringify(results)); // results contains rows returned by server
  
// console.log("Database blogen connected.");

// });}

// test();

module.exports = pool.promise();