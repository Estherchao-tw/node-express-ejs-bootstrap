//utils/database.js
const mysql = require("mysql2");
const pool = mysql.createPool({
host: "localhost",
user: "owner",
password: "Emphasize14L",
database: "coronavirusdb"
});

module.exports = pool.promise();