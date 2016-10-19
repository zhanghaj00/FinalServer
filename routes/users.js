var express = require('express');
var router = express.Router();
var userController = require("../src/controller/userContoller");

/* GET users listing. */
router.post('/Login', function(req, res, next) {
    userController.doLogin(req,res);
});

module.exports = router;
