/**
 * Created by zhanghao on 2016/10/19.
 */
var express = require('express');
var router = express.Router();
var authUser = require('../src/util/authFilter');

var bbsController = require('../src/controller/bbsController');
/* GET home page. */
router.post('/postBbs', function(req, res,next) {

    if(authUser.authUser(req,res)){
        bbsController.dobbsTitleSave(req,res);
    }

});

router.get('/pageBbs',function(req, res, next){
    bbsController.dobbsPageQuery(req,res);
})

module.exports = router;
