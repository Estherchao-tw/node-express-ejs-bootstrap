var express = require('express');
var router = express.Router();


router.get('/', function (req,res) {
  let currentPage = req.query.page || 1;
  let perPage = 3;
  let totalItems;
  var objJson = [
    { adName: "AdName 1"},
    { adName: "AdName 2"},
    { adName: "AdName 3"},
    { adName: "AdName 4"},
    { adName: "AdName 5"},
    { adName: "AdName 6"},
    { adName: "AdName 7"},
    { adName: "AdName 8"},
    { adName: "AdName 9"},
    { adName: "AdName 10"}
  ];
  totalItems = objJson.length;
  const lastPage = Math.ceil(totalItems / perPage);
  console.log(`${lastPage}`);
  var prev = currentPage - 1;
  var next= currentPage +1;
  if (prev <1) {
    prev = " ";
  }
  if (currentPage > 1) {
    currentPage--;
    changePage(currentPage);
    }
  if (currentPage > 1) {
          currentPage--;
          changePage(currentPage);
      }
    
  console.log(req.query.page );
  res.render('pagination', { title: 'Express' ,prev:prev,next:next,currentPage: currentPage});
});

router.post('/', function(req, res, next) {
  console.log('name:' + req.body.page);
  res.render('pagination', { title: 'Express' });
});
module.exports = router;
