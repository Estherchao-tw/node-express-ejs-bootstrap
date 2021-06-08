var express = require('express');
var router = express.Router();

const dailyController = require("../controllers/dailyController");
router.get("/",dailyController.getDailyDatas);

/* GET coronavirus listing. */
// router.get('/', function(req, res, next) {
//   res.render('dashboard', { title: 'coronavirus' });
// });

module.exports = router;
