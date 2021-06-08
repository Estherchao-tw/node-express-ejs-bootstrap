//controllers/dashboardController.js

const DailyData = require("../models/coronaModel");

exports.getDailyDatas = async (req,res, next) => {
  await DailyData.fetchALL().then(([rows]) => {
    //console.log(JSON.stringify(rows));
    //es.json(rows);
    res.render("daily",{ data:rows, title:"Daily Data"});
  });
};