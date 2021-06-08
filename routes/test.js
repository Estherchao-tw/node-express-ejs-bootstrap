var express = require('express');
var router = express.Router();

const testController = require("../controllers/testController");
router.get("/",testController.getDailyDatass);

/* GET coronavirus listing. */
// router.get('/', function(req, res, next) {
//   res.render('dashboard', { title: 'coronavirus' });
// });

module.exports = router;
