//controllers/dashboardController.js

//const DailyDataTest = require("../models/testModel");


exports.getDailyDatass = async (req,res, next) => {

  await DailyDataTest.fetchALL().then(([rows,result,fields]) => {
    let totalCount =rows;
    console.log(JSON.stringify(totalCount));
    //res.json(totalCount);
    //res.json(fields);
    // res.render("test",{ data:rows, title:"test Data"}
    
    if (req.body.start == '' || req.body.limit == ''){
      let StartNum = 0;
      let LimitNum = 10;
      console.log(JSON.stringify(StartNum,LimitNum));

    }
    });
  
  await DailyDataTest.find(( resolve,reject) => {
    if (error) { return reject('錯誤訊息') }
  }).then(([rows]) =>{
    //console.log(JSON.stringify(rows));
    console.log('資料傳輸成功');
    res.render("test",{ data:rows, title:"test Data"});
  }).catch(error => console.log('錯誤的訊息',error)
  );
  };