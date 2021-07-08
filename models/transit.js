//read and write JSON file using Node.js
const DailyDataTest = require("../models/monthModel");

const fs = require('fs');
const linedata = [];
var lineData ;
  DailyDataTest.find().then(([rows]) => {
    lineData = rows;
    //console.log(JSON.stringify(lineData));
    
    linedata.push(lineData);
    
    // STEP 3: Writing to a file
    fs.writeFile("linedata.json", JSON.stringify(linedata), err => {
      
      // Checking for errors
      if (err) throw err;
      
      console.log("Done writing"); // Success
    });
   
  });