var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/speech', function (req, res, next) {
  res.render('speech');
});

module.exports = router;
