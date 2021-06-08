//controllers/dashboardController.js

const DailyDataTest = require("../models/testModel");

exports.getDailyDatass = async (req,res, next) => {
  await DailyDataTest.fetchALL().then(([rows]) => {
    //console.log(JSON.stringify(rows));
    //res.json(rows);
    // res.render("test",{ data:rows, title:"test Data"}
    res.render("test",{ data:rows, title:"test Data"})

    });
  };