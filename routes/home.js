var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { 
    title: 'Contact Us',
    sayhi: 'HelloWorld Ray'
  })
});
module.exports = router;