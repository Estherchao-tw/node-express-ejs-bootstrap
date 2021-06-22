//utils/database.js
var mysql= require('mysql2');
exports.base=(sql,data,callback)=>{
  const mysql = require("mysql2");
    var connection = mysql.createConnection({
      host: "localhost",
      user: "owner",
      password: "Emphasize14L",
      database: "coronavirusdb"
    });
    
    connection.connect();
    connection.query(sql,data, function (error, results, fields) {
    if (error) throw error;
        callback(results)
    });
    
    connection.end();
}

