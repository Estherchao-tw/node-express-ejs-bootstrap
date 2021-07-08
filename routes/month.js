var express = require('express');
var router = express.Router();
//增加引用函式
const DailyDataTest = require("../models/monthModel");



//接收GET請求
router.get('/', function (req, res, next) {
  var pageNo = Number(req.params.pageNo);  //頁碼, 轉數字

  // 如果輸入頁碼有誤
  if (isNaN(pageNo) || pageNo < 1) {
    pageNo = 1;
  }

  DailyDataTest.fetchPage(pageNo).then((rows) => {
    console.log(rows.totalPage);


    if (rows.data.length > 0) {
      res.render('test', { items: rows });  //將資料傳給顯示頁面
      
    } else {
      res.render('error');  //導向找不到頁面
    }
  })
});

module.exports = router;
