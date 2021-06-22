var express = require('express');
var router = express.Router();
const db = require("../utils/pagedb");

router.get('/',(req,res)=>{
         // Get the page parameter value after get; when there is no page parameter value, give it the default value of 0
    let page=(req.query.page==undefined)?1:req.query.page;
    let startPage=page*5;

         // Get data from the database, and then render it to the show page
    let count='select count(*) as count from daily_data';
         let sql=`select id,date,city,location,gender,locally,age from daily_data limit ${startPage},50`;

    db.base(count,null,(result)=>{
        let countNum=result[0].count;
        db.base(sql,null,(result)=>{
          res.render('page',{data:result,count:countNum,page:page});
          console.log(startPage,count);
        })
    })
})
module.exports = router;