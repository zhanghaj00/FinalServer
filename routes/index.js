var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '张浩',comont:"欢迎来到我的接口" });
});

module.exports = router;
